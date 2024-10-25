//colors
var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var i;
var j;
var k;
var l;

function setup() {
createCanvas(1000, 1000);
  background("rgb(28,28,44)");
a = color(184,99,184);
b = color(18,18,169);
c= color(68,208,237);
d=color(233,213,246);
e=color(226,179,60);
f=color(154,234,160);
g=color(224,95,30);
h=color("pink");
i=color("yellow");
j=color(31,201,165)
 k=color(210,75,75)
l=color(95,182,235)
  
  //text
   fill("rgb(222,231,222)3)");
  textSize(20);
  text('Click The Screen For Bubbles!', 100, 60);
//eye in backround

  stroke(147, 232, 230)
  strokeWeight(7)
  noSmooth()
 ellipse(245,217,275)
  //inner blue circle
  stroke("rgb(19,19,234)")
  fill("rgb(18,18,169)")
   ellipse(240,220,240)
    stroke("rgb(68,208,237)") 
  strokeWeight(3)
  //inner black circle
  stroke("black")
fill("black")
   ellipse(212,194,165)  



  
}

// bubbles w random color and sizes on click
function mousePressed(){
  ellipse(mouseX, mouseY,random(10,100));
  bubbleColor = [a, b,c,d,e,f,g,h,i,j,k,l];
  strokeWeight(random(0,9))
  stroke(random(bubbleColor))
  fill(random(bubbleColor));
}

