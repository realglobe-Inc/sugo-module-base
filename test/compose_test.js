/**
 * Test case for compose.
 * Runs with mocha.
 */
'use strict'

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
      foo: {},
      bar: {},
    })
    console.log(modules)
  }))
})

/* global describe, before, after, it */
