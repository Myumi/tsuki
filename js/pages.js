//clean up the menus
//finish typing the menus
//have address open up gogle maps
//set active menu based on time
//put hours under order online button
//get out of jquery
$(document).ready(function(){
  document.getElementById("menu-tab").addEventListener("click", function(){
    let d = new Date()
    if(d.getDay() == 0 || d.getHours() < 14){
      document.getElementById("lunch-btn").click()
    }
    else{
      document.getElementById("dinner-btn").click()
    }
  });
  // make home seem active & others not
  $("#home-tab").css("text-decoration", "underline");
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
    $(".nav li").css("text-decoration", "");
    $(this).css("text-decoration", "underline");
    $(".tab").css("display", "none");
    $("#" + tabName).fadeIn(500).css("display", "");
  });
});
