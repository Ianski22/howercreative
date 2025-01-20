const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

 document.addEventListener('DOMContentLoaded', function () {
  var msg = 'Sign up to receive newsletter for 10% off!';
  var el = document.getElementById('message');
  el.textContent = msg;
});

// JavaScript to dynamically display the greeting
document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const hourNow = today.getHours();
  let greeting;

  if (hourNow > 18) {
    greeting = 'Good evening!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon!';
  } else if (hourNow > 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Welcome!';
  }

  // Insert the greeting into the div with id="greeting"
  document.getElementById("greeting").innerHTML = `<p style="color: green;">${greeting}</p>`;
});

// Functions for opening and closing navigation
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

