module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@assets': './assets',
            '~': './src',
            '@components': './src/components',
            '@constants': './src/constants',
            '@screens': './src/screens',
            '@styles': './src/styles',
          },
        },
      ],
    ],
  };
};
