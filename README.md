square-number-spiral (could be renamed as 'number squares')
====================

JavaScript interview question:

Write a function that takes a number, squares it, generates a square of numbers 
in sequence starting from top left, and traverses the outermost positions not 
occupied by a number, creating a spiral from lowest to highest values.

tl;dr
=====

*Using spiral.js*, this:

    spiral(5);
    
should produce this:

     1,  2,  3,  4, 5
    16, 17, 18, 19, 6
    15, 24, 25, 20, 7
    14, 23, 22, 21, 8
    13, 12, 11, 10, 9

    
circuit
=======

circuit.js - refactored spiral algorithm, plus some internal helper methods.

*Using circuit.js*, this:

    circuit(5);
    
should produce this:

     1,  2,  3,  4, 5
    16, 17, 18, 19, 6
    15, 24, 25, 20, 7
    14, 23, 22, 21, 8
    13, 12, 11, 10, 9

    
Disclaimer
==========

I won't claim either algorithm is elegant (circuit is probably less brittle) but 
both produce the result correctly.


Utility
=======

Not an efficient use of time in an interview, but it is an interesting problem 
in itself with respect to array traversal in multiple directions/orientations.


tape & testling
===============

Using [tape](https://github.com/substack/tape) to run tests from the node.js 
command line, and in order to use [testling](http://ci.testling.com/) from the
github service hook.

[![browser support](https://ci.testling.com/dfkaye/square-number-spiral.png)](https://ci.testling.com/dfkaye/square-number-spiral)

[Things I've found about checking things in for testling to work](https://gist.github.com/dfkaye/5225546)


__from node command line__

    cd ./square-number-spiral
  
    node circuit-test.js
    node spiral-test.js
