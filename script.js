//header
function instagramRotation(){
    if(current >= user.length) current = 0;
    var image = document.getElementById('content-instagram-image');
    image.src = './assets/instagram/photo' + current + '.jpg';
    var name = document.getElementById('content-instagram-user');
    name.innerHTML = user[current];
    var comm = document.getElementById('content-instagram-comment');
    comm.innerHTML = comment[current];
    current += 1;
}
var width = 0;
//header
function handleNav(force){
      var div = document.getElementById('header-nav-popup');
      if(force == "close"){
          if(width == 0){
              width = document.getElementById('site-wrap').clientWidth;
          }
          else if(width != document.getElementById('site-wrap').clientWidth) {
            div.style.display = "none";
            width = document.getElementById('site-wrap').clientWidth;
          }
      }
      else if(div.style.display == "inline-block"){
          div.style.display = "none";
      }
      else {
          div.style.display = "inline-block";
      }
}
