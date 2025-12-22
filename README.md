# enemyr-blog

Personal blog and portfolio built with:

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Content**: MDX pages with Rust compiler
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Components**: [shadcn/ui](https://ui.shadcn.com)
- **AI**: [Vercel AI SDK](https://sdk.vercel.ai) with Groq
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Deployment**: [Vercel](https://vercel.com)

## Running Locally

Requires Node.js v18.17+.

```bash
pnpm install
pnpm dev
```

## Project Structure

- `app/` - MDX pages and routes
- `components/ui/` - shadcn/ui components
- `mdx-components.tsx` - Custom MDX components with sugar-high syntax highlighting
