const state = require('../state.json')

module.exports = async ({ properties = [] } = {}) => {
  if (!properties.length) return

  return properties
    .filter(property => !state[property.id])
    .filter(property => property.keywordMatchType === 'full')
    .map(property => ({
      id: property.id,
      url: `https://www.rightmove.co.uk${property.propertyUrl}`,
      price: property.price.displayPrices[0].displayPrice,
      bedrooms: property.bedrooms,
      address: property.displayAddress,
    }))
}
