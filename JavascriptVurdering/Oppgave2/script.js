//Step1: gjøre hvert eneste bokstav fra input til en array
//Step2: skjekke om array er samme kan som fram ved hjelp av .reversed
//step3: skrive ut ved hjelp av if funksjon
//Step4: legge resultat i HTML

let Svar = document.getElementById('Svar')

//denne gjør ord til array
document.querySelector('#btn').addEventListener('click', function() {  
    //document.querySelector('#btn') gjør slik button gjør funksjonen som blir lagt til av .addEventListener.
    const value = document.querySelector('#word').value
    //dette setter value til det samme som blir skrivd inn
    const reversed = value.split('').reverse().join('')
    //.split gjør hver karakter i det som blir skrivd inn til en array
    //.reverse reverserer rekkefølgen på arrayen 
    //.join legger sammen arrayen til et ord igjen

    if(value === reversed) {
        //dette skjekker om ordet eller settningen er det samme reversert som det er til vanlig
        Svar.textContent = 'Ja, det er et palindrom!';
    } else {
        Svar.textContent = 'Nei, det er ikke et palindrom.';
    }
    //svar.textcontent gjør slik vi får vite om det er et palindrom eller ei på nettsiden
});



