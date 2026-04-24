import React from 'react'
import type { BlockOverrides } from '@/lib/cms-content'

interface EditableImageProps {
  blockId: string
  defaultSrc: string
  defaultAlt?: string
  overrides?: BlockOverrides
  className?: string
  width?: number
  height?: number
  loading?: 'eager' | 'lazy'
}

/**
 * Renders an image from CMS override (if present) or the provided default src.
 * Server component. Pure HTML <img> for maximum compatibility with arbitrary
 * page layouts; replace with next/image where the layout already uses it.
 */
export default function EditableImage({
  blockId,
  defaultSrc,
  defaultAlt = '',
  overrides,
  className,
  width,
  height,
  loading,
}: EditableImageProps) {
  const o = overrides?.[blockId]
  const src = o?.src || defaultSrc
  const alt = o?.alt ?? defaultAlt
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      data-cms-block={blockId}
      data-cms-type="image"
    />
  )
}
