#!/usr/bin/env node

const email = require('./lib/email')
const fetch = require('./lib/fetch')
const parse = require('./lib/parse')
const render = require('./lib/render')

const maybeEmail = (properties) => {
  if (!properties) {
    return Promise.resolve()
  }
  const html = render(properties)
  return email(html)
}


fetch().then(parse).then(maybeEmail)
