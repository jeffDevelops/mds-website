module.exports = {
  siteMetadata: {
    author: `@MayDayStrike`,
    description: `May Day is a general labor strike beginning on the 1st of May and lasting #UntilDemandsAreMet.`,
    keywords: `May, Day, Strike, Labor, Unions`,
    title: `May Day Strike`,
    siteUrl: `https://maydaystrike.org/`,
    social: {
      github: "MayDayStrike",
      instagram: "MayDayStrike",
      twitter: "MayDayStrike22",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://maydaystrike.org",
        sitemap: "https://maydaystrike.org/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 300,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-remark-copy-linked-files`,
    `gatsby-remark-smartypants`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `May Day Strike`,
        short_name: `MDS 2022`,
        start_url: `/`,
        background_color: `#C73A26`,
        theme_color: `#C73A26`,
        display: `browser`,
        icon: `src/images/mayday-logo-circle.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_ID,
          process.env.GOOGLE_ANALYTICS_UNIVERSAL_ID, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/do-not-track/", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans`],
        display: "swap",
      },
    },
    "gatsby-plugin-netlify", // manually adds Netlify plugin as workaround for current broken published version (2.1.1): https://github.com/netlify/netlify-plugin-gatsby/issues/310
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
