objects=[];
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
    objects=results
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
    video.volume(1);
}

function draw(){
    image(video,0,0,400,380)
    if(status!=""){
        objDetector.detect(video, gotersults)
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Estado: objeto detectado";
            document.getElementById("noo").innerHTML = "Numero de objectos detectados: "+ objects.length;

            fill(255, 0, 0);
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
    noFill();
    stroke(255, 0, 0);
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}