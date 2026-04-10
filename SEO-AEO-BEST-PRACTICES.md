# SEO & AEO Best Practices Reference

> Compiled from the Executive Krystalore platform build (Feb 2026). Use as a checklist for future projects.

## SEO Essentials

### 1. Meta Tags (Every Page)
- **Title tag**: Unique, under 60 chars, primary keyword first, brand at end
- **Meta description**: Unique, under 160 chars, include CTA, target keyword naturally
- **Keywords**: 5-10 relevant terms (low direct SEO value but helps organization)
- **Canonical URL**: Prevents duplicate content, consolidates authority
- **Viewport**: `width=device-width, initial-scale=1`
- **Theme-color**: Brand color for mobile browser chrome

### 2. Open Graph & Social Meta
```html
og:title, og:description, og:image (1200x630), og:url, og:type, og:site_name, og:locale
twitter:card (summary_large_image), twitter:title, twitter:description, twitter:image
```

### 3. Structured Data (JSON-LD)
- **Organization**: Homepage - name, logo, founder, sameAs (social profiles)
- **Book**: Author, publisher, genre, image, description
- **Course**: Name, description, provider, instructor
- **FAQ**: Question/answer pairs for featured snippets
- **BreadcrumbList**: Navigation hierarchy
- Test with: https://search.google.com/test/rich-results

### 4. XML Sitemap
- List all public pages with `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`
- Priority: homepage 1.0, key pages 0.8-0.9, subpages 0.7, auth pages 0.5, admin 0.3
- Reference in robots.txt
- Update `lastmod` when content changes

### 5. robots.txt
```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /dashboard
Disallow: /api/
Sitemap: https://yourdomain.com/sitemap.xml
```

### 6. Image SEO
- **Filenames**: Descriptive, hyphenated keywords (e.g., `road-to-resilience-book-cover.png`)
- **Alt tags**: Descriptive, include keywords naturally, under 125 chars
- **Self-host** when possible for speed and control
- **Lazy loading**: Use `loading="lazy"` for below-fold images
- **Next.js Image**: Use `next/image` for automatic optimization when possible

### 7. Internal Linking
- Link between related pages naturally
- Use descriptive anchor text (not "click here")
- Footer links to key pages
- Breadcrumbs for hierarchy

### 8. Technical SEO
- **HTTPS**: Required
- **Mobile-responsive**: All pages
- **Fast loading**: Optimize images, minimize JS bundles
- **Clean URLs**: Descriptive, hyphenated slugs
- **lang attribute**: `<html lang="en">`

## AEO (Answer Engine Optimization)

### What is AEO?
Optimizing content for AI-powered answer engines (ChatGPT, Google AI Overviews, Perplexity, Copilot) that extract, synthesize, and cite web content.

### Key Principles

1. **Structured Data**: JSON-LD helps AI understand entities and relationships
2. **Question-Answer Format**: Create content that directly answers common questions
3. **Topical Authority**: Deep, comprehensive content on your domain expertise
4. **Entity Optimization**: Consistent identity across structured data and social profiles
5. **Conversational Keywords**: Write naturally, matching how people ask questions verbally
6. **Content Freshness**: Regular updates signal maintained, authoritative content
7. **Cited Sources**: Link to authoritative external sources when making claims
8. **Clear Hierarchy**: Use headings (H1-H3) to structure content logically

### AEO-Specific Tactics
- Create FAQ sections on key pages
- Use schema.org markup extensively
- Build consistent entity profiles (same name, description, links across platforms)
- Write in clear, concise prose that AI can excerpt
- Avoid content hidden behind JavaScript-only rendering (use SSR/SSG)

## Next.js-Specific Implementation

### Metadata in Server Components
```tsx
export const metadata: Metadata = {
  title: 'Page Title | Brand',
  description: 'Page description...',
  keywords: 'keyword1, keyword2',
  openGraph: { ... },
}
```

### Metadata for Client Components
Create a `layout.tsx` in the same directory:
```tsx
// app/page-name/layout.tsx
export const metadata: Metadata = { title: '...', description: '...' }
export default function Layout({ children }) { return <>{children}</> }
```

### JSON-LD in Components
```tsx
function JsonLd() {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Organization', ... }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}
```

### Title Template (Root Layout)
```tsx
title: {
  default: 'Full Default Title | Brand',
  template: '%s | Brand',
}
```

## Checklist for New Projects

- [ ] Root layout: metadata with title template, description, OG, Twitter, viewport, theme-color, robots
- [ ] Every page: unique title and description
- [ ] Homepage: Organization JSON-LD
- [ ] Product/book/course pages: relevant schema markup
- [ ] XML sitemap with all public pages
- [ ] robots.txt with sitemap reference
- [ ] Image filenames are SEO-friendly
- [ ] All images have descriptive alt tags
- [ ] Canonical URLs set
- [ ] Social profiles linked in structured data (sameAs)
- [ ] Internal linking between related pages
- [ ] Footer with sitemap link and key page links
- [ ] Marketing notes page for tracking changes
