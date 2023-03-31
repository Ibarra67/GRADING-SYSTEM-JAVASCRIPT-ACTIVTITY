function getAVG(){
    var G1=parseInt(document.getElementById("G1").value)
    var G2=parseInt(document.getElementById("G2").value)
    var G3=parseInt(document.getElementById("G3").value)
    var G4=parseInt(document.getElementById("G4").value)
    var G5=parseInt(document.getElementById("G5").value)
    var G6=parseInt(document.getElementById("G6").value)
    var G7=parseInt(document.getElementById("G7").value)

    var sum = G1 + G2 + G3 + G4 + G5 + G6 + G7;
    let AVG = sum/7;
    
    alert("The Average Grade is: " + AVG.toFixed(0))
    if(AVG > 100){
        alert("DOES NOT EXIST");
    }

    else if(AVG >= 90 && AVG <= 100){
        alert('OUTSTANDING');
    }
    else if(AVG >= 85 && AVG <= 89){
        alert('VERY SATISFACTORY');
    }
    else if(AVG >= 80 && AVG <= 84){
        alert('SATISFACTORY');
    }
    else if(AVG >= 75 && AVG <= 79){
        alert('FAIRLY SATISFACTORY');
    }
    else if(AVG < 75){
        alert('DID NOT MEET EXPECTATIONS');
    }
    

}
