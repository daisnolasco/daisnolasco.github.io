var startTime=200;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("rgb(28,28,44)");
if (millis()-startTime>200){
  noSmooth()
  stroke(147, 232, 230)
  strokeWeight(7)
//Outer circles with teal shading
  //inner blue circle
  stroke("rgb(19,19,234)")
  fill("rgb(18,18,169)")
  circle(240,220,240)
 circle(240,220,250)
     

  }
if (millis()- startTime>700){  

   stroke("black")
fill("black")
  circle(212,194,165)  }
  //light purple
if (millis()- startTime>400){  
    stroke("rgb(174,227,238)")
  fill(184,99,184)
  circle(80,340,60)
  }    
if (millis()- startTime>500){
  //blueish purple
  strokeWeight(1)
    fill("rgb(233,213,246)")
     circle(260,360,60)}
if (millis()- startTime>600){
    stroke("rgb(68,208,237)") 
  circle(490,420,110)
    stroke("black")
  strokeWeight(1)
  
  }
  if (millis()- startTime>700){
  circle(250,395,10)
//red circle
  fill("rgb(210,75,75)")
  circle(155,410,43) 
  circle(490,375,11)
  strokeWeight(2)
    circle(180,333,10)
  circle(530,70,20)
      circle(460,530,25)
  }if (millis()- startTime>800){
  //left top corner
  fill("rgb(223,223,62)")
  stroke("yellow")
  circle(40,40,20)
  circle(120,260,10)
  circle(128,410,43)
   circle(155,360,40)
    circle(75,510,15)
  circle(450,100,40)
    circle(470,490,13)
}
if (millis()- startTime>900){  
  
//pink circles
  fill("rgb(241,145,206)")
  stroke("pink")
  circle(70,100,40)
  circle(80,470,15)
      circle(210,333,10)
    circle(390,310,30)  }
  if (millis()- startTime>1000){
  fill("rgb(18,18,169)")
    stroke("rgb(68,208,237)") 
  strokeWeight(3)
  circle(540,300,20)
}
  if (millis()- startTime>1700){  
  //orange circles
    stroke("rgb(224,95,30)")
  fill("rgb(233,132,81)")
    circle(185,374,43)
     circle(185,410,43)
     circle(345,290,80)  }

if (millis()- startTime>1200){
   stroke(184,99,184)
  fill("rgb(184,99,184)")
  circle(305,116,75)}
  if (millis()- startTime>1300){

    stroke("rgb(191,148,57)")
  
    fill("rgb(226,179,60)")
 circle(155,360,40) 
  circle(510,140,30)
      circle(280,300,50)  
       circle(300,480,30)  
    circle(370,310,10)  
      circle(550,425,15)}
if (millis()- startTime>1400){ 
//light green
      stroke("rgb(160,203,147)")
    fill("rgb(154,234,160)")
        circle(299,245,50)  
      circle(435,390,35)}
  if (millis()- startTime>1500){
//dark green
      stroke("rgb(31,201,165)")
    fill("rgb(65,159,151)")
      circle(400,170,95)  }
if (millis()- startTime>1600){  
//sky blue
  stroke("rgb(27,158,193)")
  
    fill("rgb(95,182,235)")
    circle(260,260,23)  
     circle(120,490,35)
    circle(350,360,65)  
      circle(520,550,18)}
  if (millis()- startTime>1700){
      fill("rgb(19,226,245)")
  stroke("white")
  strokeWeight(5)
    circle(470,405,35)
}
  if (millis()- startTime>1800){
  //black circle filler
  stroke("black")  
  fill("black")
      circle(93,324,15)
    circle(120,260,5)
   circle(75,510,10)
  circle(250,395,5)
      circle(370,310,5)  
    circle(400,170,25) 
    circle(505,375,5)
//teal shadow

  strokeWeight(5)
    circle(400,170,30) 
  }
if (millis()-startTime>2100){
  startTime=millis(200);
}
}




