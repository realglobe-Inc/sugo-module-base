/**
 * Mixin for spec
 * @function specMixin
 */
'use strict'

const { ReservedNames } = require('sugo-constants')

/** @lends specMixin */
function specMixin (BaseClass) {
  return class SpecMixed extends BaseClass {
    get $spec () {
      const s = this
      let { $$spec } = s
      if ($$spec) {
        return $$spec
      }
      let methods = Object.assign({}, super.$spec || {})
      // noinspection Eslint
      let names = [
        ...Object.getOwnPropertyNames(s.__proto__),
        ...Object.getOwnPropertyNames(s.$$config || {})
      ]
      for (let name of names) {
        if (/^[\$_]/.test(name)) {
          continue
        }
        let isReserved = !!~ReservedNames.METHOD.split(',').indexOf(name)
        if (isReserved) {
          continue
        }
        let method = s[ name ] || {}
        methods[ name ] = Object.assign({ name }, method)
      }
      return { name: 'anonymous', version: 'unknown', methods }
    }

    set $spec (spec) {
      const s = this
      s.$$spec = spec
    }
  }
}

module.exports = specMixin
