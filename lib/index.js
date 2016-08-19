/**
 * Base module for SUGOS
 * @module sugo-module-base
 * @version 1.0.19
 */

'use strict'

const create = require('./create')
const Module = require('./module')
const compose = require('./compose')
const modularize = require('./modularize')

let lib = create.bind(this)

Object.assign(lib, Module, {
  compose,
  modularize,
  create,
  Module
})

module.exports = lib
