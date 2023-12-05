const API_KEY = '40846976-19a194a9ed2312e0764d0d87c';
var keyword = '';
var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(keyword);

function fetchPixabayImages() {
  fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // console.log(data.hits);
      let webformatURL_list = [];
      for(let dataObject of data.hits) {
        webformatURL_list.push(dataObject.webformatURL);
      }
      console.log(webformatURL_list);
      return webformatURL_list;
    })
    .catch(error => console.error('Error fetching images:', error));
}

fetchPixabayImages();

// 다른 스크립트에서 이 함수를 호출하여 사용할 수 있도록 export
// 예를 들면, fetchPixabayImages()를 호출하면 이미지를 콘솔에 출력

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Success");
});

app.listen(3000);