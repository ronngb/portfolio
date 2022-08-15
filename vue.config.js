module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  css: {
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
