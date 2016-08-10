/**
 * Demo SUGO-Module
 * @class Module
 * @param {Object} props - Module properties
 */
'use strict'

const debug = require('debug')('sugo:module:base')
const normalize = require('./configure/normalize')
const validate = require('./configure/validate')
const emitterMixin = require('./mixins/emitter_mixin')
const invokeMixin = require('./mixins/invoke_mixin')
const specMixin = require('./mixins/spec_mixin')

class Base {}

let SuperModule = [
  emitterMixin,
  invokeMixin,
  specMixin
].reduce((SuperModule, mixin) => mixin(SuperModule), Base)

class Module extends SuperModule {
  constructor (config = {}) {
    super()
    const s = this
    Object.assign(s, {
      $name: 'module',
      $emitter: null,
      $$config: config
    }, normalize(config))
    validate(s)
  }

  static compose (...args) {
    return require('./compose')(...args)
  }
}

module.exports = Module
