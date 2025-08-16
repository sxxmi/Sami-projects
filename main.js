    // javascript by Meer Muhammad 

// Open Modals
const signInButton = document.getElementById('signInButton');
const signUpButton = document.getElementById('signUpButton');
const signInModal = document.getElementById('signInModal');
const signUpModal = document.getElementById('signUpModal');
const closeSignIn = document.getElementById('closeSignIn');
const closeSignUp = document.getElementById('closeSignUp');

function openModal(modal) {
  modal.style.display = 'block';
}

function closeModal(modal) {
  modal.style.display = 'none';
}

signInButton.addEventListener('click', () => {
  if (localStorage.getItem('loggedInUser')) {
    handleLogout();
  } else {
    openModal(signInModal);
  }
});

signUpButton.addEventListener('click', () => openModal(signUpModal));
closeSignIn.addEventListener('click', () => closeModal(signInModal));
closeSignUp.addEventListener('click', () => closeModal(signUpModal));

// Close Modals on Outside Click
window.addEventListener('click', (e) => {
  if (e.target === signInModal) closeModal(signInModal);
  if (e.target === signUpModal) closeModal(signUpModal);
});

// Handle Forms
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');

function handleUserLogin(username) {
  localStorage.setItem('loggedInUser', username);
  displayUser(username);
}

function handleLogout() {
  localStorage.removeItem('loggedInUser');
  resetButtons();
}

function displayUser(username) {
  signInButton.textContent = `${username} (Logout)`;
  signUpButton.style.display = 'none';
}

function resetButtons() {
  signInButton.textContent = 'Sign In';
  signInButton.disabled = false;
  signUpButton.style.display = 'inline-block';
}

// Form Submission
signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('signInUsername').value;
  handleUserLogin(username);
  closeModal(signInModal);
});

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('signUpUsername').value;
  handleUserLogin(username);
  closeModal(signUpModal);
});

// Load User Data on Refresh
window.onload = () => {
  const username = localStorage.getItem('loggedInUser');
  if (username) {
    displayUser(username);
  } else {
    resetButtons();
  }
};
function togglediv()
{
  $('.mobilenav').slideToggle();
  if($('.myicon').hasClass('fa-bars'))
  {
    $('.myicon').removeClass('fa-bars')
    $('.myicon').addClass('fa-close')
  }

  else
  {
    $('.myicon').addClass('fa-bars')
    $('.myicon').removeClass('fa-close')
  }
}