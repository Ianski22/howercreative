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

var expiryMsg;
	var today = new Date();
	var elEnds;

	function offerExpires(today) {
	  var weekFromToday, day, date, month, year, dayNames, monthNames;

  // Calculate one week from today
  weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  // Day and month names
  dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Extract details
  day = dayNames[weekFromToday.getDay()];
  date = weekFromToday.getDate();
  month = monthNames[weekFromToday.getMonth()];
  year = weekFromToday.getFullYear();

  // Create the message
  expiryMsg = `Offer expires next ${day}, ${month} ${date}, ${year}.`;

  // Insert into the HTML element
  elEnds = document.getElementById('offerEnds');
  elEnds.textContent = expiryMsg;
  }

	// Call the function
	offerExpires(today);

