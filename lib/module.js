/**
 * Demo SUGO-Module
 * @class Module
 * @param {Object} props - Module properties
 */
'use strict'

const { name, version, description, license } = require('../package.json')
const debug = require('debug')('sugo:module:base')
const normalize = require('./configure/normalize')
const validate = require('./configure/validate')
const emitterMixin = require('./mixins/emitter_mixin')
const invokeMixin = require('./mixins/invoke_mixin')
const describeMixin = require('./mixins/describe_mixin')

let SuperModule = [
  emitterMixin,
  invokeMixin,
  describeMixin
].reduce((SuperModule, mixin) => mixin(SuperModule), Object)

class Module extends SuperModule {
  constructor (config = {}) {
    super()
    const s = this
    config = normalize(config)
    validate(config)
    Object.assign(s, {
      $name: 'module',
      $emitter: null
    }, config)
  }
}

module.exports = Module
