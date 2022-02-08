Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    
    function take_snapshot(){
        Webcam.snap();
    }
    
    console.log('ml5 vrsion',ml5.version);
    
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/AyLJY8ULE/model.json',modelLoaded);
    
    function modelLoaded(){
        console.log('Model is loaded');
    }
    function check(){
        img=document.getElementById("captured_image");
        classifier.classify(img,gotResults);    
    }
    function gotResults(error,results){
        if (error){
            console.error(error);
        }
        else{
        console.log("results",results);
        document.getElementById("result_object_name").innerHTML= results[0].label;
        document.getElementById("result_object_accuracy").innerHTML= results[0].confidence.toFixed(3);
        }
    }