/*
 * tape test for number squares spiral() method
*/

var test = require('tape');
var spiral = require('./spiral.js').spiral;

test('verify spiral exists', function (t) {

  t.strictEqual(typeof spiral, 'function');
  t.end();
});

test('should contain 5 rows', function (t) {

  t.equal(5, spiral(5).length);
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
  var five = spiral(5);
  var actual;

  for (var i = 0; i < 5; i += 1) {

    actual = five[i].join(COMMA);
    
    console.log('actual: ' + actual);

    t.equal(expected[i].join(COMMA), actual, 'should match values in row ' + i);
  }
  
  t.end();
});
