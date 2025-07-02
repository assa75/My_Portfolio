document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const image = document.querySelector(".profile-pic");

image.addEventListener("mousemove", (e) => {
  const rect = image.getBoundingClientRect();
  const x = e.clientX - rect.left; // X position inside the element
  const y = e.clientY - rect.top;  // Y position inside the element

  const moveX = (x - rect.width / 2) / 15;
  const moveY = (y - rect.height / 2) / 15;

  image.style.transform = 'scale(1.05) translate(${moveX}px, ${moveY}px)';
});

image.addEventListener("mouseleave", () => {
  image.style.transform = "scale(1)";
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Assa Panda";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });

// <!-- typed js effect starts -->
const typedText = document.querySelector(".typing-text");
const phrases = ["Front-End Developer","Back-End Developer", "Coder", "Open Source Contributor","UI/UX Designer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed=50;
let backSpeed=25;
let backDelay=500;

function typeEffect() {
  let currentPhrase = phrases[index];
  if (isDeleting) {
    typedText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % phrases.length;
    }
  } else {
    typedText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentPhrase.length) {
      isDeleting = true;
    }
  }
  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();

// fetch projects start
function getProjects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            return data
        });
}
 function showProjects(){
        document.getElementById("home").classList.remove("active");
        document.getElementById("certificates").classList.add("active");
    }
    function goHome(){
        document.getElementById("certificates").classList.remove("active");
        document.getElementById("home").classList.add("active");
    }

const filterButtons = document.querySelectorAll('.filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const category = button.getAttribute('data-category');

    skillCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Example for a potential mobile navigation toggle (requires a button in HTML)
// const navToggle = document.querySelector('.nav-toggle'); // You'd add a button with class 'nav-toggle'
// const navLinks = document.querySelector('.nav-links');

// if (navToggle) {
//     navToggle.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//     });
// }