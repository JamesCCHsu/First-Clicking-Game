var firstdollar = true;
var firsticecream = true;

var paper = 0; paperFixed = paper.toFixed(2);
var icecream = 0;
var drool = 0; droolFixed = drool.toFixed(2);
var employee = 0;



function paperClick(number){
    paper = (paper + number)*(1+0.0001*drool);
	paperFixed = paper.toFixed(2);
    document.getElementById("paperFixed").innerHTML = paperFixed;
		if (firstdollar == true){
			document.getElementById("prompt").innerHTML = "Congratulations on your first Walrus Dollar! Why not spend it on some icecream?";
			document.getElementById("prompt2").innerHTML = "You can purchase 1 icecream with W$10";
			firstdollar = false;
		}

};

function icecreamClick(number){
	if (paperFixed >= 10) {
		icecream = icecream + number;
		paper = paper - 10;
		paperFixed = paper.toFixed(2);
		document.getElementById("icecream").innerHTML = icecream;
		document.getElementById("paperFixed").innerHTML = paperFixed;
			if (firsticecream == true){
				document.getElementById("prompt").innerHTML = "Congratulations on your first icecream! Icecream is used to make sure Walrus and her employees do not run out of drool. Their drool will run out without icecream!";
				firsticecream = false;
			}
	}
};

function employeeClick(number){
	if (paperFixed >= 50) {
		employee = employee + number;
		paper = paper - 50;
		paperFixed = paper.toFixed(2);
		document.getElementById("paperFixed").innerHTML = paperFixed;
	} else {}
    document.getElementById("employee").innerHTML = employee;
	
};

function droolClick(number){
    drool = drool + number;
    document.getElementById("droolFixed").innerHTML = droolFixed;
	
};

window.setInterval(function() {
    if (icecream < 10){
    document.getElementById("winmessage").style.visibility="hidden";
    } else {
	document.getElementById("winmessage").style.visibility="visible";
   }
}, 1);

var droolDecay = 0.05
window.setInterval(function() {
	if (drool > 0.01){
		drool = drool - droolDecay;
		drool = drool + (0.005*icecream);
		droolFixed = drool.toFixed(2);
		document.getElementById("droolFixed").innerHTML = droolFixed;
	}
}, 100);

var droolEmployee = 0.1
window.setInterval(function() {
		if (employee >= 1){
			if (drool > 0)
				paper = paper + 1;
				paperFixed = paper.toFixed(2);
				document.getElementById("paperFixed").innerHTML = paperFixed;
				drool = drool - droolEmployee;
				document.getElementById("droolFixed").innerHTML = droolFixed;
	}
}, 1000);

