Harry_potter = "";
petar_pan = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload(){
    Harry_potter.loadSound("music.mp3");
    petar_pan.loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log("Left Wrist X position is "+ leftWristX + " Left Wrist Y position is "+ leftWristY);
        console.log("Right Wrist X position is "+ rightWristX + " Right Wrist Y position is " + rightWristY);   
    }
}