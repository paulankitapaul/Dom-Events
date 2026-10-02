console.log('events connected');
// option 2 for event handlers
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//    option 3 using ID
const blueButton = document.getElementById('btn')
blueButton.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}
// option 3 slidely different
const makeButtonPurple = document.getElementById('make-btn-purple');
makeButtonPurple.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = 'purple'

}
// option 4 addEventListener
