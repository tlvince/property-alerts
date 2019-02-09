const { get, asJson } = require('simple-get-promise')
const { stringify } = require('querystring')

module.exports = () => {
  const querystring = {
    locationIdentifier: 'REGION^93883',
    minBedrooms: 2,
    maxPrice: 400000,
    numberOfPropertiesPerPage: 24,
    radius: '0.0',
    sortType: 18,
    index: 0,
    propertyTypes: 'semi-detached,terraced,detached',
    maxDaysSinceAdded: 1,
    viewType: 'LIST',
    dontShow: 'retirement,sharedOwnership',
    channel: 'BUY',
    areaSizeUnit: 'sqft',
    currencyCode: 'GBP',
    keywords: 'freehold,house',
    isFetching: false
  }

  const params = {
    url: `https://www.rightmove.co.uk/api/_search?${stringify(querystring)}`,
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.81 Safari/537.36'
    }
  }

  return get(params).then(asJson)
}
