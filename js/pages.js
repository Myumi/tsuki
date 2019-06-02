document.onreadystatechange = function() {
  if (document.readyState == "interactive") {
    //add event listeners

    //put this under a check for page width
    document.getElementById("nav__menu").classList.toggle("invisible");
    //display nav menu
    document
      .getElementsByClassName("title__icon")[0]
      .addEventListener("click", function() {
        //display menu or remove menu
        document.getElementById("nav__menu").classList.toggle("invisible");
      });
  }

  //show pages from nav item click
  document.getElementById("nav__menu").getElementsByTagName("li");
  // .addEventListener("click", showPage);

  function showPage(event) {
    const navItem = event.target.id;
  }

  //image slideshow
  let slideIndex = 0;
  slideshow();
  function slideshow() {
    const slides = document.getElementsByClassName("img__slideshow");
    for (let item of slides) {
      item.style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    slideIndex + 1 > slides.length - 1 ? (slideIndex = 0) : slideIndex++;
  }
  setInterval(slideshow, 2500);

  //dinner menu buttons
  const dinnerMenus = document.getElementsByClassName("menu__button");
  for (let item of dinnerMenus) {
    item.addEventListener("click", function() {
      openDinnerMenu(item.id.replace("button__", ""));
    });
  }
  openDinnerMenu("appetizer");
  function openDinnerMenu(menu) {
    const sections = document.getElementsByClassName("menu__section");
    for (let item of sections) {
      item.style.display = "none";
    }
    document.getElementById(menu).style.display = "block";
  }
};

//hours & facebook link should be on main page
//make image a slideshow same size
//make image slideshow fade in
//make nav buttons show pages
//add info on bottom
