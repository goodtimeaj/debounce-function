(function() {
  mocha.ui('bdd')
  mocha.ignoreLeaks(true)
  chai.config.includeStack = true
  expect = chai.expect

  afterEach(function() {
    $('#fixture').empty()
  })
})()
