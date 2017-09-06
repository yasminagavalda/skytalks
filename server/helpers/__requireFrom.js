const path = require('path')

function requireFrom (basePath) {
  return function (moduleToLoad) {
    const modulePath = path.join(basePath, moduleToLoad)
    return require(modulePath)
  }
}

module.exports = requireFrom
