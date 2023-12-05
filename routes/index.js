const express = require('express');
const router = express.Router();
const template = require('../lib/template');
const pixabay = require('../lib/pixabay');
const Cookie = require('../lib/cookie');

//main page
router.get('/', async (req, res) => {
  try {
  //초기 쿠키 지정
  Cookie.exchangeCookie(res, 'category', 'all');
  Cookie.exchangeCookie(res, 'keyword', '');
  Cookie.exchangeCookie(res, 'page', 1);

  //page html
  let page = Cookie.getCookieValue(req, 'page');
  let URL = pixabay.makeURL('', '', page, true);
  let imgLibrary = await pixabay.fetchPixabayImages(URL);
  let html = template.HTML('image', '', imgLibrary);
  res.send(html);
  } catch(err) {
    console.log("err :", err);
  }
});

//load_process page
router.post('/load_process', (req ,res) => {
  //page cookie 수정
  let page = parseInt(Cookie.getCookieValue(req, 'page'));
  page = page + 1
  res.cookie('page', page, { maxAge: 86400000, path: '/' })
  let category = Cookie.getCookieValue(req, 'category');
  res.redirect(302, `/${category}`);
});

module.exports = router;