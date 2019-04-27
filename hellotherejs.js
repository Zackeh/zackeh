var cookies = 0;
var cookieProduction = 0;

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
	
};

var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost; //updates the cursor cost for the user
	
};

var cookiebros = 0;

function buyBro() {
	
	var broCost = Math.floor(100 * Math.pow(1.1,cookiebros));
	if(cookies >= broCost) {
		cookiebros = cookiebros + 1;
		cookies = cookies - broCost;
		document.getElementById('cookiebros').innerHTML = cookiebros;
		document.getElementById('cookies').innerHTML = cookies;

		
		
	};
	var nextCost = Math.floor(100 * Math.pow(1.1,cookiebros));
	document.getElementById('broCost').innerHTML = nextCost;
	
	
	if(cookies >= broCost){
	var element = document.getElementById('cookiebroke');
	element.classList.remove('greyed');
		
	}
	
	
	
	

	
	
};

function cheatmode() {
	cookies = cookies + 10000000000000000000000000000;
	
	
	
	
}

window.setInterval(function(){
	
	cookieClick(cursors);
	cookieClick(cookiebros * 4);
	moneyCheck();
	
	
}, 1000);



function moneyCheck() {
	if(cookies >= gbroCost){
	var element = document.getElementById('cookiebroke');
	element.classList.remove('greyed');
		
}
	
	
}





















// Save


function save() {
	alert("gay");
	var save = {
    cookies: cookies,
    cursors: cursors,
    prestige: prestige
	
	
}
	localStorage.setItem("save",JSON.stringify(save));
	
}

function load() {
	
	var savegame = JSON.parse(localStorage.getItem("save"));
if (typeof savegame.cookies !== "cookies") cookies = savegame.cookies;
};
