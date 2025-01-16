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
