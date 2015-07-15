var paper = 0; paperFixed = paper.toFixed(2);
var icecream = 0;
var drool = 0; droolFixed = drool.toFixed(2);
var employee = 0;

function paperClick(number){
    paper = (paper + number)*(1+0.0001*drool);
	paperFixed = paper.toFixed(2);
    document.getElementById("paperFixed").innerHTML = paperFixed;
};

function icecreamClick(number){
	if (paperFixed >= 10) {
		icecream = icecream + number;
		paper = paper - 10;
		paperFixed = paper.toFixed(2);
		document.getElementById("paperFixed").innerHTML = paperFixed;
	} else {}
    document.getElementById("icecream").innerHTML = icecream;
	
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
	if (drool > 0.1){
		drool = drool - droolDecay;
		drool = drool + (0.005*icecream);
		droolFixed = drool.toFixed(2);
		document.getElementById("droolFixed").innerHTML = droolFixed;
	}
}, 100);

var droolEmployee = 0.1
window.setInterval(function() {
		if (employee >= 1){
		paper = paper + 1;
		paperFixed = paper.toFixed(2);
		document.getElementById("paperFixed").innerHTML = paperFixed;
		drool = drool - droolEmployee;
		document.getElementById("droolFixed").innerHTML = droolFixed;
	}
}, 1000);



