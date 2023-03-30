var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementByClass("nav").style.top = "0";
  } else {
    document.getElementByclass("nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
