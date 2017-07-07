/* global canvas stage createjs */
(function (window) {
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;

    window.opspark.makeMotionPoem = function () {
        var view = new createjs.Container();
        stage.addChild(view);

        const width = canvas.width;
        const height = canvas.height;
        
        const ACROSS = 'across';
        const DOWN = 'down';
        const BACK = 'back';
        const UP = 'up';
        
        ////////////////////////////////////////////////////////////////
        // YOUR CODE BELOW HERE                                       //
        ////////////////////////////////////////////////////////////////

        // TODO 1 : Declare our variables //
        var i, shape, direction;

        var _motionPoem = {
            init: function() {
                // TODO 2 : Initialize our variables //
                i = 0;
                direction = ACROSS;
                shape = new createjs.Shape();
                view.addChild(shape);
            },

            update: function () {
                /*
                 * NOTE: all drawing functions take the same inputs:
                 * 
                 * drawLineAcross(fromX, fromY, toX, toY);
                 */
                
                ////////////////////////////////////////////////////////////////
                // START OF CONDITIONAL STATEMENTS                            //
                ////////////////////////////////////////////////////////////////
                
                // TODO 3 : Create the condition for ACROSS //
                if (direction === ACROSS) {
                    drawLine(i, 0, randomX(), height);
                    if (i < width) {
                        i++;
                    } else {
                        direction = DOWN;
                        i = 0;
                    }
                }

                // TODO 4 : Create a condition for DOWN //
                else if ( direction === DOWN ) {
                    /*
                     * 4.a:
                     * Call drawLine()
                     * To draw the line down the right side, what
                     * are the values of fromX, fromY, toX, toY ?
                     */
                    drawLine(width, i, 0, randomY())
                    
                    /*
                     * 4.b:
                     * Use an if-else block to check if 
                     * i is less than the height.
                     * 
                     * If it is, add 1 to i.
                     * 
                     * Else, set the direction to BACK.
                     */
                     if(i < height) {
                         i++;
                     } else {
                         direction = BACK;
                     }
                     
                     
                } // DON'T DELETE THIS //

                // TODO 5 : Create a condition for BACK //
                else if ( direction === BACK ) {
                    /*
                     * 5:a:
                     * Call drawLine()
                     * To draw the line back across the bottom, what
                     * are the values of fromX, fromY, toX, toY ?
                     */
                     drawLine(i, height, randomX(), 0);
                     
                    /*
                     * 5:b:
                     * Use an if-else block to check if
                     * i is greater than 0. 
                     *
                     * If it is, subtract 1 from i.
                     * 
                     * Else, set the direction to UP, and set i to height.
                     */
                    if(i > 0) {
                        i--;
                    } else {
                        direction = UP;
                        i = height;
                    }
                    
                    
                } // DON'T DELETE THIS //

                // TODO 6 : Create a condition for UP //
                else {
                    /*
                     * 6.a:
                     * Call drawLine()
                     * To draw the line up the left side, what
                     * are the values of fromX, fromY, toX, toY ?
                     */
                    drawLine(0, i, width, randomY())
                    
                    /*
                     * 6.b:
                     * Use an if-else block to check if
                     * i is greater than 0.
                     *
                     * If it is, subtract 1 from i.
                     * 
                     * Else, set the direction to ACROSS, set i to 0, 
                     * and call the function clear()
                     */
                    if(i > 0){
                        i--;
                    } else {
                        direction=ACROSS;
                        i=0
                    }
                    
                    
                } // DON'T DELETE THIS //
                
                ////////////////////////////////////////////////////////////////
                // END OF CONDITIONAL STATEMENTS                              //
                ////////////////////////////////////////////////////////////////
                
                ////////////////////////////////////////////////////////////////
                // YOUR CODE ABOVE HERE                                       //
                ////////////////////////////////////////////////////////////////
            }
        };
        function drawLine(fromX, fromY, toX, toY) {
            draw.line(fromX, fromY, toX, toY, randomColor(), 7, shape);
        }
        function clear() {
            shape.graphics.clear();
        }
        
        return _motionPoem;
    };
    
    function randomX() {
        return Math.random() * canvas.width
    }
    function randomY() {
        return Math.random() * canvas.height;
    }
    function randomColor() {
        return '#'+Math.random().toString(16).substr(-6);
    }
}(window));
