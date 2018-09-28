module.exports = {
  siteMetadata: {
    title: 'Wattanit.info',
    description: 'Personal landing page of Wattanit Hotrakool',
    keywords: 'rorasa, wattanit, hotrakool, landing page, portfolio, research, programmer',
    navbar: [
      {
        text: 'Main',
        href: '/',
      },
      {
        text: 'Research',
        href: 'research/'
      },
      {
        text: 'Development',
        href: 'development/'
      },
      {
        text: 'Business',
        href: 'business/'
      },
      {
        text: 'Hobbies',
        href: 'hobbies/'
      },
      {
        text: 'Blog',
        href: 'blog/'
      },
      {
        text: 'Contacts',
        href: 'contacts/'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-images`,
          {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 600,
          },
        }
        ]
      }
    },
    'gatsby-plugin-offline',
  ],
}
