Webcam.set ({
    width: 320,
    height:300,
    image_format: "png",
    png_quality: 90,
    constraints: {facingMode: "environment"}
});

camera= document.getElementById("camera1");

Webcam.attach("#camera1");

function snapshot() {
Webcam.snap(function (data){
    document.getElementById("result1").innerHTML="<img id='captured_image' src='"+data+"'>";
});
}
console.log("ml5version", ml5.version);

classifier= ml5.imageClassifier("mobileNet", model);

function model() {
    console.log("The mobile net lodaded, I think");
}
function identify() {
    check_image= document.getElementById("captured_image");
    classifier.classify(check_image, recieved_result)
}

function recieved_result(error, result) {
    if (error) {
        console.error(error);
    }
   else {
       console.log(result);
       document.getElementById("answer").innerHTML=result[0].label;
   } 
}