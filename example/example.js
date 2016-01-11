(function() {

  var foo = function() {
    console.log('foo')
  }

  var debouncedFoo = DebounceFunction.get(foo, 100)

  var count = 0
  function loop() {
    setTimeout(function() {
      debouncedFoo()
      count++
      if (count < 10) {
        console.log('count')
        loop()
      } else {
        setTimeout(function() {
          console.log('attempt debouncedFoo() after debouncing')
          debouncedFoo()
        }, 200)
      }
    }, 80)
  }
  loop()

  var bar = function() {
    console.log('bar')
  }

  var debouncedBar = DebounceFunction.get(bar, 100, true)

  var count2 = 0
  function loop2() {
    setTimeout(function() {
      debouncedBar()
      count2++
      if (count < 10) {
        console.log('count2')
        loop2()
      } else {
        setTimeout(function() {
          console.log('attempt debouncedBar() after debouncing')
          debouncedBar()
        }, 200)
      }
    }, 80)
  }
  loop2()

})()
