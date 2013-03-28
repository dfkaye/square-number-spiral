/*
    test.js for square-spiral
    uses testling's html runner support
    @see https://github.com/substack/testling-html-example
*/

;(function() {

    var assertion = 0;

    console.log('spiral-test');

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
    
    var five = spiral(5);

    equal(5, five.length, 'should have 5 rows');
    
    var COMMA = ',';
    var actual;
    
    for (var i = 0; i < 5; i += 1) {
    
        actual = five[i].join(COMMA);
        
        console.log(actual);
    
        equal(expected[i].join(COMMA), actual, 'should match values in row ' + i);
    }
}());


