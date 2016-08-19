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
  let names = Object.keys(modules || {}).filter((name) => !/^\$/.test(name))
  for (let name of names) {
    let module = modules[ name ]
    if (!module) {
      throw new Error(`[SUGO-Module] Module missing with name: ${name}`)
    }
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
