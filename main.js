difference=0
rightwristX = 0;
leftwristY = 0;

function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(500, 500);
  canvas.position(560, 150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#969A97');

    document.getElementById("text").innerHTML = " The size of the text will be = " + difference + "px"
      fill('#ffebcd');
      stroke('#ffdab9');
      text(wristX, wristY, difference);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        wristX = results[0].pose.wrist.x;
        wristY = results[0].pose.wrist.y;
        console.log("wristX = " + wristX +" wristY = " + wristY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + "difference = " + difference);
    }
}