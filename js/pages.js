//finish typing the menus
//get out of jquery
//make desserts one column
$(document).ready(function(){
  // make home seem active & others not
  document.getElementById("home-tab").classList.add("active");
  $(".tab").css("display", "none");
  $("#home").css("display", "");

  //make menus invisible
  $(".menu").css("display", "none");

    //display menus
  $("#dinner button").click(function() {
    $("#dinner button").css("background", "var(--button-color)");
    let button = $(this);
    button.css("background", "var(--hover-color)");
    let menuName = $(this)
      .attr("id")
      .replace(/-btn/g, "");
    $("#dinner .menu-flex").css("display", "none");
    $("#" + menuName).fadeIn(300).css("display", "");
  });

  //set appetizer button as default clicked
  $("#appetizer-btn").click();

    //display pages
  $(".nav li").click(function() {
    let tabName = $(this)
      .attr("id")
      .replace(/-tab/g, "");
    $(".nav li").removeClass("active");
    $(this).addClass("active");
    $(".tab").css("display", "none");
    $("#" + tabName).fadeIn(500).css("display", "");
  });
});
