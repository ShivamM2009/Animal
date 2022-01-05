camera = document.getElementById("cam");
Webcam.set({
    width:360,
    height:250,
    Image_format:"jpg",
    jpg_quality:90
});
Webcam.attach("#cam")
function takepicture(){
  Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
  })
}
console.log("ml5 version",ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4M1wcqSzO/model.json",modell);
function modell(){
    console.log("model is loaded");
}
function check(){
img = document.getElementById("selfie_image");
classifier.classify(img,gotresult);  
}
function gotresult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("object name").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}