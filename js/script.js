function setTitle(element) {
  const text = element.innerText;

  document.title = `${text} | E-Groceries`;
}

function toggleMenuButton() {
  document.getElementById("menu-list").classList.toggle("show");
}

function getStartButton() {
  const bannerHeight = document.getElementById("hero").clientHeight;
  const headerHeight =
    document.getElementsByClassName("header")[0].clientHeight;

  window.scrollBy(0, bannerHeight - headerHeight);
}

// slideShow //
const heroSlider = document.getElementById("hero-slider");
const windowWidth = heroSlider.clientWidth;

let index = 1;

heroSlider.style.transform = `translateX(${-windowWidth * index}px)`;

setInterval(() => {
  if (index == 6) return;

  index++;

  heroSlider.style.transform = `translateX(${-windowWidth * index}px)`;
  heroSlider.style.transition = "all 2s ease-in-out";
}, 6000);

heroSlider.addEventListener("transitionend", () => {
  if (document.getElementById(`slide${index}`).id == "slide6") {
    heroSlider.style.transition = "none";
    index = 0;
    heroSlider.style.transform = `translateX(${-windowWidth * index}px)`;
  }
});

// validation //
function validateForm() {
  const name = document.forms["contact-form"]["name"].value;
  const email = document.forms["contact-form"]["email"].value;
  const interest = document.forms["contact-form"]["interest"].value;

  const isEmail = email.match(/[\w.]+@\w+.\w{2,3}(.\w{2,})?/);

  if (!name) {
    const errName = document.getElementById("name-error");

    errName.style.display = "block";
    errName.style.visibility = "visible";
  }

  if ((email && !isEmail) || !email) {
    const errEmail = document.getElementById("email-error");

    errEmail.style.display = "block";
    errEmail.style.visibility = "visible";
  }

  if (interest === "none") {
    const errInterest = document.getElementById("interest-error");

    errInterest.style.display = "block";
    errInterest.style.visibility = "visible";
  }

  if (name && email && isEmail && interest !== "none") {
    alert(`Data anda telah sukses terkirim, ${name}`);

    return false;
  }

  return false;
}

function fillInput(fieldName) {
  const inputValue = document.getElementById(fieldName).value;
  const errorText = document.getElementById(`${fieldName}-error`);

  if (inputValue && errorText.style.visibility === "visible") {
    errorText.style.display = "none";
    errorText.style.visibility = "hidden";
  }
}

function selectInterest() {
  const interestValue = document.getElementById("interest").value;
  const errorText = document.getElementById("interest-error");

  if (interestValue !== "none" && errorText.style.visibility === "visible") {
    errorText.style.display = "none";
    errorText.style.visibility = "hidden";
  }
}
// JavaScript code goes here
document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        var name = document.getElementById('name').value;
        var date = document.getElementById('date').value;
        var gender = document.querySelector('input[name="gender"]:checked').value;
        var message = document.getElementById('message').value;
        
        // Display form values
        var formOutput = document.getElementById('form-output');
        formOutput.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;
        
        // Reset form
        contactForm.reset();
    });
  });
  $(document).ready(function () { 
       var fpsOut = document.getElementById('myTime');
       setInterval(function () {
           var d = new Date(); 
           fpsOut.innerHTML = d;
       }, 1000);
   });