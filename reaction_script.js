var start = new Date().getTime();
var timeTaken = 0;

var shapes = ["circle","square"];
var colour = ["red","blue","yellow","black","brown","purple","orange","green"];
var positions = [50,100,150,200,250,300, 450, 500, 600];
var shape = [0,50,0,50,0,50,0,50];
var size = [25,50,75,100,125,150,175,200];
function randomNumber(){
  return Math.floor((Math.random() * 9));
}
function appear(){
  document.getElementById("shape").style.height = size[randomNumber()] + "px";
  document.getElementById("shape").style.width = size[randomNumber()] + "px";
  document.getElementById("shape").style.borderRadius = shape[randomNumber()] + "%";
  document.getElementById("shape").style.top =Math.floor((Math.random() * 400)) + "px";
  document.getElementById("shape").style.left =Math.floor((Math.random() * 600)) + "px";
  document.getElementById("shape").style.backgroundColor = colour[randomNumber()];
  document.getElementById("shape").style.display = "block";
  start = new Date().getTime();
}

function delay() {
  setTimeout(appear, 1000);
}
function disappear(){
  var end = new Date().getTime();
  timeTaken = (end -start)/1000;
  document.getElementById("timeTaken").innerHTML = timeTaken + " seconds";
  document.getElementById("shape").style.display = "none";
  delay();
}


delay();
document.getElementById("shape").onclick = disappear;
