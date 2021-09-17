module.exports = {
  // pluginOptions: {
  //   lintStyleOnBuild: false,
  //   stylelint: {
  //     fix: false, // boolean (default: true)
  //     // string | [string] (default: ['src/**/*.{vue,htm,html,css,sss,less,scss}'])
  //     files: 'src/**/*.{vue,htm,html,css,sss,less,scss}',
  //   },
  // },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/variables";          
        `,
      },
    },
  },
};
