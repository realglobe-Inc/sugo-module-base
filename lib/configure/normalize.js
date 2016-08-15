/**
 * Normalize a configuration
 * @function normalize
 */
'use strict'

const defaults = require('defaults')

/** @lends normalize */
function normalize (config) {
  if (typeof config === 'function') {
    if (config.default) {
      throw new Error('[SUGO-Module] You cannot set default property when a module itself is a function.')
    }
    config = Object.assign({ default: config }, config)
  }

  return config
}

module.exports = normalize
