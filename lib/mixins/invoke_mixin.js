/**
 * Mixin for method invocation
 * @function invokeMixin
 */
'use strict'

/** @lends invokeMixin */
function invokeMixin (BaseClass) {
  return class InvokeMixed extends BaseClass {
    /**
     * Invoke the module script
     * @param {string} name - Name of action
     * @param {Object} params - Parameters
     */
    $$invoke (name, params) {
      const s = this
      let action = s[ name ]
      if (!action) {
        throw new Error(`Unknown action: ${name}`)
      }
      return Promise.resolve(action.call(s, ...params))
    }
  }
}

module.exports = invokeMixin
