const fixture = require('./fixture.json')

const email = require('./lib/email')
const parse = require('./lib/parse')
const render = require('./lib/render')

parse(fixture)
  .then(console.log)
  .catch(console.error)
