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
    
    
    
    if(G1 > 100 || G2 > 100 || G3 > 100 || G4 > 100 || G5 > 100 || G6 > 100 || G7 > 100){
        alert("Please input between 0 - 100 only.");
        return;
    } 
    
    if(AVG > 100){
        alert(AVG.toFixed(0)+ "\n" + "DOES NOT EXIST!" );
    }

    else if(AVG >= 90 && AVG <= 100){
        alert(AVG.toFixed(2)+ "\n"+ 'OUTSTANDING!');
    }
    else if(AVG >= 85 && AVG <= 89){
        alert(AVG.toFixed(2)+ "\n" + 'VERY SATISFACTORY!');
    }
    else if(AVG >= 80 && AVG <= 84){
        alert(AVG.toFixed(2)+ "\n" +'SATISFACTORY!' );
    }
    else if(AVG >= 75 && AVG <= 79){
        alert(AVG.toFixed(2)+ "\n" + 'FAIRLY SATISFACTORY!');
    }
    else if(AVG < 75){
        alert(AVG.toFixed(2)+"\n" + "DID NOT MEET EXPECTATION!");
    }
    

}
