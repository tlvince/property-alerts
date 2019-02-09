const { writeFile } = require('fs')
const { promisify } = require('util')

const state = require('../state.json')
const statePath = require.resolve('../state.json')

const writeFileP = promisify(writeFile)

module.exports = async ({properties = []} = {}) => {
  if (!properties.length) return

  const now = new Date().toISOString()

  const newProperties = properties
    .filter(property => !state[property.id])
    .filter(property => property.keywordMatchType === 'full')
    .map(property => ({
      id: property.id,
      url: `https://www.rightmove.co.uk/${property.propertyUrl}`,
      price: property.price.displayPrices[0].displayPrice,
      bedrooms: property.bedrooms,
      address: property.displayAddress,
    }))

  if (!newProperties.length) return

  const newState = newProperties.reduce((acc, property) => {
    acc[property.id] = now
    return acc
  }, {})

  const nextState = {
    ...state,
    ...newState,
  }

  await writeFileP(statePath, JSON.stringify(nextState, null, 2))
  return newProperties
}
