function toggleMenu() {
  var nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

document.getElementById("WeatherApp").addEventListener("click", function () {
  window.open("https://manmay-rawal.github.io/Weather-App/", "_blank");
});

document.getElementById("ShopyShop").addEventListener("click", function () {
  window.open("https://shopy-shop-bsmy.onrender.com/", "_blank");
});

document.getElementById("CRMwebsite").addEventListener("click",function(){
  window.open("https://crmwebsite-ww7w.onrender.com/","_blank");
});

document.getElementById("EmiCalculator").addEventListener("click",function(){
  window.open("https://manmay-rawal.github.io/EMI-Calculator/","_blank");
})


// Contect me url

document.getElementById("linkedin").addEventListener("click",function(){
  window.open("https://www.linkedin.com/in/manmay-rawal-b00a2b30a/","_blank");
})


document.getElementById("github").addEventListener("click",function(){
  window.open("https://github.com/Manmay-Rawal","_blank");
})


document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  // Get input values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Create an object to store data
  let formData = {
    name: name,
    email: email,
    message: message
  };

  // Retrieve existing data from LocalStorage (if any)
  let storedData = localStorage.getItem("contactFormData");

  // Convert existing data to an array (or create a new one)
  let contactList = storedData ? JSON.parse(storedData) : [];

  // Add new data to the array
  contactList.push(formData);

  // Store updated data back in LocalStorage
  localStorage.setItem("contactFormData", JSON.stringify(contactList));

  // Alert and clear the form
  alert("Your message has been saved locally!");
  document.getElementById("contactForm").reset();
});


document.addEventListener("DOMContentLoaded", function () {
  // Select all navigation links
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default jump behavior

      let targetId = this.getAttribute("href").substring(1); // Get section ID
      let targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60, // Adjust for navbar height
          behavior: "smooth"
        });
      }
    });
  });
});


const text = "Web Developer";
const names = "Hi, I'm Manmay Rawal";
const state = "From Bengaluru";
const placeholderElementUi = document.querySelector(".ui");
const placeholderElementName = document.querySelector(".name");
const placeholderElementState = document.querySelector(".state");


let index = 0;

function typeEffect() {
  if (index < text.length) {
    placeholderElementUi.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100); // Adjust speed
  } else {
    typeName();
  }
}

let index2 = 0;
function typeName() {
  if (index2 < names.length) {
    if (index2 === 8) { // When "Manmay Rawal" starts
      placeholderElementName.innerHTML += `<span class="red-text">${names.charAt(index2)}</span>`;
    } else if (index2 > 8) {
      document.querySelector(".red-text").innerHTML += names.charAt(index2);
    } else {
      placeholderElementName.innerHTML += names.charAt(index2);
    }
    index2++;
    setTimeout(typeName, 100); // Adjust speed
  } else {
    typePlace();
  }
}

let index3 = 0;
function typePlace() {
  if (index3 < state.length) {
    placeholderElementState.textContent += state.charAt(index3);
    index3++;
    setTimeout(typePlace, 100); // Adjust speed
  } else {
    setTimeout(() => {
      placeholderElementUi.textContent = "";
      placeholderElementName.innerHTML = "";
      placeholderElementState.textContent = "";
      index = 0;
      index2 = 0;
      index3 = 0;
      typeEffect();
    }, 1000); // Restart after delay
  }
}

typeEffect();



window.onscroll = function () {
  let scrollBtn = document.getElementById("scrollToTop");
  
  // Show button when user scrolls down 100px
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
