const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

var today = new Date ();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18) {
   	greeting = 'Good evening!';
} else if (hourNow > 12) {
	greeting = 'Good afternoon!';
} else if (hourNow > 0) {
	greeting = 'Good morning!'; 
} else {
	greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>'); 
