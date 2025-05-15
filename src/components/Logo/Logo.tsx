import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  logoUrl?: string
  logoText?: string
  textClassName?: string
  variant?: 'default' | 'compact' | 'stacked'
}

export const Logo = (props: Props) => {
  const {
    loading: loadingFromProps,
    priority: priorityFromProps,
    className,
    logoUrl,
    logoText,
    textClassName,
    variant = 'default',
  } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  const containerClasses = clsx(
    'flex items-center flex-nowrap',
    variant === 'stacked' && 'flex-col',
    className,
  )

  const textClasses = clsx(
    'font-semibold whitespace-nowrap transition-colors duration-200 dark:text-white text-gray-800',
    variant === 'default' && 'hidden md:block ml-3',
    variant === 'compact' && 'hidden lg:block ml-2 text-sm',
    variant === 'stacked' && 'mt-2 text-center',
    textClassName,
  )

  const imageClasses = clsx(
    'max-w-[9.375rem] w-full h-[34px] object-contain',
    variant === 'compact' && 'max-w-[7.5rem]',
    variant === 'stacked' && 'mb-1',
  )

  return (
    <div className={containerClasses}>
      {/* eslint-disable @next/next/no-img-element */}
      <img
        alt={logoText || 'Company logo'}
        width={variant === 'compact' ? 160 : 193}
        height={34}
        loading={loading}
        fetchPriority={priority}
        decoding="async"
        className={imageClasses}
        src={logoUrl}
      />
      {logoText && <span className={textClasses}>{logoText}</span>}
    </div>
  )
}
