/**
 * Base module for SUGOS
 * @module sugo-module-base
 * @version 1.0.3
 */

'use strict'

const Module = require('./module')
const compose = require('./compose')

let lib = new Module({})

Object.assign(lib, Module, {
  compose,
  Module
})

module.exports = lib
