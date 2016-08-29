/**
 * Test case for isModule.
 * Runs with mocha.
 */
'use strict'

const Module = require('../lib/module')
const isModule = require('../lib/is_module.js')
const assert = require('assert')
const co = require('co')

describe('is-module', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Is module', () => co(function * () {
    class Foo {

    }
    class Bar {
      get $$modularized () {
        return true
      }
    }
    let foo = new Foo()
    let bar = new Bar()
    let baz = new Module()
    assert.ok(!isModule(foo))
    assert.ok(isModule(bar))
    assert.ok(isModule(baz))
  }))
})

/* global describe, before, after, it */
