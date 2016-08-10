/**
 * Example to modularize an existing class
 */
'use strict'

const { modularize } = require('sugo-module-base')
const sugoActor = require('sugo-actor')
const co = require('co')

co(function * () {
  // Existing class to modularize
  class YoPerson {
    sayYo () {
      return this.sayYo('yo', ...arguments)
    }

    sayYoCallback (callback) {
      callback(null, this.sayYo())
    }
  }

  // Since you cannot load callback base module into SUGO-Actor,
  // You need wrapper class to add async method
  class YoPersonAsyncWrap extends YoPerson {
    sayYoAsync () {
      const s = this
      return new Promise((resolve, reject) => {
        this.sayYoCallback((err) =>
          err ? reject(err) : resolve()
        )
      })
    }
  }

  let YoModuleClass = modularize(YoPerson, {
    filter (name, method) {
      let methodsToReject = [ 'sayYoCallback' ] // Strip off the callback method
      return !~methodsToReject.indexOf(name)
    }
  })

  // Apply the modularized class instance into actor
  let actor = sugoActor('http://my-sugo-cloud.example.com/actors', {
    key: 'my-actor-01',
    modules: {
      yo: new YoModuleClass()
    }
  })
  yield actor.connect()
})



