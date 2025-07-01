
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `bychanebarandbistro`,
    description: `Website of a an local Aussie Bar and Bistro. `,
    author: `Sagar Bastakoti`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "bychanebarandbistro",
        short_name: "bychance",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#16191a",
        display: "standalone",
        icon: "src/img/favicon/mondello-favicon-white.svg",
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preload-fonts`,
  ],
}
