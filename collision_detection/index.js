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
    let direction = 1;


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

        //x += direction * (speed * previousTime);
        y += direction * (speed * previousTime);
       
        
        if (y >= 450 - 100 || y <= 0) {//(x >= 600 - 100 || x <= 0 ) {
           direction *= -1;
             
        }

        window.requestAnimationFrame(draw);

    }
    draw();

}