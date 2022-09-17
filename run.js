const fs = require('fs');
const babel = require('@babel/core');
const myplugin = require('./plugin');

const code = fs.readFileSync('./code.js', 'utf-8');

const { code: output } = babel.transform(code, {
  plugins: [
    [
      myplugin,
      // plugin config
      {
      },
    ],
    // ['@babel/plugin-syntax-optional-chaining'],
  ],
  presets: ['@babel/react'],
});

fs.writeFileSync('./output.js', output);
