'use strict'

var chai = require('chai')
var expect = chai.expect
var DebounceFunction = require('../../build/debounce-function')

describe('Debounce Function', function() {
  it("debounces the function to execute after the timeout", function(done) {
    var flag = false

    var debouncedFoo = DebounceFunction.get(function() {
      flag = true
    }, 100)

    debouncedFoo()
    expect(flag).to.be.false

    setTimeout(function() {
      expect(flag).to.be.true
      done()
    }, 120)
  })

  it("debounces the function to execute after the timeout plus the time of subsequent function calls", function(done) {
    var flag = false

    var debouncedFoo = DebounceFunction.get(function() {
      flag = true
    }, 100)

    debouncedFoo()
    expect(flag).to.be.false

    setTimeout(function() {
      debouncedFoo()
    }, 80)

    setTimeout(function() {
      debouncedFoo()
    }, 120)

    setTimeout(function() {
      expect(flag).to.be.false
    }, 140)

    setTimeout(function() {
      expect(flag).to.be.true
      done()
    }, 240)
  })

  it("can call the function again upon the first execution after the debounce ends", function(done) {
    var flag1 = false
    var flag2 = false

    var debouncedFoo = DebounceFunction.get(function() {
      if (flag1) {
        flag2 = true
      }
      flag1 = true
    }, 100)

    debouncedFoo()
    expect(flag1).to.be.false

    setTimeout(function() {
      expect(flag1).to.be.true

      debouncedFoo()
      setTimeout(function() {
        expect(flag2).to.be.true
        done()
      }, 100)
    }, 120)
  })

  describe("only once", function() {
    it("cannot call the function again upon the first execution after the debounce ends", function(done) {
      var flag1 = false
      var flag2 = false

      var debouncedFoo = DebounceFunction.get(function() {
        if (flag1) {
          flag2 = true
        }
        flag1 = true
      }, 100, true)

      debouncedFoo()
      expect(flag1).to.be.false

      setTimeout(function() {
        expect(flag1).to.be.true

        debouncedFoo()
        setTimeout(function() {
          expect(flag2).to.be.false
          done()
        }, 100)
      }, 120)
    })
  })
})
