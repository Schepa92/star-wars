const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@ui': 'src/components/UI',
    '@constants': 'src/constants',
    '@containers': 'src/containers',
    '@hoc-helpers': 'src/hoc-helpers',
    '@routes': 'src/routes',
    '@services': 'src/services',
    '@static': 'src/static',
    '@utils': 'src/utils',
    '@hooks': 'src/hooks',
    '@store': 'src/store',
    '@context': 'src/context',
  })(config);

  return config;
};
