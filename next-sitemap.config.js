/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://gokulnath.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/private/'],
      },
    ],
    additionalSitemaps: [
      'https://gokulnath.dev/sitemap.xml',
    ],
  },
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7;
    let changefreq = 'monthly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path.includes('#skills') || path.includes('#experience')) {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (path.includes('#contact')) {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://gokulnath.dev${path}`,
          hreflang: 'en',
        },
      ],
    };
  },
  additionalPaths: async (config) => {
    const result = [];
    
    // Add additional important pages
    const additionalPaths = [
      '/#home',
      '/#summary',
      '/#experience',
      '/#skills',
      '/#education',
      '/#contact',
    ];

    for (const path of additionalPaths) {
      result.push({
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    }

    return result;
  },
}; 