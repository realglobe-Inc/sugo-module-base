/**
 * Create a new module class from existing class object.
 * @function modularize
 * @param {Object} BaseClass - Class to modularize.
 * @returns {function} modularize - Modularize constructor
 */
'use strict'

const specMixin = require('./mixins/spec_mixin')

/** @lends modularize */
function modularize (BaseClass, options = {}) {
  class Modularize extends specMixin(BaseClass, options) {
    // Marker of modularized
    get $$modularized () {
      return true
    }
  }
  return Modularize
}

module.exports = modularize
