window.onscroll = function (e) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop < 210){
        scrollTop = 230 - scrollTop;
        document.getElementById('content-bar').style.top = scrollTop + "px";
    }
    else{
        var offsetSite = document.getElementById('site-wrap').offsetHeight;
        var offsetFixed = document.getElementById('content-bar').offsetHeight;
        var max = document.getElementById('site-wrap').offsetHeight - document.getElementById('content-bar').offsetHeight - document.getElementById('footer').offsetHeight;
        scrollTop += 20;
        if( scrollTop > max) {
            var offset = max-scrollTop;
            document.getElementById('content-bar').style.top = offset + "px";
        }
        else {
            document.getElementById('content-bar').style.top = "20px";
        }
    }
}
