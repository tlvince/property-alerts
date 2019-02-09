const MailGun = require('mailgun-es6')

module.exports = (html = '') => {
  const mailGun = new MailGun({
    publicApi: process.env.MAILGUN_PUBLIC_KEY,
    domainName: process.env.MAILGUN_DOMAIN_NAME,
    privateApi: process.env.MAILGUN_PRIVATE_KEY,
  })

  return mailGun.sendEmail({
    to: process.env.EMAIL_TO.split(','),
    from: process.env.EMAIL_FROM,
    subject: 'New properties on the market',
    html,
  })
}
