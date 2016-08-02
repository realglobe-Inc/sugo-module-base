/**
 * Test case for module.
 * Runs with mocha.
 */
'use strict'

const Module = require('../lib/module.js')
const assert = require('assert')
const co = require('co')

describe('module', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Module', () => co(function * () {
    let module = new Module({
      foo () {
        return 'foo!'
      }
    })
    assert.ok(module)
    assert.equal(module.foo(), 'foo!')

    let { $spec } = module
    assert.ok($spec)
    assert.ok($spec.methods.foo)
  }))

  it('Module with custom spec', () => co(function * () {
    let module = new Module({
      foo () {
        return 'foo!'
      },
      $spec: {
        name: 'foo',
        version: '1.0.0',
        methods: {
          foo: {
            name: 'foo',
            params: [
              { name: 'hoge' }
            ]
          }
        }
      }
    })
    let { $spec } = module
    assert.ok(module.foo)
    assert.ok($spec.methods.foo)
  }))
})

/* global describe, before, after, it */
