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
  let { $spec } = defaults(config, {
    $spec: { name: 'anonymous', version: 'unknown' }
  })
  $spec.methods = $spec.methods || {}
  let methodNames = Object.keys(config).filter((name) => !/^\$/.test(name))
  for (let name of methodNames) {
    let method = $spec.methods[ name ]
    $spec.methods[ name ] = Object.assign({ name }, method || {})
  }
  return Object.assign(config, { $spec })
}

module.exports = normalize
