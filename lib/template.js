module.exports = {
  HTML:function(placeholder, value, imageLibrary) {
    return `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="icon" type="image/x-icon" href="/icon/apple-icon.png">
      <link rel="stylesheet" href="/css/style.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
      <script>${this.SignupBar()}</script>
      <script>${this.BtnActive()}</script>
      <title>IMAJIHEE</title>
    </head>
    <body>
      <div class="account-info-container">
        <input type="button" class="account-close-btn" onclick="moveRight()">
        <div class="account-img" style="background-image: url('/icon/hamster.png');"></div>
        <div class="user-id">
          <span class="user-id-font">WOPOGO</span>
        </div>
        <div class="signup-signin-container">
          <a href="/sign-up.html" class="signup-signin-btn">sign up</a>
          <a href="/sign-in.html" class="signup-signin-btn">sign in</a>
        </div>
      </div>
      <div class="page-container">
        <div class="background-container" style="background-image: url('/icon/ocean.jpg');">
          <header>
            <div class="header-container">
              <div class="header-mainpage-div">
                <a href="/">
                  <img src="/icon/site-logo.png" class="header-logo-img">
                </a>
              </div>
              <div class="header-signin-div">
                <input type="button" class="header-signin-img" style="background-image: url('/icon/account4.png');" onclick="moveLeft()">
              </div>
            </div>
          </header>
          <div class="header-between-searchbar"><span class="logo-mean">quickly searching for design elements</span></div>
          <div class="searchbar-container">
            <div class="searchbar-border">
              <div class="searchbar-div">
                <img src="/icon/searchicon.png" class="searchicon">
                  <form action="/search/search_process" method="post"> 
                    <input type="search" class="searchinput" name="keyword" placeholder="Search for ${placeholder}..." ${value}>
                  </form>
              </div>
            </div>
          </div>
          <div class="category-container">
             <div class="category-1">
              <div class="category-menu">
                <div class="category-menu-btn">
                  <a href="/home" class="category-menu-a home-link">
                    <img src="/icon/main.png" class="category-icon category-icon-selected">
                    <span class="category-letter category-letter-selected">Home</span>
                  </a>
                </div>
              </div>
              <div class="category-menu">
                <div class="category-menu-btn">
                  <a href="/illustration" class="category-menu-a illustrations-link">
                    <img src="/icon/illustration.png" class="category-icon category-icon-selected">
                    <span class="category-letter category-letter-selected">Illustrations</span>
                  </a>
                </div>
              </div>
              <div class="category-menu">
                <div class="category-menu-btn">
                  <a href="/vector" class="category-menu-a vectors-link">
                    <img src="/icon/icon.png" class="category-icon category-icon-selected">
                    <span class="category-letter category-letter-selected">Vectors</span>
                  </a>
                </div>
              </div>
             </div>
             <div class="category-2">
              <div class="category-menu">
                <div class="category-menu-btn">
                  <a href="/photo" class="category-menu-a photos-link">
                    <img src="/icon/photo.png" class="category-icon category-icon-selected">
                    <span class="category-letter category-letter-selected">Photos</span>
                  </a>
                </div>
              </div>
              <div class="category-menu">
                <div class="category-menu-btn">
                  <a href="/fonts" class="category-menu-a fonts-link">
                    <img src="/icon/font.png" class="category-icon category-icon-selected">
                    <span class="category-letter category-letter-selected">Fonts</span>
                  </a>
                </div>
              </div>
              <div class="category-menu">
                <div class="category-menu-btn">
                  <a href="/palettes" class="category-menu-a palettes-link">
                    <img src="/icon/color.png" class="category-icon category-icon-selected">
                    <span class="category-letter category-letter-selected">Palettes</span>
                  </a>
                </div>
              </div>
             </div>
          </div>
        </div>
        ${imageLibrary}
        <div class="container-fluid text-center" style="height:80px; margin-top:30px;">
          <div class="row align-items-start" >
            <div class="col"></div>
            <div class="col">
            <form action="/load_process" method="post">
            <button type="submit" class="btn btn-outline-secondary btn-lg rounded-pill" style="font-weight:bolder; border: 3px solid gray">load more</button>
            </form>
            </div>
            <div class="col"></div>
          </div>
        </div>
        <hr style="margin-bottom:60px; margin-top:40px" class="border border-secondary border-3">
        <div class="container-fluid text-center">
        <a href="https://www.instagram.com/bbang_soek/" class="insta">instagram</a>
        </div>
      </div>
    </body>
    </html>    
    `;
  },
  SignupBar:() => {
    return `
    function moveRight() {
      $('.account-info-container').css('right', '-400px');
      $('.account-info-container').css('transition', 'all 0.5s');
    }
    function moveLeft() {
      $('.account-info-container').css('right', '10px');
      $('.account-info-container').css('transition', 'all 0.5s');
    }      
    `
  },
  BtnActive:() => {
    return `
    $(document).ready(() => {
      const cookieString = document.cookie;
      const cookies = cookieString.split('; ');
      const cookie_list = cookies[0].split('=');
      if(cookie_list[1] === 'images') {
        $('.home-link').addClass('active');
      } else if(cookie_list[1] === 'illustrations') {
        $('.illustrations-link').addClass('active');
      } else if(cookie_list[1] === 'vectors') {
        $('.vectors-link').addClass('active')
      } else if(cookie_list[1] === 'photos') {
        $('.photos-link').addClass('active'); 
      } else if(cookie_list[1] === 'fonts') {
        $('.fonts-link').addClass('active');
      } else if(cookie_list[1] === 'palettes') {
        $('.palettes-link').addClass('active');
      }
    })
    `
  },
  insultValue:(keyword) => {
    if(keyword) {
      return `value="${keyword}"`
    } else if(keyword === '' || keyword === null) {
      return null;
    }
  }
}