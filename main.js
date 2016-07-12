


var GF = function () {

	var inputStates={};
	var frameCount = 0;
	var lastTime;
	var fpsContainer;
	var fps;
	// Canvas variable declaration
	var canvas, ctx, w, h, sizeRange, ratio;

	//the bike
	var bike = {x:35,y:165,speed:1};

	var mainloop = function(time){
	
		
		measureFPS(time);

		clearCanvas();

		//game pad
		updateBikePosition();
		
		//draw bike 
		drawBike(bike.x,bike.y,ratio); 
		// Make bike trembling
		//clearCanvas();
		//drawBike(35+Math.random()*10,165+Math.random()*10); 

		requestAnimationFrame(mainloop);

	};

	var start = function(){

		fpsContainer = document.createElement('div');
		document.body.appendChild(fpsContainer);
        requestAnimationFrame(mainloop);

        //init canvas
        canvas = document.getElementById("myCanvas");

		w = canvas.width;
		h = canvas.height;

		sizeRange = document.getElementById("bikeSize");

		sizeRange.addEventListener('input',
			function(event) {
				ratio = event.target.value;
			},false);

		ctx = canvas.getContext('2d');
		drawBike(bike.x,bike.y,ratio);

		//add event listener 
		window.addEventListener('keydown',function(event) {

			if(event.keyCode === 37 ) {
				inputStates.left = true
			} else if (event.keyCode === 38) {
            	inputStates.up = true;
          	} else if (event.keyCode === 39) {
            	inputStates.right = true;
          	} else if (event.keyCode === 40) {
            	inputStates.down = true;
          	}  else if (event.keyCode === 32) {
            	inputStates.space = true;
          	}
      	}, false);
		
		window.addEventListener('keyup', function(event){
          if (event.keyCode === 37) {
             inputStates.left = false;
          } else if (event.keyCode === 38) {
             inputStates.up = false;
          } else if (event.keyCode === 39) {
             inputStates.right = false;
          } else if (event.keyCode === 40) {
             inputStates.down = false;
          } else if (event.keyCode === 32) {
             inputStates.space = false;
          }
      	}, false);

    };

    function updateBikePosition() {
      bike.speedX = bike.speedY = 0;
        // check inputStates
        if (inputStates.left) {
            ctx.fillText("left", 150, 20);
            bike.speedX = -bike.speed;
        }
        if (inputStates.up) {
            ctx.fillText("up", 150, 40);
           bike.speedY = -bike.speed;
        }
       if (inputStates.right) {
            ctx.fillText("right", 150, 60);
            bike.speedX = bike.speed;
        }
        if (inputStates.down) {
            ctx.fillText("down", 150, 80);
            bike.speedY = bike.speed;
        } 
        if (inputStates.space) {
            ctx.fillText("space bar", 140, 100);
        } else {
          // mouse up
          bike.speed = 1;
        }
      
        bike.x += bike.speedX;
        bike.y += bike.speedY;
      
    }

    function drawBike(x,y,zoom) {

		ctx. save();

		ctx.translate(x,y);
		ctx.scale(zoom,zoom)
		ctx.beginPath();

		//rear wheel
		ctx.arc(0,0,25,0,2*Math.PI);
		ctx.moveTo(0,0);
		
		//rear base
		ctx.lineTo(50,0);

		//hauban + tube de selle
		ctx.lineTo(20,-51.6);
		ctx.moveTo(25,-43);
		ctx.lineTo(0,0);

		//draw sadle
		ctx.moveTo(15,-51.6);
		ctx.lineTo(27,-51.6);


		ctx.moveTo(50,0);

		//draw frame
		ctx.lineTo(77.5,-47.3);
		ctx.moveTo(75,-43);
		ctx.lineTo(25,-43);
		ctx.moveTo(75,-43);
		ctx.lineTo(100,0);


		//draw handlebar
		ctx.moveTo(77.5,-47.3);
		ctx.lineTo(82.5,-47.3);
		ctx.moveTo(82.5,-33.3);
		ctx.arc(82.5,-40.3,7,0.4*Math.PI,1.5*Math.PI,true);

		//draw front wheel
		ctx.moveTo(125,0);
		ctx.arc(100,0,25,0,2*Math.PI);
		

		ctx.stroke();

		ctx.restore();
	};

	function clearCanvas() {

		ctx.clearRect(0,0,w,h);
	};


	var measureFPS = function(newTime) {

		if (lastTime === undefined) {
			lastTime = newTime
			return;
		}

		var diffTime = newTime - lastTime;

		if (diffTime >= 1000 ) {

			fps = frameCount;
			frameCount = 0;
			lastTime = newTime;
		}

		fpsContainer.innerHTML = 'FPS: '+ fps;
		frameCount++;
	}



	return {start:start};
}





window.onload = function init() {

	var game = new GF();
	game.start();

};

