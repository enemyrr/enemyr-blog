const SITE_URL = 'https://enemyr.com';

export default async function sitemap() {
  const routes = ['', '/bio', '/sajn', '/ribban', '/running', '/ai'].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString()
  }));

  return routes;
}
