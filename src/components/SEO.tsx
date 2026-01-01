import { Helmet } from "react-helmet-async";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogUrl?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
}

const BASE_URL = "https://goodhosters.com";

const SEO = ({
  title,
  description,
  canonicalUrl,
  ogImage = "https://goodhosters.com/og-image.png",
  ogUrl,
  breadcrumbs,
  children,
}: SEOProps) => {
  const fullCanonicalUrl = canonicalUrl || BASE_URL;
  const fullOgUrl = ogUrl || fullCanonicalUrl;

  const breadcrumbSchema = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
        })),
      }
    : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* BreadcrumbList Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {children}
    </Helmet>
  );
};

export default SEO;
