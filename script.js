// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', function () {
  // Message for newsletter
  const msg = 'Sign up to receive newsletter for 10% off!';
  const el = document.getElementById('message');
  if (el) el.textContent = msg;

  // Greeting message
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

  const greetingEl = document.getElementById('greeting');
  if (greetingEl) greetingEl.innerHTML = `<p style="color: green;">${greeting}</p>`;
});

// Functions for opening and closing navigation
function openNav() {
  const nav = document.getElementById('myNav');
  if (nav) nav.style.height = '100%';
}

function closeNav() {
  const nav = document.getElementById('myNav');
  if (nav) nav.style.height = '0%';
}

// Offer expiration message
function offerExpires(today) {
  let weekFromToday, day, date, month, year, dayNames, monthNames;

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
  const expiryMsg = `Offer expires next ${day}, ${month} ${date}, ${year}.`;

  // Insert into the HTML element
  const elEnds = document.getElementById('offerEnds');
  if (elEnds) elEnds.textContent = expiryMsg;
}

// Chapter 4: Decision Loop 
var i = 1; // Initialize i to 1
var msg = ''; // Initialize an empty string for the message
var hobbies = ['Photography', 'Web Design', 'Graphic Design']; // List of hobbies

do {
  msg += i + '. ' + hobbies[(i - 1) % hobbies.length] + '<br />'; // Cycle through hobbies
  i++; // Increment i
} while (i <= 10); // Loop until i is greater than 10

// Insert the message into the element with ID 'answer'
document.getElementById('answer').innerHTML = msg;






