const SITE_URL = 'https://enemyr.com';

export default async function sitemap() {
  const routes = ['', '/bio', '/sajn', '/korall', '/cerno', '/duva', '/quarry', '/buildr', '/shortlist', '/ribban', '/running'].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString()
  }));

  return routes;
}
