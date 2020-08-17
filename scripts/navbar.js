$(document).ready(function(){
  $("#HomeLink").click(function(){
    $("#HomeLink").css("color", "#1184e8");
  });
  $("#HomeLink").mouseover(function(){
    $(this).css("color", "#33db98");
    $(this).addClass("hover");
  });
  $("#HomeLink").mouseout(function(){
    $(this).css("color", "#fff");
    $(this).removeClass("hover");
  });
  $("#ServicesLink").click(function(){
    $("#ServicesLink").css("color", "#1184e8");
  });
  $("#ServicesLink").mouseover(function(){
    $(this).css("color", "#33db98");
    $(this).addClass("hover");
  });
  $("#ServicesLink").mouseout(function(){
    $(this).css("color", "#fff");
    $(this).removeClass("hover");
  });
  $("#AboutLink").click(function(){
    $("#AboutLink").css("color", "#1184e8");
  });
  $("#AboutLink").mouseover(function(){
    $(this).css("color", "#33db98");
    $(this).addClass("hover");
  });
  $("#AboutLink").mouseout(function(){
    $(this).css("color", "#fff");
    $(this).removeClass("hover");
  });
});
