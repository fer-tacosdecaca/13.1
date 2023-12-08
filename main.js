status=""
function preload(){
video=createVideo("video.mp4");
}


function setup(){
canvas=createCanvas(400,300);
canvas.center();
video.hide();
}
function gotersults(error,results){
    if(error){
        console.log(error)
    }
    console.log(results)
}


function start(){
    objDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Estado: detectando objetos";
}
function modelLoaded(){
    console.log("modelo cargado");
    status=true;
    video.loop();
    video.speed(1);
    video.volueme(1);
}

function draw(){
    image(video,0,0,400,380)
    if(status!=""){
        objDetector.detect(video, gotersults)
    }
}