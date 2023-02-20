const navbar = document.getElementById("navbar");
const content = document.querySelector(".content");
const sticky = navbar.offsetTop;
console.log(sticky);
console.log(window.scrollY);

function myFunction() {
  console.log(window.scrollY);
  if (window.scrollY >= sticky) {
    navbar.classList.add('sticky');
    content.classList.add('topSpace');
  } else {
    navbar.classList.remove('sticky');
    content.classList.remove('topSpace');
  }
}

document.addEventListener("scroll", myFunction);