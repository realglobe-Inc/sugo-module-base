/**
 * Test case for modularize.
 * Runs with mocha.
 */
'use strict'

const modularize = require('../lib/modularize.js')
const assert = require('assert')
const co = require('co')

describe('modularize', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Modularize', () => co(function * () {
    class Person {
      say (...messages) {
        console.log(...messages)
        return messages.join(' ')
      }
    }

    class YoPerson extends Person {
      sayYo () {
        return this.sayYo('yo', ...arguments)
      }

      sayYoCallback (callback) {
        callback(null, this.sayYo())
      }
    }

    {
      let YoModule = modularize(YoPerson, {
        filter (name, method) {
          let methodsToReject = [ 'sayYoCallback' ]
          return !~methodsToReject.indexOf(name)
        }
      })

      let yo = new YoModule()
      assert.ok(yo.$spec.methods.say)
      assert.ok(yo.$spec.methods.sayYo)
      assert.ok(!yo.$spec.methods.sayYoCallback, 'Should be rejected')
    }
  }))
})

/* global describe, before, after, it */
