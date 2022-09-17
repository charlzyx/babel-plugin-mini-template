/**
 * == JSX Literals ==
 */
const declare = require('@babel/helper-plugin-utils').declare;
const babel = require('@babel/core');

const imports = require('@babel/helper-module-imports');
const generate = require('@babel/generator').default;
const template = require('@babel/template').default;

const { types: t } = babel;

module.exports = declare(
  (api, config) => {
    api.assertVersion(7);

    /**
     * @type import('@babel/core').Visitor
     */
    const visitor = {
      Program: {
        enter(path, state) {

        },
        exit(path, state) {

        }
      },
    };

    return {
      name: 'plugin-mini',
      visitor,
    };
  },
);
