# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server with Turbopack
pnpm build        # Production build with Turbopack
pnpm start        # Start production server
```

## Architecture

This is a Next.js 16 MDX blog using the App Router with pages defined as `.mdx` files.

**Key patterns:**
- Pages are `.mdx` files in `app/*/page.mdx` (e.g., `app/bio/page.mdx`)
- MDX uses the Rust compiler (`experimental.mdxRs`) with GFM support - no rehype/remark plugins
- Custom MDX components defined in `mdx-components.tsx` (code highlighting via sugar-high)
- UI components from shadcn/ui (new-york style) in `components/ui/`
- Path alias: `@/*` maps to project root

**Styling:**
- Tailwind CSS v4 with CSS variables for theming
- Dark theme is hardcoded (`#1A1A1A` background)
- Font: Inter via next/font
- `cn()` utility in `lib/utils.ts` for class merging

**AI SDK:**
- Uses Vercel AI SDK (`ai` package)
- AI component registry at `https://registry.ai-sdk.dev/`
- AI components in `components/ai-elements/`
