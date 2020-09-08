/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title, canonicalLink }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  const structuredDataLocalBusiness = `
  {
    "@context": "https://schema.org",
    "@graph":
    [
      {
        "@type": "LocalBusiness",
        "name": "MDH Construction",
        "image": "",
        "@id": "",
        "url": "https://www.mdhconstruction.com",
        "telephone": "(774) 269-6002",
        "priceRange": "100-500",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "186 S Meadow Rd #2",
          "addressLocality": "Plymouth",
          "addressRegion": "MA",
          "postalCode": "02360",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 41.917958,
          "longitude": -70.724978
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "17:00"
        }
      },
      {
        "@type": "Organization",
        "name": "MDH Construction",
        "url": "https://www.mdhconstruction.com",
        "logo": "",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "(774) 269-6002",
          "contactType": "customer service",
          "contactOption": "TollFree",
          "areaServed": "US",
          "availableLanguage": "en"
        },
        "sameAs": "https://www.facebook.com/MDHConst"
      },
      {
        "@type": "WebSite",
        "name": "MDH Construction",
        "url": "https://www.mdhconstruction.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "{search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  }`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <link rel="canonical" href={canonicalLink} />

      <meta name="description" content={metaDescription} />

      {/* REMOVE WHEN LIVE */}
      <meta name="robots" content="noindex" />

      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />

      <script type="application/ld+json">{structuredDataLocalBusiness}</script>
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
