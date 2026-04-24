import React from 'react'
import type { BlockOverrides } from '@/lib/cms-content'

type Tag = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'strong' | 'em'

interface EditableTextProps {
  blockId: string
  defaultText: string
  overrides?: BlockOverrides
  as?: Tag
  className?: string
  children?: never
}

/**
 * Renders text from CMS override (if present) or the provided default.
 * Adds a data-cms-block attribute so admin tooling can highlight editable
 * regions in preview mode without affecting visual layout.
 *
 * Server component — safe to use anywhere.
 */
export default function EditableText({
  blockId,
  defaultText,
  overrides,
  as = 'span',
  className,
}: EditableTextProps) {
  const Tag = as as any
  const text = overrides?.[blockId]?.text ?? defaultText
  return (
    <Tag className={className} data-cms-block={blockId} data-cms-type="text">
      {text}
    </Tag>
  )
}
