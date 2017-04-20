/**
 * Validate configuration
 * @param {Object} config
 */
'use strict'

const { ReservedNames } = require('sugo-constants')
const sgValidator = require('sg-validator')
const sgSchemas = require('sg-schemas')

/** @lends validate */
function validate (config) {
  // Validate spec
  {
    let { $spec } = config
    let errors = sgValidator(sgSchemas.moduleSpec).validate($spec)
    if (errors && errors.length > 0) {
      let { message } = errors[ 0 ]
      throw new Error(`[SUGO-Actor] Invalid $spec detected. ${message}`)
    }
  }
  // Validate method names
  {
    let reserved = [
      ...String(ReservedNames.METHOD).split(','),
      ...String(ReservedNames.ATTRIBUTE).split(',')
    ]
    for (let name of Object.keys(config)) {
      let conflict = !!~reserved.indexOf(name)
      if (conflict) {
        let msg = `[SUGO-Actor] You cannot declare method with name "${name}". Since it is reserved`
        throw new Error(msg)
      }
    }
  }
}

module.exports = validate
