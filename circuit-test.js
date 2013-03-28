/*
    circuit-test.js for square-circuit
    uses testling's html runner support
    @see https://github.com/substack/testling-html-example
*/

;(function() {

    var assertion = 0;

    console.log('test square-circuit');

    function equal (a, b, msg) {
        assertion += 1;
        console.log(assertion + ': ' + (a === b ? 'ok' : 'not ok') + (typeof msg == 'string' ? ': ' + msg : ''));
    }
    
    var expected = [
        [ 1,  2,  3,  4, 5],
        [ 16, 17, 18, 19, 6],
        [ 15, 24, 25, 20, 7],
        [ 14, 23, 22, 21, 8],
        [ 13, 12, 11, 10, 9]
    ];
    
    var five = circuit(5);

    equal(5, five.length, 'should have 5 rows');
    
    var COMMA = ',';
    
    for (var i = 0; i < 5; i += 1) {
    
    console.log(five[i].join(COMMA));
    
    
        equal(expected[i].join(COMMA), five[i].join(COMMA), 'should match values in row ' + i);
    }
}());