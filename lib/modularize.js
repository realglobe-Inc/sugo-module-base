/**
 * Create a new module class from existing class object.
 * @function modularize
 * @param {Object} BaseClass - Class to modularize.
 * @returns {function} modularize - Modularize constructor
 */
'use strict'

const emitterMixin = require('./mixins/emitter_mixin')
const invokeMixin = require('./mixins/invoke_mixin')
const specMixin = require('./mixins/spec_mixin')

/** @lends modularize */
function modularize (BaseClass, options = {}) {
  let {
    filter = () => true
  } = options
  let ModuleMixed = [
    [ emitterMixin ],
    [ invokeMixin ],
    [ specMixin, { filter } ]
  ].reduce((SuperModule, [mixin, options = {}]) =>
    mixin(SuperModule, options), BaseClass)

  class Modularize extends ModuleMixed {
    // Marker of modularized
    get $$modularized () {
      return true
    }
  }
  return Modularize
}

module.exports = modularize
