const { writeFile } = require('fs')
const { promisify } = require('util')

const state = require('../state.json')
const statePath = require.resolve('../state.json')

const writeFileP = promisify(writeFile)

module.exports = properties => {
  const now = new Date().toISOString()

  const newState = properties.reduce((acc, property) => {
    acc[property.id] = now
    return acc
  }, {})

  const nextState = {
    ...state,
    ...newState,
  }

  return writeFileP(statePath, JSON.stringify(nextState, null, 2))
}
