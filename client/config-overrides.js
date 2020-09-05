// const path = require('path');
//
// module.exports = {
//     paths: function (paths, env) {
//         paths.appIndexJs = path.resolve(__dirname, 'src/app.js');
//         paths.appSrc = path.resolve(__dirname, 'client/src');
//         return paths;
//     },
// }
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function override(config, env) {
    config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

    return config;
};