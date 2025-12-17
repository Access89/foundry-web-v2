import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

/**
 * SEO Component for dynamic meta tags
 * Manages page title, description, Open Graph, and Twitter Card metadata
 */
export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = "https://www.foundry-platform.app/icons/logo.svg",
  ogType = "website",
  canonicalUrl,
}) => {
  const baseTitle = "Foundry Platform";
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;
  const baseUrl = "https://www.foundry-platform.app";
  const currentUrl = canonicalUrl || baseUrl;

  const defaultDescription =
    "Discover Foundry Platform, a comprehensive B2B ecosystem tailored for small and medium enterprises (SMEs) in Africa. Streamline transactions, secure financing, manage inventory, and simplify business operations with our inclusive commerce solutions.";

  const metaDescription = description || defaultDescription;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
