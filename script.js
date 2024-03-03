// Form validation using JavaScript
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  var fullname = document.getElementById('fullname').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm_password').value;
  var fullnameError = document.getElementById('fullnameError');
  var emailError = document.getElementById('emailError');
  var phoneError = document.getElementById('phoneError');
  var passwordError = document.getElementById('passwordError');
  var confirmPasswordError = document.getElementById('confirmPasswordError');

  // Reset error messages
  fullnameError.innerHTML = '';
  emailError.innerHTML = '';
  phoneError.innerHTML = '';
  passwordError.innerHTML = '';
  confirmPasswordError.innerHTML = '';

  // Validation criteria
  if (fullname.length < 5) {
      event.preventDefault();
      fullnameError.innerHTML = 'Name must be at least 5 characters long.';
  }
  if (email.indexOf('@') === -1) {
      event.preventDefault();
      emailError.innerHTML = 'Enter a valid email address.';
  }
  if (phone.length !== 10 || phone === '123456789') {
      event.preventDefault();
      phoneError.innerHTML = 'Enter a valid 10-digit phone number.';
  }
  if (password.length < 8 || password === 'password' || password === fullname) {
      event.preventDefault();
      passwordError.innerHTML = 'Password should be at least 8 characters long and not be "password" or your name.';
  }
  if (password !== confirmPassword) {
      event.preventDefault();
      confirmPasswordError.innerHTML = 'Passwords do not match.';
  }
});
