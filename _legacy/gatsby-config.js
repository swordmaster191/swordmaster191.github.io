require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL.substring(0, process.env.STRAPI_API_URL.length - 1),
  accessToken: process.env.STRAPI_TOKEN,
  queryLimit: 1000,
  collectionTypes: [`job`, `project`],
  singleTypes: [`about`],
};

module.exports = {
  siteMetadata: {
    title: `Krit Visitstump`,
    description: `Krit Visitstump | Computer Science Student & Developer Portfolio`,
    author: `Krit Visitstump`,
    siteUrl: `https://swordmaster.tech`,
    twitterUsername: `@swordmaster`, // Placeholder, optional
    image: `/hero-img.png`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    /*{
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Sans Serif`,
          },
          {
            family: `Poppins`,
            variants: [`300`, `400`]
          },
        ],
      },
    },*/
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
  ],
}