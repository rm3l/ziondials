module.exports = {
    siteMetadata: {
        title: `Zion Dials`,
        description: `All views are my own.`,
        author: `@ziondials`,
        siteUrl: `https://ziondials.netlify.com`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-netlify`,
        `gatsby-plugin-robots-txt`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-tagmanager`,
            options: {
                id: `GTM-P7SM3TW`,

                // Include GTM in development.
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,

                // datalayer to be set before GTM is loaded
                // should be an object or a function that is executed in the browser
                // Defaults to null
                defaultDataLayer: { platform: `gatsby` },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `ziondials`,
                short_name: `zion`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
