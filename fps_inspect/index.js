window.onload = function()
{
 
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 0; 
    var y = 100; 

    //include t as time previous 
    var t; 

    function draw()
    {
        //get the frame per seconds 
        var previousTime = (Date.now() - t) / 1000;
        t = Date.now();
        var fps = Math.round(1/previousTime);

        //clear canvas
        context.clearRect(0,0,600,450);
        
        //set up frame per second display 
        context.font = "25px Arial";
        context.fillStyle = "green";
        context.fillText("FPS: " + fps , 20, 30);

        //draw object into canvas 
        context.beginPath();
        context.rect(x,y,100,100,);
        context.fillStyle = "orange";
        context.fill();

        x += 10;
        y += 5;
        if (x >= 600 && y >= 450) {
            x = -100;
            y = -50;
        }

        window.requestAnimationFrame(draw);

    }
    draw();

}