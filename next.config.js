const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  unstable_staticImage: true,
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
    // More customizations can be added here if necessary
  },
})

module.exports = withNextra()
// module.exports = withNextra;

