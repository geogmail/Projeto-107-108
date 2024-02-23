function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/lZ202tpYn/model.json', modelReady);
}
function modelReady(){
  console.log("modelo carregado! :D")
  classifier.classify(gotResults)
}
function gotResults(error, results){
  if(error){
  console.log(error)
  }
  else{
    console.log(results)
    r= Math.floor(Math.random()*255)+1
    g= Math.floor(Math.random()*255)+1
    b= Math.floor(Math.random()*255)+1
    document.getElementById("result_label").innerHTML="Posso ouvir: "+results[0].label
    document.getElementById("result_confidence").innerHTML="Precisão: "+results[0].confidence
    document.getElementById("result_label").style.color= "rgb("+r+","+g+","+b+")";  
    document.getElementById("result_confidence").style.color= "rgb("+r+","+g+","+b+")"; 

    img1=document.getElementById("animal")

if(results[0].label=="Cachorro"){
  img1.src="cachorro.jpg"
}
else if(results[0].label=="Gato"){
  img1.src="gato.webp"
}
else if(results[0].label=="Baleia"){
  img1.src="baleiajubarte.jpg"
}
else if(results[0].label=="Onça pintada"){
  img1.src="onca.webp"
}
  }
}
