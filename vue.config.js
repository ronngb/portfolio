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
    sourceMap: process.env.NODE_ENV === 'production' ? false : true,
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/abstracts/variables.scss";
          @import "@/assets/scss/abstracts/mixins.scss";        
        `,
      },
    },
  },
}
