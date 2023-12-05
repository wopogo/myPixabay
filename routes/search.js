const express = require('express');
const router = express.Router();
const template = require('../lib/template')
const pixabay = require('../lib/pixabay');
const Cookie = require('../lib/cookie')

//keyword search page
router.get('/:keyword', async (req, res) => {
  try {
    let keyword = Cookie.getCookieValue(req, 'keyword');
    keyword = template.insultValue(keyword);
    let category = Cookie.getCookieValue(req, 'category');
    let page = Cookie.getCookieValue(req, 'page');
    let URL = pixabay.makeURL(category, keyword, page, true);
    let imgLibrary = await pixabay.fetchPixabayImages(URL);
    let html = template.HTML('', keyword, imgLibrary);
    res.send(html);  
  } catch(err) {
    console.log("err :", err);
  }
});

//search_process page
router.post('/search_process', (req, res) => {
  let post = req.body;
  let keyword = post.keyword;
  Cookie.exchangeCookie(res, 'keyword', keyword);
  res.redirect(302, `/search/${keyword}`);
})

module.exports = router;