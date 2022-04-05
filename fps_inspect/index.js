window.onload = function()
{
 
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 0; 
    var y = 100; 

   
    //include t as time previous 
    var t = Date.now(); 
    //APR 4, 2022 REVISION - adding speed (to adjust speed relative with time)
    let speed = 100; 



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

        x += (speed * previousTime);
        
        if (x >= 600 ) {
           x = -100;
        }

        window.requestAnimationFrame(draw);

    }
    draw();

}