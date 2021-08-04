
var canvas=new fabric.Canvas('myCanvas');

block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object="";

function load_img(){
	fabric.Image.fromURL("golf-h1.png", function(Img)
	hole_object = Img;
	hole_object.scaleToWidth(50);
	hole_object.scaleToHeight(50);
	hole_object.set({
		top:hole_y
		left:hole_x
	});
	canvas.add(hole_object);
})
new_image
}
	

	
	

	


function new_image()
{
	fabric.Image.fromURL(get_image,function(Img){
        ball_image_object=Img;
		ball_image_object.scaleToWidth(50);
		ball_image_object.scaleToHeight(50);
		ball_image_object.set({
            top: ball_y,
            left: ball_x
        });
        canvas.add( ball_image_object);
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_object)
		document.getElementById("hd3").innerHTML="You have hit the goal!!!"
		document.getElementById("myCanvas").style.borderColor="red";
	}

	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
	   if(ball_y>=0){
		   ball_y = ball_y - block_image_height;
		   console.log("block image height = "+block_image_height);
		   console.log("When up arrow key is pressed, X = "+ ball_x + " , Y = "+ball_y);
		   canvas.remove(ball_object);
		   new_image();
	   }
	}

	function down()
	{
		if(ball_y<=450){
			ball_y = ball_y + block_image_height;
			console.log("block image height = "+block_image_height);
			console.log("When down arrow key is pressed, X = "+ ball_x + " , Y = "+ball_y);
			canvas.remove(ball_object);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			if(ball_y>=0){
				ball_x = ball_x - block_image_height;
				console.log("block image height = "+block_image_height);
				console.log("When left arrow key is pressed, X = "+ ball_x + " , Y = "+ball_y);
				canvas.remove(ball_object);
				new_image();
			}
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
		
				ball_x = ball_x + block_image_height;
				console.log("block image height = "+block_image_height);
				console.log("When right arrow key is pressed, X = "+ ball_x + " , Y = "+ball_y);
				canvas.remove(ball_object);
				new_image();
			}
	
	}
	
}

