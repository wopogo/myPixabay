const express = require('express');
const router = express.Router();
const template = require('../lib/template');
const pixabay = require('../lib/pixabay');
const Cookie = require('../lib/cookie');

//'home' page
router.get('/home', async (req, res) => {
  try {
    Cookie.exchangeCookie(res, 'category', 'all');
    let keyword = Cookie.getCookieValue(req, 'keyword');
    let value = template.insultValue(keyword);
    let page = Cookie.getCookieValue(req, 'page');
    let URL = pixabay.makeURL('all', keyword, page, true);
    let imgLibrary = await pixabay.fetchPixabayImages(URL);
    let html = template.HTML('image', value, imgLibrary);
    res.send(html);    
  } catch(err) {
    console.log("err :", err);
  }
})

//category page
router.get('/:category', async (req, res) => {
  try {
    let category = req.params.category;
    Cookie.exchangeCookie(res, 'category', category);
    let keyword = Cookie.getCookieValue(req, 'keyword');
    let value = template.insultValue(keyword);
    let page = Cookie.getCookieValue(req, 'page');
    let URL = pixabay.makeURL(category, keyword, page, true)
    let imgLibrary = await pixabay.fetchPixabayImages(URL);
    let html = template.HTML(category, value, imgLibrary);
    res.send(html);  
  } catch(err) {
    console.log("err :", err);
  }
});

module.exports = router;