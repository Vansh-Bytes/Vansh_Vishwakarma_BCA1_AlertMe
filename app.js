const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
// Add these functions to app.js

// Global variables to store the current email
let currentEmail = '';

// Register email with the backend
async function registerEmail() {
  const email = document.getElementById('register-email').value;
  if (!email) {
    alert('Please enter your email');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    });

    const data = await response.json();
    if (response.ok) {
      currentEmail = email;
      document.getElementById('register-form').style.display = 'none';
      document.getElementById('verify-form').style.display = 'block';
      alert('OTP sent to your email!');
    } else {
      alert('Error: ' + data.message);
    }
  } catch (error) {
    alert('Error connecting to server: ' + error.message);
  }
}

// Verify OTP with the backend
async function verifyOTP() {
  const otp = document.getElementById('verify-otp').value;
  if (!otp) {
    alert('Please enter the OTP');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email: currentEmail,
        otp: otp 
      }),
    });

    const data = await response.json();
    if (response.ok) {
      document.getElementById('verify-form').style.display = 'none';
      document.getElementById('alert-form').style.display = 'block';
      alert('Email verified successfully! You can now send alerts.');
    } else {
      alert('Error: ' + data.message);
    }
  } catch (error) {
    alert('Error connecting to server: ' + error.message);
  }
}

// Send alert to all verified users
async function sendAlert() {
  const missingName = document.getElementById('missing-name').value;
  const websiteName = document.getElementById('website-name').value;
  
  if (!missingName || !websiteName) {
    alert('Please fill in all fields');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/alert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        missing_name: missingName,
        website_name: websiteName 
      }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Alert sent to all verified users!');
    } else {
      alert('Error: ' + data.message);
    }
  } catch (error) {
    alert('Error connecting to server: ' + error.message);
  }
}