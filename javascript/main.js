
//ripple();

// function ripple(){
// 	var boxes=$(".box");
// 	//console.log(boxes);
// 	boxes[1].style.background="black";
// 	console.log(boxes[1].style.background);
// 	wait(5000);
// 	boxes[1].style.background="transparent";
	
// 	console.log(boxes[1].style.background);
// 	// for(var i=0; i<boxes.length; i++)
// 	// {
// 	// 	console.log(boxes[i]);
// 	// 	$(".box").trigger("hover");
// 	// 	wait(300);
		
// 	// }
// }
$(".photoimage").attr("src","./headshots/1.jpg");	
function wait(s){
   var start = new Date().getTime();
   var end = start;
   while(end < start + (s*1000)) {
     end = new Date().getTime();
  }
}
var profileInterval;
$(".photoimage").hover(changeProfilePhotos,stopProfilePhotos);
function changeProfilePhotos()
{
	profileInterval=setInterval(function(){
		var s=$(".photoimage").attr("src");
		var no=parseInt(s.charAt(12));
		console.log(no);
		if(no===9)
		{no=1;}
		else{no=no+1}
		//var imgNo=no+1;
		s="./headshots/"+no+".jpg"
			
		$(".photoimage").attr("src",s);
	},500);
}

function stopProfilePhotos()
{
//	profileInterval.clearInterval();
	clearInterval(profileInterval);
$(".photoimage").attr("src","./headshots/1.jpg");	
}

$("#aboutMe").on("click",function(){
	window.location.href="AboutMe.html";
});

function contactMe(){
	window.location.href="Contact.html";
}

function sideclick(){
	window.location.href="SmallBusiness/Shop.html";
}


$("#resume").on("click",function(){
	
	window.location.href='MaryGeorge.docx';
	
});

$("#lol").on("click",function(){
	window.location.href="html/Contact.html";
});

$("#projects").on("click",function(){
	window.location.href="html/Projects.html";
});

$("#hobby").on("click",function(){
	window.location.href="html/Hobbies.html";
});

$("#linkedin").on("click",function(){
	window.open("https://www.linkedin.com/in/mary-george-07312047/","_blank");
});

$("#github").on("click",function(){
	window.open("https://github.com/marygeorge","_blank");
});

$("#Me").on("click",function(){
	window.location.href="html/AboutMe.html";
});