/**
 * Mixin for describe
 * @function describeMixin
 */
'use strict'

/** @lends describeMixin */
function describeMixin (BaseClass) {
  return class DescribeMixed extends BaseClass {
    /**
     * Describe module with JSON compatible format.
     */
    $$describe () {
      const s = this
      return s.$spec || {}
    }
  }
}

module.exports = describeMixin
