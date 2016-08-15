/**
 * Mixin for spec
 * @function specMixin
 */
'use strict'

const { ReservedNames } = require('sugo-constants')

const defaultOptions = {
  filter (name, method) {
    return true
  }
}

/** @lends specMixin */
function specMixin (BaseClass, options = defaultOptions) {
  let { filter } = options
  return class SpecMixed extends BaseClass {
    get $$specMixed () {
      return true
    }

    get $spec () {
      const s = this
      let { $$spec } = s
      if ($$spec) {
        return $$spec
      }
      let methods = Object.assign({}, super.$spec || {})
      // noinspection Eslint
      let names = [
        ...Object.getOwnPropertyNames(s.$$config || {})
      ]
      // Add prototype method
      {
        let { __proto__ } = s
        while (__proto__) {
          let { constructor } = __proto__
          if (constructor === Object) {
            break
          }
          let found = Object.getOwnPropertyNames(__proto__)
          names.unshift(...found)
          __proto__ = __proto__.__proto__
        }
      }

      for (let name of names) {
        if (/^[\$_]/.test(name)) {
          continue
        }
        let isReserved = !!~ReservedNames.METHOD.split(',').indexOf(name)
        if (isReserved) {
          continue
        }
        if (filter) {
          let rejected = !filter(name, s[ name ])
          if (rejected) {
            continue
          }
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
