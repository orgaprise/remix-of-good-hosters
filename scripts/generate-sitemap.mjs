import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://goodhosters.com';
const DIST_DIR = path.resolve(__dirname, '../dist');
const PUBLIC_DIR = path.resolve(__dirname, '../public');

// Define your routes with their priorities, change frequencies, and optional images
const routes = [
  { 
    path: '/', 
    priority: 1.0, 
    changefreq: 'daily',
    title: 'Best Web Hosting 2026: Expert Reviews & Comparison'
  },
  // Hosting provider reviews (when added)
  { path: '/reviews/hostinger', priority: 0.9, changefreq: 'weekly', title: 'Hostinger Review 2026' },
  { path: '/reviews/bluehost', priority: 0.9, changefreq: 'weekly', title: 'Bluehost Review 2026' },
  { path: '/reviews/siteground', priority: 0.9, changefreq: 'weekly', title: 'SiteGround Review 2026' },
  { path: '/reviews/cloudways', priority: 0.9, changefreq: 'weekly', title: 'Cloudways Review 2026' },
  { path: '/reviews/a2-hosting', priority: 0.9, changefreq: 'weekly', title: 'A2 Hosting Review 2026' },
  { path: '/reviews/digitalocean', priority: 0.9, changefreq: 'weekly', title: 'DigitalOcean Review 2026' },
  // Category pages
  { path: '/hosting/shared', priority: 0.8, changefreq: 'weekly', title: 'Best Shared Hosting' },
  { path: '/hosting/vps', priority: 0.8, changefreq: 'weekly', title: 'Best VPS Hosting' },
  { path: '/hosting/cloud', priority: 0.8, changefreq: 'weekly', title: 'Best Cloud Hosting' },
  { path: '/hosting/wordpress', priority: 0.8, changefreq: 'weekly', title: 'Best WordPress Hosting' },
  // Blog articles
  { path: '/blog/domain-registration-guide-2026', priority: 0.7, changefreq: 'monthly', title: 'Domain Registration Guide' },
  { path: '/blog/website-backup-strategies', priority: 0.7, changefreq: 'monthly', title: 'Website Backup Strategies' },
  { path: '/blog/professional-email-hosting', priority: 0.7, changefreq: 'monthly', title: 'Professional Email Hosting' },
  { path: '/blog/hosting-comparison-2026', priority: 0.8, changefreq: 'weekly', title: 'Hosting Comparison 2026' },
  { path: '/blog/cloud-vs-shared-hosting', priority: 0.7, changefreq: 'monthly', title: 'Cloud vs Shared Hosting' },
  { path: '/blog/hosting-security-features', priority: 0.7, changefreq: 'monthly', title: 'Hosting Security Features' },
  // Static pages
  { path: '/about', priority: 0.6, changefreq: 'monthly', title: 'About Good Hosters' },
  { path: '/contact', priority: 0.6, changefreq: 'monthly', title: 'Contact Us' },
  { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly', title: 'Privacy Policy' },
  { path: '/terms-of-service', priority: 0.3, changefreq: 'yearly', title: 'Terms of Service' },
  { path: '/cookie-policy', priority: 0.3, changefreq: 'yearly', title: 'Cookie Policy' },
  { path: '/disclosure', priority: 0.3, changefreq: 'yearly', title: 'Affiliate Disclosure' },
];

// Image sitemap entries
const images = [
  { loc: '/android-chrome-512x512.png', title: 'Good Hosters Logo' },
  { loc: '/og-image.png', title: 'Good Hosters Open Graph Image' },
];

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
    http://www.google.com/schemas/sitemap-image/1.1
    http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">
`;

  routes.forEach(route => {
    sitemap += `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>`;
    
    // Add images for homepage
    if (route.path === '/') {
      images.forEach(img => {
        sitemap += `
    <image:image>
      <image:loc>${SITE_URL}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
    </image:image>`;
      });
    }
    
    sitemap += `
  </url>
`;
  });

  sitemap += `</urlset>`;

  // Ensure directories exist
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  // Write sitemap.xml to dist folder (for build)
  const distSitemapPath = path.join(DIST_DIR, 'sitemap.xml');
  fs.writeFileSync(distSitemapPath, sitemap, 'utf8');
  
  // Also write to public folder (for development)
  const publicSitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  fs.writeFileSync(publicSitemapPath, sitemap, 'utf8');
  
  console.log(`✅ Sitemap generated successfully!`);
  console.log(`   📁 ${distSitemapPath}`);
  console.log(`   📁 ${publicSitemapPath}`);
  console.log(`   📝 Total URLs: ${routes.length}`);
  console.log(`   🖼️  Images included: ${images.length}`);
}

// Generate sitemap index for larger sites
function generateSitemapIndex() {
  const today = new Date().toISOString().split('T')[0];
  
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;

  // Uncomment when you need multiple sitemaps
  // const indexPath = path.join(DIST_DIR, 'sitemap-index.xml');
  // fs.writeFileSync(indexPath, sitemapIndex, 'utf8');
  // console.log(`✅ Sitemap index generated at ${indexPath}`);
}

// Run the generator
generateSitemap();
// generateSitemapIndex(); // Uncomment for large sites
