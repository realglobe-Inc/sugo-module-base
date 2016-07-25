/**
 * Test case for specMixin.
 * Runs with mocha.
 */
'use strict'

const specMixin = require('../lib/mixins/spec_mixin.js')
const assert = require('assert')
const co = require('co')

describe('spec-mixin', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Spec mixin', () => co(function * () {
    class SuperMockClass {
      foo () {}
    }
    class MockClass extends specMixin(SuperMockClass) {
      bar () {

      }
    }
    let instance = new MockClass()
    assert.ok(instance.$spec.methods.bar)
  }))
})

/* global describe, before, after, it */
