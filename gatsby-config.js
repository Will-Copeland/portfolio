module.exports = {
  siteMetadata: {
    title: 'Will Copeland',
    description: 'Portfolio Page',
    author: 'William Copeland',
    skills: {
      proficient: [
        'JavaScript',
        'React.js',
        'Material-UI',
        'CSS3 // Grid // Flexbox',
      ],
      workingKnowledge: [
        'GraphQL // Prisma',
        'Node.js // Express',
        'Next.js',
        'Leaflet',
      ],
    },
    projects: {

    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: '@wapps/gatsby-plugin-material-ui',
      options: {
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
