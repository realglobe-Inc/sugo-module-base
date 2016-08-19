/**
 * Test case for emitterMixin.
 * Runs with mocha.
 */
'use strict'

const emitterMixin = require('../lib/mixins/emitter_mixin.js')
const { EventEmitter } = require('events')
const assert = require('assert')
const co = require('co')

describe('emitter-mixin', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Emitter mixin', () => co(function * () {
    let Mixed = emitterMixin(class { foo () { return 'foo' }})
    let mixed = new Mixed()
    mixed.$$registerEmitter(new EventEmitter())
    assert.ok(mixed.$emitter)
    mixed.$$unregisterEmitter(new EventEmitter())
    assert.ok(!mixed.$emitter)
  }))
})

/* global describe, before, after, it */
