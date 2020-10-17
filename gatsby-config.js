module.exports = {
  siteMetadata: {
    title: `Moja pierwsza strona na Gatsby`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    url: `http://localhost:8000`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-head`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Nunito Sans"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
