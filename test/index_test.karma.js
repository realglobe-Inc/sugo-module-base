/**
 * Test case for index.
 * Runs with karma.
 */
'use strict'

const index = require('../shim/browser/index.js')
const assert = require('assert')
const co = require('co')

describe('index', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Eval props', () => co(function * () {
    assert.ok(index.Module)
  }))
})

/* global describe, before, after, it */
