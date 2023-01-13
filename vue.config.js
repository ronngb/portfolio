module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'My Portfolio',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/variables.scss";
          @import "@/scss/mixins.scss";        
        `,
      },
    },
  },
}
