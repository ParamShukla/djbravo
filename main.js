lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;
lbw = 0;
rbw = 0;

function setup(){
  canvas =   createCanvas(600,500);
  canvas.center();
video = createCapture(VIDEO);
video.hide();
posenet = ml5.poseNet(video,modeloaded);
posenet.on("pose",gotposes);
}
function modeloaded() {
    console.log("posenet is awake ")

}
function draw() {
    image(video,0,0,600,500);

fill("red");
stroke("red");
//Speed
if(lbw>0.2){
    circle(lwx,lwy,30); 
    if(lwy>0 && lwy<=100){
      gaana.rate(0.5);
      document.getElementById("nok").innerHTML="Speed deva = 0.5x"  ;
        
    }
    else if (lwy>100 && lwy<=200){
        gaana.rate(1);
        document.getElementById("nok").innerHTML="Speed deva = 1x"  ;
          
      }
      else if (lwy>200 && lwy<=300){
        gaana.rate(1.5);
        document.getElementById("nok").innerHTML="Speed deva = 1.5x"  ;
          
      }
      else if (lwy>300 && lwy<=400){
        gaana.rate(2);
        document.getElementById("nok").innerHTML="Speed deva = 2x"  ;
          
      }
      else if (lwy>400 && lwy<=500){
        gaana.rate(2.5);
        document.getElementById("nok").innerHTML="Speed deva = 2.5x"  ;
          
      }
      // har har mahadev har 

}










//Volume
if(rbw>0.2){
circle(rwx,rwy,30);
ins = Number(rwy);
inns = floor(ins);
volume = inns/500;
console.log(volume);
document.getElementById("ok").innerHTML="Volume deva is "+volume;
gaana.setVolume(volume);

}


}

gaana = "";
function preload(){
    gaana = loadSound("harihar.mp3");

}

function sound(){
    gaana.play();
    gaana.setVolume(0.5);
    gaana.rate(1);

}

function gotposes(results){
if (results.length>0)  {
    console.log(results);
    rwx = results[0].pose.rightWrist.x;
    rwy = results[0].pose.rightWrist.y;
    console.log("right wrist x  and y are as follows: "+rwx+","+rwy);
    lwx = results[0].pose.leftWrist.x;
    lwy = results[0].pose.leftWrist.y;
    console.log("left wrist x  and y are as follows: "+lwx+","+lwy);
    lbw = results[0].pose.keypoints[9].score;
    console.log("#score for left wrist(lbw) isssssss"+lbw+"ohhhhhhhhhh");
    rbw = results[0].pose.keypoints[10].score;
    console.log("#score for left wrist(rbw) isssssss"+rbw+"ohhhhhhhhhh");
}


}
