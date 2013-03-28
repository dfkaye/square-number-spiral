/*
 * square-circuit.js
 *
 * @dfkaye - david kaye
 * 2013-3-28
 * 
 * Improved algorithm for square-spiral.js
 *
 * circuit() accepts an int as the initial width & height of a square, then generates an array of arrays
 * traversing the outermost indices of each (x,y) slot, entering values from 1 to the square value of
 * the initial input.
 *
 *
 * tl;dr
 * =====
* 
 * This:
 *
 *      circuit(5);
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

;(function(exports) {

    exports.circuit = circuit;
    
    function circuit(n) {
    
        n = Number(n);
        
        var total = Math.floor(n * n);
        var circuits = 0;
        var dir = 0;
        var side = n;
        
        var sides = resize(n);
        var inc = turn(dir);
        
        var square = [];
        
        for (var r = 0; r < n; r += 1) {
            square[r] = [];
        }
                
        for (var i = 0, x = 0, y = 0; i < total; i += 1) {
        
            square[y][x] = i + 1;
            
            side -= 1;
            
            if (side === 0) {
            
                dir += 1;
                
                if (dir > 3) {
                
                    dir = 0;
                    circuits += 1;
                    sides = resize(n - (circuits + 1));
                }
                
                side = sides[dir];
                inc = turn(dir);
            }
            
            x += inc.x;
            y += inc.y;
        }
        
        return square;
    };
    
    function resize(n) {
        return [n, n - 1, n - 1, n - 2];
    }
    
    function turn(dir) {
    
        var x, y;

        switch (dir) {
            case 0:  x = 1; y = 0;
                    break;
            case 1:  x = 0; y = 1;
                    break;
            case 2:  x = -1; y = 0;
                    break;
            case 3:  x = 0; y = -1;
                    break;
            default:  throw new Error('dir should be 0-3 but was ' + dir);
                    break;               
        }

        return { x: x, y: y };
    };
    
}((typeof module != 'undefined' && module.exports) ? module.exports : this));