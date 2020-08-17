// function changeTextColorOnHover(){
//   document.getElementById("AboutRadon").style.color = "#33db98";
// }
// $("#AboutRadon").changeTextColorOnHover();
$(document).ready(function(){
  $("#AboutRadon").click(function(){
    //document.getElementById("AboutRadon").style.color = "#33db98";
    $("#AboutRadon").css("color", "#1184e8");
    $("#AboutRadonPara").animate({
      height: 'toggle'
    });
  });
  $("#AboutRadon").mouseover(function(){
    $(this).css("color", "#33db98");
    $(this).addClass("hover");
  });
  $("#AboutRadon").mouseout(function(){
    $(this).css("color", "#fff");
    $(this).removeClass("hover");
  });
  $("#AboutRoof").click(function(){
    $("#AboutRoof").css("color", "#1184e8");
    $("#AboutRoofPara").animate({
      height: 'toggle'
    });
  });
  $("#AboutRoof").mouseover(function(){
    $(this).css("color", "#33db98");
    $(this).addClass("hover");
  });
  $("#AboutRoof").mouseout(function(){
    $(this).css("color", "#fff");
    $(this).removeClass("hover");
  });
  $("#AboutThermal").click(function(){
    $("#AboutThermal").css("color", "#1184e8");
    $("#AboutThermalPara").animate({
      height: 'toggle'
    });
  });
  $("#AboutThermal").mouseover(function(){
    $(this).css("color", "#33db98");
    $(this).addClass("hover");
  });
  $("#AboutThermal").mouseout(function(){
    $(this).css("color", "#fff");
    $(this).removeClass("hover");
  });
});
