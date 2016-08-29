/**
 * Detect an object is a module or not
 * @function isModule
 * @param {Object} obj - Object to check
 * @returns {Boolean} - A module or not
 */
'use strict'

const Module = require('./module')

/** @lends isModule */
function isModule (obj) {
  if (!obj) {
    return false
  }
  return (obj instanceof Module) || obj.$$modularized
}

module.exports = isModule
