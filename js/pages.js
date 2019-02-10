//make footer sit at the bottom of the page
//clean up the menus
//finish typing the menus
$(document).ready(function(){

  // make about seem active & others not
  $("#about-tab").css("text-decoration", "underline");
  $(".tab").css("display", "none");
  $("#about").css("display", "");

    //display menus
  $("#menu button").click(function() {
    $("#menu button").css("background", "var(--button-color)");
    let button = $(this);
    button.css("background", "var(--hover-color)");
    let menuName = $(this)
      .attr("id")
      .replace(/-btn/g, "");
    $(".menu").css("display", "none");
    $("#" + menuName).fadeIn(300).css("display", "");
  });

    //display pages
  $(".nav li").click(function() {
    let tabName = $(this)
      .attr("id")
      .replace(/-tab/g, "");
    $(".nav li").css("text-decoration", "");
    $(this).css("text-decoration", "underline");
    $(".tab").css("display", "none");
    $("#" + tabName).fadeIn(500).css("display", "");
  });
});
