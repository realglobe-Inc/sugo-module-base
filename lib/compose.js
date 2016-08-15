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
    let module = modules[ name ]
    let isModule = (module instanceof Module) || module.$$modularized
    if (!isModule) {
      console.warn(`[SUGO-Module] Module "${name}" should be an instance of sugos ${'`'}Module${'`'} class`)
      module = new Module(module)
    }
    module.$name = module.$name || name
    composed[ name ] = module
  }
  return composed
}

module.exports = compose
