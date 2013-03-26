square-number-spiral
====================

Another interview question that came up - write a function that takes a number, 
squares it, generates a square of numbers in sequence starting from top left, 
and traverses the outermost positions not yet occupied by a number, creating a
spiral from lowest to highest values.

tl;dr
=====

This:

    spiral(5);
    
should produce this:

     1,  2,  3,  4, 5
    16, 17, 18, 19, 6
    15, 24, 25, 20, 7
    14, 23, 22, 21, 8
    13, 12, 11, 10, 9

Disclaimer
==========

I won't claim the algorithm is elegant but it does produce the result correctly.

As an interview question this does not lead to an efficient use of time, but it 
is an interesting problem in itself with respect to array traversal in four 
directions.


test.html with testling
=======================

uses [testling's html runner support](https://github.com/substack/testling-html-example)
    
see test result from [testling](https://ci.testling.com/dfkaye/square-number-spiral)

[![browser support](https://ci.testling.com/dfkaye/square-number-spiral.png)](https://ci.testling.com/dfkaye/square-number-spiral)
