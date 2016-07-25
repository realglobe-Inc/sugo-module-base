/**
 * Base module for SUGOS
 * @module sugo-module-base
 * @version 1.0.4
 */

'use strict'

const create = require('./create')
const Module = require('./module')
const compose = require('./compose')

let lib = create.bind(this)

Object.assign(lib, Module, {
  compose,
  create,
  Module
})

module.exports = lib
