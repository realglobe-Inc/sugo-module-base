/**
 * Demo SUGO-Module
 * @class Module
 * @param {Object} props - Module properties
 */
'use strict'

const debug = require('debug')('sugo:module:base')
const normalize = require('./configure/normalize')
const validate = require('./configure/validate')
const modularize = require('./modularize')

class Base {}

class Module extends modularize(Base) {
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
