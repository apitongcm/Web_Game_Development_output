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

    // include direction of the square 
    //let direction = 1;

    //APR 7, 2022 
    //button controls 
    let dir = 0;
    let up = document.getElementById("up");
    let right = document.getElementById("right");
    let down = document.getElementById("down");
    let left = document.getElementById("left");

    //execute command when button is touched 
    up.onmousedown = function(){ dir = 4;}
    down.onmousedown = function(){ dir = 3;}
    


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

        //draw another object 
        context.beginPath();
        context.rect(x,y,50,50);
        context.fillStyle = "green";
        context.fill();
        
        //draw another object
        context.beginPath();
        context.rect(x + 50,y + 50,50,50);
        context.fillStyle = "red";
        context.fill();

        x += direction * (speed * previousTime);

        //if you want to move vertical. . .
       // y += direction * (speed * previousTime);
       
        
        if (x >= 600 - 100 || x <= 0 ) {
           direction *= -1;
             
        }

        window.requestAnimationFrame(draw);

    }
    draw();

}