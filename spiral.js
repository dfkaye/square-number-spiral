/*
 * square-number-spiral.js
 *
 * @dfkaye - david kaye
 * 2013-3-26
 * 
 * spiral() accepts an int as the initial width & height of a square, then generates an array of arrays
 * traversing the outermost indices of each (x,y) slot, entering values from 1 to the square value of
 * the initial input.
 *
 * I won't claim the algorithm is elegant but it does produce the result correctly.
 *
 * tl;dr
 * =====
* 
 * This:
 *
 *      spiral(5);
 *  
 * should produce this:
 *
 *   1,  2,  3,  4, 5
 *  16, 17, 18, 19, 6
 *  15, 24, 25, 20, 7
 *  14, 23, 22, 21, 8
 *  13, 12, 11, 10, 9
 *
 */
;(function (exports) {

    exports.spiral = spiral;
    
    function spiral(n) {
    
        var total = Math.floor(n * n);
        var square = [];
        
        for (var r = 0; r < n; r += 1) {
            square[r] = [];
        }

        var i = 0, x = 0, y = 0, size = n, todo = n, turns = 0, xinc = 1, yinc = 0;
        
        for (; i < total; i += 1) {
                        
            square[y][x] = i + 1;
            
            todo -= 1;
            
            if (todo === 0) {
            
                turns += 1;
                
                if (turns % 2 === 1) { 

                    // go up or down next iteration of todo
                    
                    xinc = 0;

                    if (turns % 4 === 3) { 
                        // up
                        yinc = -1;
                    } else {
                        // down
                        yinc = 1;
                    }
                    
                    /* 
                           * shrink the size of internal squares when we turn a corner every two times 
                           * after the first row is completed.
                           */
                    size -= 1;
                    
                } else { 
                
                    // go left or right next iteration of todo
                
                    yinc = 0;
                    
                    if (turns % 4 === 0) {
                        // left
                        xinc = 1;
                    } else {
                        // right
                        xinc = -1;
                    }
                }
                
                todo = size;
            }
           
            x += xinc;
            y += yinc;
        }
        
        return square;
    };

}((typeof module != 'undefined' && module.exports) ? module.exports : this));