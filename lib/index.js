/**
 * Base module for SUGOS
 * @module sugo-module-base
 * @version 1.0.0
 */

'use strict'

const Module = require('./module')

let lib = new Module({})

Object.assign(lib, Module, {
  Module
})

module.exports = lib
