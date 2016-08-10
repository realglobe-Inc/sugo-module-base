/**
 * Create a new module class from existing class object.
 * @function modularize
 * @param {Object} BaseClass - Class to modularize.
 * @returns {function} modularize - Modularize constructor
 */
'use strict'

const Module = require('./module')
const specMixin = require('./mixins/spec_mixin')

/** @lends modularize */
function modularize (BaseClass, options = {}) {
  return specMixin(BaseClass, options)
}

module.exports = modularize
