//always use window.onload for web game development so that it will load all the elements inside before letting the user access the game
window.onload = function() {

    //states all variables used in the website 
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 0; 
    var y = 100; 

    //draw the object in canvas 
    function draw()
    {
        //clear canvas
        context.clearRect(0,0,600,400);

        //adding font to the canvas
        context.font = '52px Arial';
        context.fillStyle = 'grey';
        context.fillText("Hello There!", 150, 100);
        

        //draw our object in the canvas
        context.beginPath();
        context.rect(x,y,100,100);
        context.fillStyle = "red";
        context.fill();

        //
        x += 10 
        if (x >= 600)
        {
            x= -100;
        }

        //period of redraws
        window.requestAnimationFrame(draw);
        

    }
      //revision #1 instead of setInterval use requestAnim browser take care of the period of redraws
      //setInterval(draw,100);
    draw();


}