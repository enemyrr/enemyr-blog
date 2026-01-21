import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ path?: string[] }> }
) {
  const { path: pathSegments } = await params
  const requestedPath = pathSegments ? '/' + pathSegments.join('/') : '/'

  // Sanitize the path to prevent directory traversal
  const sanitizedPath = requestedPath.replace(/\.\./g, '').replace(/\/+/g, '/')

  // Construct the file path
  // For "/bio" -> app/bio/page.mdx
  const relativePath =
    sanitizedPath === '/'
      ? 'app/page.mdx'
      : `app${sanitizedPath}/page.mdx`

  const filePath = path.join(process.cwd(), relativePath)

  try {
    const content = await readFile(filePath, 'utf-8')

    return new NextResponse(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  } catch {
    return new NextResponse('Page not found', { status: 404 })
  }
}
