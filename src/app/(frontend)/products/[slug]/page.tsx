import React from 'react';
import { getPayloadClient } from '@/utilities/getPayload';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { generateMeta } from '@/utilities/generateMeta';
import { LivePreviewListener } from '@/components/LivePreviewListener';

// Components for product detail page
import ProductHero from '@/components/Products/ProductHero';
import ProductDetails from '@/components/Products/ProductDetails';
import ProductFeatures from '@/components/Products/ProductFeatures';
import RelatedProducts from '@/components/Products/RelatedProducts';
import CallToAction from '@/components/shared/CallToAction';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const { isEnabled: draft } = await draftMode();
  const { slug } = params;

  // Get product data
  const payload = await getPayloadClient();
  const product = await payload
    .find({
      collection: 'products',
      where: {
        slug: {
          equals: slug,
        },
      },
      draft,
      limit: 1,
    })
    .then((res: any) => res.docs[0] || null);

  // If product not found, return 404
  if (!product) {
    notFound();
  }

  // Get related products (excluding current product)
  const relatedProducts = await payload
    .find({
      collection: 'products',
      where: {
        slug: {
          not_equals: slug,
        },
      },
      draft,
      limit: 3,
    })
    .then((res: any) => res.docs || []);

  return (
    <main className="product-detail-page">
      {draft && <LivePreviewListener />}

      {/* Product Hero Section */}
      <ProductHero 
        title={product.name}
        description={product.description}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Product Details */}
        <ProductDetails product={product} />
        
        {/* Product Features */}
        {product.features && product.features.length > 0 && (
          <ProductFeatures features={product.features} />
        )}
      </div>

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />

      {/* Call to Action */}
      <CallToAction 
        title="Interested in our products?"
        description="Contact us to learn more about how our products can benefit your business."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </main>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const payload = await getPayloadClient();
  const product = await payload
    .find({
      collection: 'products',
      where: {
        slug: {
          equals: slug,
        },
      },
      draft: false,
      limit: 1,
    })
    .then((res: any) => res.docs[0] || null);

  if (!product) {
    return {
      title: 'Product Not Found | JS SBU | Brain Station 23',
    };
  }

  return generateMeta({
    title: `${product.name} | Products | JS SBU | Brain Station 23`,
    description: product.meta?.description || `Learn about our ${product.name} product and how it can benefit your business.`,
  });
}

export async function generateStaticParams() {
  const payload = await getPayloadClient();
  const products = await payload
    .find({
      collection: 'products',
      limit: 100,
    })
    .then((res: any) => res.docs || []);

  return products.map((product: any) => ({
    slug: product.slug,
  }));
}
