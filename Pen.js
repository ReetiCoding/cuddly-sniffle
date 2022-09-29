Status = "";
Pen_image = "";

function preload(){
   Pen_image = loadImage("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-pens-2-copy-1550770722.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(fan_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(Pen_image,0,0,640,350);
}