/*
    test.js for square-number-spiral
    uses testling's html runner support
    @see https://github.com/substack/testling-html-example
*/

var assertion = 0;
/*
console.log('TAP version 13');
console.log('1..3');

equal(text(document.querySelector('#a')), 'A');
equal(text(document.querySelector('#b')), 'B');
equal(text(document.querySelector('#c')), 'C');

function text(elem) { return elem.textContent || elem.innerText }
*/


function printSpiral(spiral) {
    for (var r = 0; r < spiral.length; r += 1) {
        console.log(spiral[r].join(','));
    }
};

printSpiral(spiral(5));

equal(6, spiral(6).length, 'should be empty so far');

function equal (a, b, msg) {
    console.log((a === b ? 'ok' : 'not ok') + (typeof msg == 'string' ? ': ' + msg : '') + ' ' + (++ assertion));
}