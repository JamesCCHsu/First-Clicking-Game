var paper = 0;
var icecream = 0;


function paperClick(number){
    paper = paper + number;
    document.getElementById("paper").innerHTML = paper;
	
};

function icecreamClick(number){
	if (paper >= 10) {
		icecream = icecream + number;
		paper = paper - 10;
		document.getElementById("paper").innerHTML = paper;
	} else {}
    document.getElementById("icecream").innerHTML = icecream;
	
};

window.setInterval(function() {
    if (icecream < 10){
    document.getElementById("winmessage").style.visibility="hidden";
    } else {
	document.getElementById("winmessage").style.visibility="visible";
   }
}, 1);
