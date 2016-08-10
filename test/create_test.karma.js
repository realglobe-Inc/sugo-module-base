/**
 * Test case for create.
 * Runs with karma.
 */
'use strict'

const create = require('../shim/browser/create.js')
const assert = require('assert')
const co = require('co')

describe('create', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Create', () => co(function * () {
    let module = create({})
    assert.ok(module)
  }))
})

/* global describe, before, after, it */
