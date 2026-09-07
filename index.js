setTimeout(() => {
  document.querySelector("header nav").classList.add("show");
}, 600);

setTimeout(() => {
  document.querySelector("header .nav-cta").classList.add("show");
}, 800);

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

console.log("hamburger:", hamburger);
console.log("nav:", nav);

hamburger.addEventListener("click", () => {
  console.log("HAMBURGER CLICKED");
  nav.classList.toggle("active");
  console.log("nav classes:", nav.classList);
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});


const projects = document.querySelectorAll(".work-project");
const nextButton = document.querySelector(".work-next");
let currentProject = 0;

nextButton.addEventListener("click", function () {
  currentProject++;
  if (currentProject === projects.length) {
    currentProject = 0;
    projects.forEach(function (project, index) {
    if (index === currentProject) {
      project.style.visibility = "visible";
    } else {
      project.style.visibility = "hidden";
    }
  });
  }
  console.log(currentProject);

  projects.forEach(function (project, index) {
    if (index === currentProject) {
      project.style.visibility = "visible";
    } else {
      project.style.visibility = "hidden";
    }
  });
  console.log(projects[0].style.visibility);
  console.log(projects[1].style.visibility);
  console.log(projects[2].style.visibility);
});

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {
  card.addEventListener("click", () => {

    const wasActive = card.classList.contains("active");

    serviceCards.forEach((otherCard) => {
      otherCard.classList.remove("active");
    });

    if (!wasActive) {
      card.classList.add("active");
    }

  });
});

const backToMain = document.querySelector(".back-to-main-link");

backToMain.addEventListener("click", (event) => {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});