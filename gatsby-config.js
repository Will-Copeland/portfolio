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
    projects: [
      {
        title: 'Grand Central',
        img: 'imgPath',
        slug: '/grand-central/',
        excerpt: 'PWA for RR crossing reporting',
        description: `
          Grand Central was created to solve the CPUC's problem of 
          rail road crossing saftey reporting. Previously, technicians 
          had to write down their findings, then pair those with images
          and send them off to be manually inputted into their database. 
          This process was tedious and error-prone.

          Grand Central solves this problem by asking recording responses 
          using PouchDB and syncing with the server when connected to the
          internet. The answers, pictures, and questions are all pre-sorted
          and placed directly into the database. 
          
          This prevents the telephone-game effect, technicians spending hours
          in hotel rooms pairing report items and answers with pictures, and 
          a moderator inputting items into spreadsheets.

        `,
        externalLink: '',
      },
      {
        title: 'TrackGraphic',
        img: 'imgPath',
        slug: '/track-graphic',
        excerpt: 'Driver-centric Ecommerce',
        description: `
          TrackGraphic was born as a concept for drivers to organize, compare, 
          and compete at track events. 
          
          Right now, it is simply an ecommerce site. 
          
          We at JCKB have much more planned for this and are very excited about
          TrackGraphic.
        `,
      },
      {
        title: 'Arduino Watering',
        img: 'imgPath',
        slug: '/arduino-watering',
        excerpt: 'A bare-bones timed watering system solution',
        description: `
          Tired of remembering to water the plants every morning and every evening,
          I hacked together some parts from Amazon and created this beauty.

          This is the project that inspired me to start developing, as I
          had a blast sorting out the logic as a noobie.
        `,
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'root',
        path: `${__dirname}/src/`,
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
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
