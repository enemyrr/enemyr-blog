import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  // Note: Using the Rust compiler means we cannot use
  // rehype or remark plugins. If you need them, remove
  // the `experimental.mdxRs` flag.
  experimental: {
    mdxRs: { mdxType: 'gfm' }
  },
  async rewrites() {
    return [
      {
        // Rewrite /.md to the root API handler
        source: '/index.md',
        destination: '/api/md',
      },
      {
        // Rewrite /:path.md to the API that serves raw markdown
        source: '/:path+.md',
        destination: '/api/md/:path+',
      },
    ]
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
