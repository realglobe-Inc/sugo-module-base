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
        ping () { /* ... */ },
        get $spec () {
          /**
           * Module specification.
           * @see https://github.com/realglobe-Inc/sg-schemas/blob/master/lib/module_spec.json
           */
          return {
            name: 'sugo-module-base-sample',
            version: '1.0.0',
            desc: 'A sample module',
            methods: {
              ping: {
                desc: 'Test the reachability of the module',
                params: []
              }
            }
          }
        }
      })
    }
  })
  yield actor.connect()
}).catch((err) => console.error(err))
