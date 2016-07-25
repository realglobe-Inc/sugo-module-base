/**
 * Mix emitter functions
 * @function emitterMixin
 * @param {function} baseClass - A class to mix
 * @returns {function} - Mixed class
 * @see https://nodejs.org/api/events.html#events_class_eventemitter
 */
'use strict'

const defaults = require('defaults')

/** @lends emitterMixin */
function emitterMixin (BaseClass) {
  return class EmitterMixed extends BaseClass {
    constructor (...args) {
      super(...args)
      const s = this
      defaults(s, {
        $emitter: null
      })
    }

    /** Emit an event */
    emit (...params) {
      const s = this
      return s.$$emitterCall('emit', params)
    }

    /** Register event listener */
    on (...params) {
      const s = this
      return s.addEventListener(...params)
    }

    /** Register event listener */
    once (...params) {
      const s = this
      return s.$$emitterCall('once', params)
    }

    /** De register event listener */
    off (...params) {
      const s = this
      return s.removeEventListener(...params)
    }

    /** Get event names */
    eventNames (...params) {
      const s = this
      return s.$$emitterCall('eventNames', params)
    }

    /** Emit an event */
    addEventListener (...params) {
      const s = this
      return s.$$emitterCall('addEventListener', params)
    }

    /** De register event listener */
    removeEventListener (...params) {
      const s = this
      return s.$$emitterCall('removeEventListener', params)
    }

    /** De register event listener */
    removeAllListeners (...params) {
      const s = this
      return s.$$emitterCall('removeAllListeners', params)
    }

    $$emitterCall (method, params) {
      const s = this
      let { $emitter } = s
      if (!$emitter) {
        throw new Error(`[SUGO-Module] ${method} is not available since no emitter registered.`)
      }
      return $emitter[ method ](...params)
    }

    $$registerEmitter ($emitter) {
      const s = this
      if (s.$emitter) {
        throw new Error('[SUGO-Module] $emitter already exists.')
      }
      s.$emitter = $emitter
    }
  }
}

module.exports = emitterMixin
