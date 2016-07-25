/**
 * @MyCustomClass
 */
'use strict'

const { Module } = require('sugo-module-base')

class MyCustomClass extends Module {
  constructor (config) {
    super(config)
  }

  myMethod01 () {
    /* ... */
  }

  get $spec () {
    return { /* ... */ }
  }
}

module.exports = MyCustomClass
