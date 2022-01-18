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
    }
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
          include: /\.inline\.svg$/
        }
      }
    },
    `gatsby-transformer-yaml`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
