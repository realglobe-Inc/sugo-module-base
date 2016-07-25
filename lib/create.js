/**
 * Create a module instance
 * @function create
 * @returns {Module}
 */
'use strict'

const Module = require('./module')

/** @lends create */
function create (...args) {
  return new Module(...args)
}

module.exports = create
