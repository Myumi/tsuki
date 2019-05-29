document.onreadystatechange = function() {
  if (document.readyState == "interactive") {
    //add event listeners

    //put this under a check for page width
    document.getElementById("nav__menu").classList.toggle("invisible");
    console.log(document.getElementById("nav__menu"))
    //display nav menu
    document
      .getElementsByClassName("title__icon")[0]
      .addEventListener("click", function() {
        //display menu or remove menu
        document.getElementById("nav__menu").classList.toggle("invisible");
      });

    //show pages from nav item click
    document.getElementById("nav__menu").getElementsByTagName("li");
    addEventListener("click", showPage);
  }

  function showPage(event) {
    const navItem = event.target.id;
  }
};

//in mobile: info and contact open submenus
//in tablet, desktop: displayed on header
//alert should be red header above nav
