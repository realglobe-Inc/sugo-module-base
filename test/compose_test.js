/**
 * Test case for compose.
 * Runs with mocha.
 */
'use strict'

const Module = require('../lib/module')
const compose = require('../lib/compose.js')
const assert = require('assert')
const co = require('co')

describe('compose', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Compose', () => co(function * () {
    let modules = compose({
      foo: new Module({}),
      bar: {}
    })
    assert.ok(modules.foo)
    assert.ok(modules.bar)
  }))
})

/* global describe, before, after, it */
