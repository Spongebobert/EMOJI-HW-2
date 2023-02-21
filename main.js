
Webcam.set({
    width:325,
    height:350,
    image_format:"png",
    png_quality:90
})
camera = document.getElementById("camera");
Webcam.attach('#camera')
function take_snapShot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'">';
    })
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wJZoHlp4U/model.json', modelisloadedithink);
function modelisloadedithink(){
 //   do stuff
}