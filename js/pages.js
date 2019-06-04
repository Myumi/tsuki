document.onreadystatechange = function() {
  //add event listeners
  if (document.readyState == "interactive") {
    //put this under a check for page width
    document.querySelector("#nav__menu").classList.toggle("invisible");
    //display nav menu
    document
      .querySelectorAll(".title__icon")[0]
      .addEventListener("click", function() {
        //display menu or remove menu
        document.querySelector("#nav__menu").classList.toggle("invisible");
      });

    //show pages from nav item click
    document.querySelector("#nav__menu").getElementsByTagName("li");
    // .addEventListener("click", showPage);

    function showPage(event) {
      const navItem = event.target.id;
    }

    //image slideshow
    let slideIndex = 0;
    slideshow();
    function slideshow() {
      const slides = document.querySelectorAll(".img__slideshow");
      for (let item of slides) {
        item.classList.add("invisible");
        item.classList.remove("visible");
      }
      slides[slideIndex].classList.remove("invisible");
      slides[slideIndex].classList.add("visible");
      slides[slideIndex].classList.add("fade");
      slideIndex + 1 > slides.length - 1 ? (slideIndex = 0) : slideIndex++;
    }
    setInterval(slideshow, 2500);

    //menu buttons
    openMenu("lunch");
    openDinnerMenu("appetizer");
    const menuButtons = document.querySelectorAll(".menu__button");
    for (let item of menuButtons) {
      if (item.parentElement.classList[0] === "menu__buttons") {
        item.addEventListener("click", function() {
          openDinnerMenu(item.id.replace("button__", ""));
        });
      } else if (item.parentElement.classList[0] === "menu__nav") {
        item.addEventListener("click", function() {
          openMenu(item.id.replace("button__", ""));
        });
      }
    }
    function openMenu(menu) {
      const menus = document.querySelectorAll(".menu");
      for (let item of menus) {
        item.classList.add("invisible");
        document
          .querySelector("#button__" + item.id)
          .classList.remove("active__button");
      }
      document.querySelector("#"+menu).classList.remove("invisible");
      document
        .querySelector("#button__" + menu)
        .classList.add("active__button");
    }
    function openDinnerMenu(menu) {
      const sections = document.querySelectorAll(".menu__section");
      for (let item of sections) {
        item.classList.add("invisible");
        document
          .querySelector("#button__" + item.id)
          .classList.remove("active__button");
      }
      document.querySelector("#"+menu).classList.remove("invisible");
      document
        .querySelector("#button__" + menu)
        .classList.add("active__button");
    }
  }
};

//hours & facebook link should be on main page
//make image slideshow fade in
//make nav buttons show pages / remove nav buttons?
//add info on bottom
