/**
 * Compose multiple modules.
 * @function compose
 * @param {Object} modules - Module configurations
 * @returns {Object} - Composed modules
 */
'use strict'

const Module = require('./module')

/** @lends compose */
function compose (modules) {
  let composed = {}
  for (let name of Object.keys(modules || {})) {
    let moduleConfig = Object.assign({ $name: name }, modules[ name ])
    composed[ name ] = new Module(moduleConfig)
  }
  return composed
}

module.exports = compose
