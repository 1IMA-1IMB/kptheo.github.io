//Step1: gjøre hvert eneste bokstav fra input til en array
//Step2: skjekke om array er samme kan som fram ved hjelp av .reversed
//step3: skrive ut ved hjelp av if funksjon
//Step4: legge resultat i HTML

let Svar = document.getElementById('Svar')

//denne gjør ord til array
document.querySelector('#btn').addEventListener('click', function() {
    const value = document.querySelector('#word').value

    const reversed = value.split('').reverse().join('')

    if(value === reversed) {
        Svar.textContent = 'Ja, det er et palindrom!';
    } else {
        Svar.textContent = 'Nei, det er ikke et palindrom.';
    }
});



