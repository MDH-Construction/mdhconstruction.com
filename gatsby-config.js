const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = `https://wwww.mdhconstruction.com`,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === `production`;
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `MDH Construction | Licensed General Contractor | Plymouth, MA`,
    description: `MDH Construction is a licensed general contractor in Plymouth, MA, servicing gutters, insulation, decks, remodels, additions. Call today for your FREE estimate!`,
    author: `MDH Construction`,
    image: `https://www.mdhconstruction.com/static/800f75406d914563f0f442893d90d280/df308/mdh-construction-general-contractor-plymouth-ma-logo.png`,
    siteUrl,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-force-trailing-slashes`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        usePathPrefix: '/',
        crumbLabelUpdates: [
          {
            pathname: '/ratings-and-memberships',
            crumbLabel: 'Ratings and Memberships',
          },
          {
            pathname: '/thank-you',
            crumbLabel: 'Thank You',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.mdhconstruction.com',
        sitemap: 'https://www.mdhconstruction.com/sitemap.xml',
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [
              { userAgent: '*', disallow: ['/thank-you/', '/privacy/'] },
            ],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-70467283-1',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mdh-construction-site`,
        short_name: `mdh-construction-site`,
        start_url: `/`,
        background_color: `#1a1b41`,
        theme_color: `#baff29`,
        display: `minimal-ui`,
        icon: `src/images/favicon-mdh-construction.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Titillium+Web:400,300,300italic,400italic,700,700italic'],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
