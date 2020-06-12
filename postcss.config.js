module.exports = {
  plugins: {
    'postcss-preset-env': {
      browsers: ['last 2 versions', 'ie >= 10'],
      features: {
        'nesting-rules': true,
        'color-mod-function': {
          unresolved: 'warn',
        },
      },
    },
    'postcss-nested': {},
    'postcss-flexbugs-fixes': {},
  },
};
