var current = 0;

window.onload = function(){
    current = Math.floor(Math.random() * user.length);
    instagramRotation();
    setInterval("instagramRotation()", 6000);
}
