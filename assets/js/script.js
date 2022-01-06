var submitButton = document.getElementById('btn-submit');
var inputDest = document.getElementById('loc-to');
var inputFrom = document.getElementById('loc-from');



submitButton.addEventListener('submit', start());

function start() {

    var from = inputFrom.value;
    var gikan = inputDest.innerText;
    var to = inputDest.value;

    console.log('Button had been clicked');

    if (from) {
        console.log('if From is not empty');
    }



}