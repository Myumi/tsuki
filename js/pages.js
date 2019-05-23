document.onreadystatechange = function() {
  if (document.readyState == "interactive") {
    //add event listeners

    //display nav menu
    document
      .getElementsByClassName("title__icon")[0]
      .addEventListener("click", function() {
        //display menu or remove menu
        document.getElementById("nav__menu").classList.toggle("visible");
      });

    //show pages from nav item click
    document.getElementById("nav__menu").getElementsByTagName("li");
    addEventListener("click", showPage);
  }

  function showPage(event) {
    const navItem = event.target.id;
  }
};
