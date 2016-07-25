/**
 * Demo SUGO-Module
 * @class Module
 * @param {Object} props - Module properties
 */
'use strict'

const { name, version, description, license } = require('../package.json')
const debug = require('debug')('sugo:module:base')

class Module {
  constructor (props = {}) {
    const s = this
    Object.assign(s, props)
  }

  /**
   * Describe module specification
   */
  describe () {
    const s = this
    return Object.assign({
      name,
      version,
      desc: description,
      license
    }, s.$spec)
  }
}

module.exports = Module
