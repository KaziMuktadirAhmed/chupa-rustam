import React from 'react';
import { getPayloadClient } from '@/utilities/getPayload';
import { draftMode } from 'next/headers';
import type { Metadata } from 'next';
import { generateMeta } from '@/utilities/generateMeta';
import { LivePreviewListener } from '@/components/LivePreviewListener';

// Components for products page sections
import ProductsHero from '@/components/Products/ProductsHero';
import ProductsGrid from '@/components/Products/ProductsGrid';
import ProductFeatures from '@/components/Products/ProductFeatures';
import CallToAction from '@/components/shared/CallToAction';

export default async function ProductsPage() {
  const { isEnabled: draft } = await draftMode();

  // Get products from our custom collection
  const payload = await getPayloadClient();
  const products = await payload
    .find({
      collection: 'products',
      draft,
    })
    .then((res: any) => res.docs || []);

  return (
    <main className="products-page">
      {draft && <LivePreviewListener />}

      {/* Products Hero Section */}
      <ProductsHero 
        title="Our Products" 
        description="Discover our suite of innovative JavaScript-powered products designed to solve real business challenges and enhance productivity."
      />

      <div className="container mx-auto px-4 py-12">
        {/* Products Grid */}
        <ProductsGrid products={products} />
        
        {/* Product Features Highlight */}
        <ProductFeatures />
      </div>

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

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    title: 'Products | JS SBU | Brain Station 23',
    description: 'Explore our suite of JavaScript-powered products designed to solve business challenges and enhance productivity.',
  });
}
