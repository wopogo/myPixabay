const API_KEY = '40846976-19a194a9ed2312e0764d0d87c';

module.exports = {
  makeURL:(category, keyword, page, boolean) => {
    return "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(`${keyword}`) + `&image_type=${category}` + "&per_page=50" + `&page=${page}` + `&editors_choice=${boolean}`;
  },
  manufatureData:function (data) {
    return data.hits.map(_data => ({
      webformatURL: _data.webformatURL,
      pageURL: _data.pageURL
    }))
  },
  distributeData:function (URLListData) {
    let columnA =[];
    let columnB =[];
    let columnC =[];
    let columnD =[];
    
    for(let i=0; i<URLListData.length; i++) {
      const currentObject = URLListData[i];
  
      if(i%4 === 0) {
        columnA.push(currentObject);
      } else if(i%4 === 1) {
        columnB.push(currentObject);
      } else if(i%4 === 2) {
        columnC.push(currentObject);
      } else if(i%4 === 3) {
        columnD.push(currentObject);
      }
    }
    return {columnA, columnB, columnC, columnD};  
  },
  column:function(columnList) {
    let columnHTMLCode = '';
    for(let data of columnList) {
      columnHTMLCode += `<a href="${data.pageURL}"><img src="${data.webformatURL}" class=".img-fluid mx-auto d-block imgLibrary"></a>`;
    }
    return columnHTMLCode;
  },
  columnHTML:function(columnA, B, C, D) {
    return `<div class="container-fluid"><div class="row"><div class="col" id="column-1">
    ${columnA}
    </div><div class="col" id="column-2">
    ${B}
    </div><div class="col" id="column-3">
    ${C}
    </div><div class="col" id="column-4">
    ${D}
    </div></div></div>
    `;
  },
  fetchPixabayImages:function(URL) {
    return fetch(URL)
    .then(result => {
      return result.json();
    })
    .then(result => {
      return this.manufatureData(result);
    })
    .then(result => {
      return this.distributeData(result);
    })
    .then(result => {
      const {columnA, columnB, columnC, columnD} = result;
      return {
        columnAHTMLcode: this.column(columnA),
        columnBHTMLcode: this.column(columnB),
        columnCHTMLcode: this.column(columnC),
        columnDHTMLcode: this.column(columnD)
      }
    })
    .then(result => {
      return this.columnHTML(result.columnAHTMLcode, result.columnBHTMLcode, result.columnCHTMLcode, result.columnDHTMLcode);
    })
    .catch(error => {
      console.log("error :", error);
    })
  },
}
