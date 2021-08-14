module.exports = {
  // ...
  pluginOptions: {
    lintStyleOnBuild: false,
    stylelint: {
      fix: true, // boolean (default: true)
      files: 'src/**/*.{vue,htm,html,css,sss,less,scss}', // string | [string] (default: ['src/**/*.{vue,htm,html,css,sss,less,scss}'])
    },
  },
};
