#!/usr/bin/env node

/**
 * Example usage of the caller
 */
'use strict'

const { Module } = require('sugo-module-base')
const sugoActor = require('sugo-actor')
const co = require('co')

co(function * () {
  let actor = sugoActor('http://my-sugo-cloud.example.com/actors', {
    key: 'my-actor-01',
    modules: {
      // Register the module
      module01: new Module({
        ping () { /* ... */ }
      }),
      module02: new (require('./example-custom-class'))({}),
      module03: new (require('./example-mixed-class'))({})
    }
  })
  yield actor.connect()
}).catch((err) => console.error(err))
