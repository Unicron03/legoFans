var positionP1 = "right", positionP2 = "right", positionP3 = "right", positionP4 = "right";
var canFlip = true;

var videoLego = document.getElementById("videoHistory")
videoLego.style.pointerEvents = "none";
var historyLink = document.getElementById("legoHistoryLink");
historyLink.style.pointerEvents = "none";

document.addEventListener('keydown', function (event) {
  var page1 = document.getElementById("page1");
  var page2 = document.getElementById("page2");
  var page3 = document.getElementById("page3");
  var page4 = document.getElementById("page4");
  var contentP1 = document.getElementById("contentP1");
  var contentP2 = document.getElementById("contentP2");
  var contentP3 = document.getElementById("contentP3");
  var contentP4 = document.getElementById("contentP4");
  var img = document.getElementById("imgContent");
  var imgP2 = document.getElementById("imgContentP2");
  var imgP3 = document.getElementById("imgContentP3");
  var imgP4 = document.getElementById("imgContentP4");
  var book = document.getElementById("book");

  //Page1
  if ((event.key == 'ArrowLeft') && positionP1 == "right" && canFlip && positionP2 == "right" && positionP3 == "right" && positionP4 == "right") {
    page1.classList.remove("animTurnRight");
    page1.classList.add("animTurnLeft");
    page2.classList.remove("pageIndex");
    setTimeout(function() {contentP1.classList.add("contentTrans");}, 500);
    setTimeout(function() {img.classList.add("imgActive");}, 500);
    // imgP2.classList.remove("imgActive");
    book.style.left = "calc(50% + 220px)";
    positionP1 = "left";
    canFlip = false;
  }
  if ((event.key == 'ArrowRight') && positionP1 == "left" && canFlip && positionP2 == "right" && positionP3 == "right" && positionP4 == "right") {
    page1.classList.remove("animTurnLeft");
    page1.classList.add("animTurnRight");
    page2.classList.remove("pageIndex");
    setTimeout(function() {contentP1.classList.remove("contentTrans"); contentP1.style.transition = "none";}, 500);
    setTimeout(function() {img.classList.remove("imgActive");}, 500);
    book.style.left = "50%";
    positionP1 = "right";
    canFlip = false;
  }
  //Page2
  if ((event.key == 'ArrowLeft') && positionP2 == "right" && canFlip && positionP1 == "left" && positionP3 == "right" && positionP4 == "right") {
    page2.classList.remove("animTurnRight");
    page2.classList.add("animTurnLeft");
    page3.classList.remove("pageIndex");
    page2.classList.add("pageIndex");
    setTimeout(function() {contentP2.classList.add("contentTrans");}, 500);
    setTimeout(function() {imgP2.classList.add("imgActive");}, 500);
    positionP2 = "left";
    canFlip = false;
  }
  if ((event.key == 'ArrowRight') && positionP2 == "left" && canFlip && positionP1 == "left" && positionP3 == "right" && positionP4 == "right") {
    page2.classList.remove("animTurnLeft");
    page2.classList.add("animTurnRight");
    page3.classList.remove("pageIndex");
    page2.classList.add("pageIndex");
    setTimeout(function() {contentP2.classList.remove("contentTrans"); contentP2.style.transition = "none";}, 500);
    setTimeout(function() {imgP2.classList.remove("imgActive");}, 500);
    positionP2 = "right";
    canFlip = false;
  }
  //Page3
  if ((event.key == 'ArrowLeft') && positionP3 == "right" && canFlip && positionP2 == "left" && positionP1 == "left" && positionP4 == "right") {
    page3.classList.remove("animTurnRight");
    page3.classList.add("animTurnLeft");
    page2.classList.remove("pageIndex");
    page3.classList.add("pageIndex");
    setTimeout(function() {contentP3.classList.add("contentTrans");}, 500);
    setTimeout(function() {imgP3.classList.add("imgActive");}, 500);
    positionP3 = "left";
    canFlip = false;
  }
  if ((event.key == 'ArrowRight') && positionP3 == "left" && canFlip && positionP2 == "left" && positionP1 == "left" && positionP4 == "right") {
    page3.classList.remove("animTurnLeft");
    page3.classList.add("animTurnRight");
    page2.classList.remove("pageIndex");
    page3.classList.add("pageIndex");
    page4.classList.remove("pageIndex");
    setTimeout(function() {contentP3.classList.remove("contentTrans"); contentP3.style.transition = "none";}, 500);
    setTimeout(function() {imgP3.classList.remove("imgActive");}, 500);
    positionP3 = "right";
    canFlip = false;
  }
  //Page4
  if ((event.key == 'ArrowLeft') && positionP4 == "right" && canFlip && positionP3 == "left" && positionP2 == "left" && positionP1 == "left") {
    setTimeout(function() {historyLink.style.pointerEvents = "all"; videoLego.style.pointerEvents = "all";}, 500);
    page4.classList.remove("animTurnRight");
    page4.classList.add("animTurnLeft");
    page3.classList.remove("pageIndex");
    page4.classList.add("pageIndex");
    setTimeout(function() {contentP4.classList.add("contentTrans");}, 500);
    setTimeout(function() {imgP4.classList.add("imgActive");}, 500);
    positionP4 = "left";
    canFlip = false;
  }
  if ((event.key == 'ArrowRight') && positionP4 == "left" && canFlip && positionP3 == "left" && positionP2 == "left" && positionP1 == "left") {
    setTimeout(function() {historyLink.style.pointerEvents = "none"; videoLego.style.pointerEvents = "none";}, 500);
    page4.classList.remove("animTurnLeft");
    page4.classList.add("animTurnRight");
    page3.classList.remove("pageIndex");
    page4.classList.add("pageIndex");
    setTimeout(function() {contentP4.classList.remove("contentTrans"); contentP4.style.transition = "none";}, 500);
    setTimeout(function() {imgP4.classList.remove("imgActive");}, 500);
    positionP4 = "right";
    canFlip = false;
  }

  page1.addEventListener("animationend", function () {
    canFlip = true;
  });
  page2.addEventListener("animationend", function () {
    canFlip = true;
  });
  page3.addEventListener("animationend", function () {
    canFlip = true;
  });
  page4.addEventListener("animationend", function () {
    canFlip = true;
  });
});