module.exports = (properties) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
  </head>
  <body>
    <h1>🌟 New properties found 🌟</h1>
    <p>Freehold house within zone 3 under £500k</p>
    <ul>
      ${properties
        .map(
          (property) => `
        <li>
          <a href="${property.url}" target="_blank">
            ${property.bedrooms} bed, ${property.price} — ${property.address}
          </a>
        </li>
      `
        )
        .join('')}
    </ul>
  </body>
</html>
`
