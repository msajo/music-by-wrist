Harry_potter = "";
petar_pan = "";
function preload(){
    Harry_potter.loadSound("music.mp3");
    petar_pan.loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}