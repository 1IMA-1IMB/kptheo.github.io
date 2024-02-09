let Liters = true;

function konverter_maleenhet(mal){

    let konvertert;

    if(Liters){

        konvertert = (mal / 0.236588);
        document.getElementById("output").innerHTML = konvertert;

    }else{

        konvertert = (mal * 0.236588);
        document.getElementById("output").innerHTML = konvertert;

    }
    
}

function bytte_enhet(){

    Liters = !Liters;

    let input_type = document.getElementById("input_type");
    let output_type = document.getElementById("output_type");

    if(Liters){

        input_type.innerHTML = "Liters:";
        output_type.innerHTML = "cups:";

    }else{

        input_type.innerHTML = "cups:";
        output_type.innerHTML = "Liters:";
        
    }
}