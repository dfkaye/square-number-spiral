/*
 * tape test for number squares circuit() method
 */

var test = require('tape');
var circuit = require('./circuit.js').circuit;

test('verify circuit exists', function (t) {

  t.strictEqual(typeof circuit, 'function');
  t.end();
});

test('should contain 5 rows', function (t) {

  t.equal(5, circuit(5).length);
  t.end();
});

test('should match row contents', function (t) {

  var expected = [
    [ 1,  2,  3,  4, 5],
    [ 16, 17, 18, 19, 6],
    [ 15, 24, 25, 20, 7],
    [ 14, 23, 22, 21, 8],
    [ 13, 12, 11, 10, 9]
  ];
  
  var COMMA = ',';
  var five = circuit(5);
  var actual;

  for (var i = 0; i < 5; i += 1) {

    actual = five[i].join(COMMA);
    
    console.log('actual: ' + actual);

    t.equal(expected[i].join(COMMA), actual, 'should match values in row ' + i);
  }
  
  t.end();
});