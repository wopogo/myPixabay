const cookie = require('cookie');

module.exports = {
  getCookieValue:(req, cookieName) => {
    cookie = String(cookieName)
    return cookie.parse(req.headers.cookie)[cookie];
  },
  exchangeCookie:(res, name, value) => {
    res.cookie(name, value, { maxAge: 86400000, path: '/' })
  }
}