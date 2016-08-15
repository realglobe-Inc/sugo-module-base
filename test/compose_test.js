/**
 * Test case for compose.
 * Runs with mocha.
 */
'use strict'

const Module = require('../lib/module')
const compose = require('../lib/compose.js')
const modularize = require('../lib/modularize.js')
const assert = require('assert')
const co = require('co')

describe('compose', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Compose', () => co(function * () {
    let BazModule = (modularize(class Baz {
      sayBaz () {
        return 'baz!!!!!'
      }
    }))
    let modules = compose({
      foo: new Module({}),
      bar: {},
      baz: new BazModule
    })
    let { foo, bar, baz } = modules
    assert.ok(foo)
    assert.ok(bar)
    assert.ok(baz.$spec.methods.sayBaz)
  }))
})

/* global describe, before, after, it */
