#!/usr/bin/env node

const save = require('./lib/save')
const email = require('./lib/email')
const fetch = require('./lib/fetch')
const parse = require('./lib/parse')
const render = require('./lib/render')

const maybeEmail = (properties) => {
  if (!(properties && properties.length)) {
    return
  }
  const html = render(properties)
  email(html).then(() => save(properties))
}


fetch().then(parse).then(maybeEmail)
