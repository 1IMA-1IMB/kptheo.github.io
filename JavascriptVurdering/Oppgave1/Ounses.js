let Liters = true;

function konverter_maleenhet(mal){

    let konvertert;

    if(Liters){

        konvertert = (mal / 0.0295735);
        document.getElementById("output").innerHTML = konvertert;

    }else{

        konvertert = (mal * 0.0295735);
        document.getElementById("output").innerHTML = konvertert;

    }
    
}

function bytte_enhet(){

    Liters = !Liters;

    let input_type = document.getElementById("input_type");
    let output_type = document.getElementById("output_type");

    if(Liters){

        input_type.innerHTML = "Liters:";
        output_type.innerHTML = "Ounses:";

    }else{

        input_type.innerHTML = "Ounses:";
        output_type.innerHTML = "Liters:";
        
    }
}