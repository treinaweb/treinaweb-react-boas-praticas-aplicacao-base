const { override, addWebpackAlias } = require("customize-cra")
const path = require('path')
const rootImport = {
    'src': path.resolve(__dirname, 'src')
}

module.exports = override(addWebpackAlias(rootImport))