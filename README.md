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


test.html with testling
=======================

trying to use [testling's html runner support](https://github.com/substack/testling-html-example)
but not working there correctly yet.
  
see test result from [testling](https://ci.testling.com/dfkaye/square-number-spiral)

[![browser support](https://ci.testling.com/dfkaye/square-number-spiral.png)](https://ci.testling.com/dfkaye/square-number-spiral)
