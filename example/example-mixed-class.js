/**
 * Example to use mixin
 */
'use strict'

const { Module } = require('sugo-module-base')

const HiPeople = (baseClass = Module) => class extends baseClass {
  sayHi () { console.log('Hi!') }
}

const YoPeople = (baseClass = Module) => class extends baseClass {
  sayYo () { console.log('Yo!') }
}

class MyPerson extends HiPeople(YoPeople(Module)) {
  sayHiAndYo () {
    const s = this
    s.sayHi()
    s.sayYo()
  }
}

module.exports = MyPerson
