Harry_potter = "";
petar_pan = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

leftWrist_score = 0;
rightWrist_score = 0;

petar_pan.stat = "";
Harry_potter.stat = "";
function preload(){
    Harry_potter = loadSound("music.mp3");
    petar_pan = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("posenet initialized");
}
function draw(){
    image(video,0,0,600,500);
    if(leftWrist_score > 0.2){
    fill("red");
    stroke("red");
    circle(leftWristX,leftWristY,30);
    Harry_potter.play();
    Harry_potter.stat = Harry_potter.play();
    if(petar_pan.stat = petar_pan.isplay()){
        petar_pan.stat = petar_pan.stop();
        document.getElementById("song_names").innerHTML = "the name of the playing song is Harry potter.!!";
    }
    }

    if(rightWrist_score > 0.2){
        fill("red");
        stroke("red");
        circle(rightWristX,rightWristY,30);
        petar_pan.play();
        petar_pan.stat = petar_pan.play();
        if(Harry_potter.stat = Harry_potter.isplay()){
            Harry_potter.stat = Harry_potter.stop();
            document.getElementById("song_names").innerHTML = "the name of the playing song is Petar Pan.!!";
        }
        }
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
        
        leftWrist_score = results[0].pose.keypoints[9].score;
        console.log(leftWrist_score);
        leftWrist_score += 1;

        rightWrist_score = results[0].pose.keypoints[10].score;
        console.log(rightWrist_score);
        rightWrist_score += 1;

    }
}