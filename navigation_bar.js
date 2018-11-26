function openNav() {
document.getElementById("myTopnav").style.top = "0";
document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
document.getElementById("myTopnav").style.top = "-80px";
document.body.style.backgroundColor = "white";
}
function resizeImg(img,x,y) {
    img.style.height = y+"px";
    img.style.width = x+"px";
}