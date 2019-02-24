//clean up the menus
//finish typing the menus
//get out of jquery
//fix tab padding on right side of header
//figure something out for the P on the lunch menu
//fix image streching for banners and main page
//figure something out for hours
$(document).ready(function(){
  // make home seem active & others not
  $("#home-tab").addClass("active");
  $(".tab").css("display", "none");
  $("#home").css("display", "");

  //make menus invisible
  $(".menu").css("display", "none");


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
    $(".nav li").removeClass("active");
    $(this).addClass("active");
    $(".tab").css("display", "none");
    $("#" + tabName).fadeIn(500).css("display", "");
    console.log(tabName)
  });
});
