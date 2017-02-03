/**
 * Base module for SUGOS
 * @module sugo-module-base
 * @version 1.2.1
 */

'use strict'

const create = require('./create')
const Module = require('./module')
const compose = require('./compose')
const modularize = require('./modularize')
const isModule = require('./is_module')

let lib = create.bind(this)

Object.assign(lib, Module, {
  compose,
  modularize,
  isModule,
  create,
  Module
})

module.exports = lib
