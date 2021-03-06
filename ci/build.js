#!/usr/bin/env node

/**
 * Build this project.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { build } = require('sugo-ci-module')

build({
  render: [
    '.*.bud',
    'lib/.*.bud',
    'doc/**/.*.bud',
    'test/.*.bud'
  ]
})
