$(document).ready(function() {
  // make home seem active & others not
  document.getElementById("home-tab").classList.add("active");
  $(".tab").css("display", "none");
  $("#home").css("display", "");

  //make menus invisible
  $(".menu").css("display", "none");

  //display menus for dinner
  $("#dinner button").click(function() {
    $("#dinner button").css("background", "var(--button-color)");
    let button = $(this);
    button.css("background", "var(--hover-color)");
    let menuName = $(this)
      .attr("id")
      .replace(/-btn/g, "");
    $("#dinner .menu").css("display", "none");
    $("#" + menuName)
      .fadeIn(300)
      .css("display", "");
  });

  //set appetizer button as default clicked
  $("#appetizer-btn").click();

  //display pages
  $(".nav li").click(function() {
    tabShow($(this));
  });

  $("#nav-icon").click(function() {
    if ($(".header ul").hasClass("nav")) {
      $(".header ul").removeClass("nav");
      $(".header ul").addClass("dropdown");
    }
    $(".dropdown").css("display") === "none"
      ? $(".dropdown").css("display", "inline-grid")
      : $(".dropdown").css("display", "none");
  });

  //display pages mobile
  $(".dropdown li").click(function() {
    tabShow($(this));
    $(".dropdown").css("display", "none");
  });

  function tabShow(tab) {
    let tabName = tab.attr("id").replace(/-tab/g, "");
    $(".nav li").removeClass("active");
    $(".dropdown li").removeClass("active");
    tab.addClass("active");
    $(".tab").css("display", "none");
    $("#" + tabName)
      .fadeIn(500)
      .css("display", "");
    $(".dropdown").css("display", "none");
  }
});
