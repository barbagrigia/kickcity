const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = (config, env) => {
  const changedConfig = rewireStyledComponents(config, env, {
    displayName: true,
  });

  return changedConfig;
};
