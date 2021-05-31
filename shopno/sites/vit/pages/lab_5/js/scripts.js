$(document).ready(function () /*Задание 1*/
{
  $("#but1").click(function ()
  {
    $("p").hide();
  });
});
$(document).ready(function () /*Задание 2*/
{
  $("#but2").click(function ()
  {
    $("#test1").hide();
  });
});
$(document).ready(function () /*Задание 3*/
{
  $("#but3").click(function ()
  {
    $("#test2").hide();
  });
  $("#but4").click(function ()
  {
    $("#test2").show();
  });
});
$(document).ready(function () /*Задание 4*/
{
  $("#but5").click(function ()
  {
    $(".test").hide();
  });
});
$(document).ready(function () /*Индив. 1*/
{
  $("#but6").click(function ()
  {
    $('[align="center"]').hide();
  });
  $("#but7").click(function ()
  {
    $('[align="center"]').show();
  });
});
$(document).ready(function () /*Задание 5*/
{
  $(".p1").click(function ()
  {
    $(this).hide();
  });
});
$(document).ready(function () /*Задание 6*/
{
  $(".p2").dblclick(function ()
  {
    $(this).hide();
  });
});
$(document).ready(function () /*Задание 7*/
{
  $("#p1").mouseenter(function ()
  {
    alert("You entered p1");
  });
});
$(document).ready(function () /*Задание 8*/
{
  $(".input1").focus(function ()
  {
    $(this).css("background-color", "#cccfff");
  });
  $(".input1").blur(function ()
  {
    $(this).css("background-color", "#fffccc");
  });
});
$(document).ready(function () /*Задание 9*/
{
  $("#but8").click(function ()
  {
    $(".p3").hide(1000);
  });
});
$(document).ready(function () /*Задание 10*/
{
  $("#but9").click(function ()
  {
    $(".p4").toggle(1000);
  });
});
$(document).ready(function () /*Индив. 2*/
{
  $("input").click(function ()
  {
    $(this).css('background-color', randColor());
  });
});
function randColor()
{
  let rand = () => Math.floor(Math.random() * (255 + 1 - 0) + 0);
  return `rgb(${rand()},${rand()},${rand()})`;
}
$(document).ready(function () /*Задание 11*/
{
  $("#but10").click(function ()
  {
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
});
$(document).ready(function () /*Задание 12*/
{
  $("#but11").click(function ()
  {
    $("#div4").fadeOut();
    $("#div5").fadeOut("slow");
    $("#div6").fadeOut(3000);
  });
});
$(document).ready(function () /*Индив. 3*/
{
  $("#but12").click(function ()
  {
    for (var i = 1; i < 100 ; i++){
      $("#div7").fadeIn(100);
      $("#div8").fadeIn(200);
      $("#div9").fadeIn(300);
      $("#div10").fadeIn(400);
      $("#div11").fadeIn(500);
      $("#div7").fadeOut(500);
      $("#div8").fadeOut(400);
      $("#div9").fadeOut(300);
      $("#div10").fadeOut(200);
      $("#div11").fadeOut(100);
    };
  });
});
$(document).ready(function () /*Задание 13*/
{
  $("#flip").click(function ()
  {
    $("#panel").slideDown("slow");
  });
});
$(document).ready(function () /*Задание 14*/
{
  $("#but13").click(function ()
  {
    for (var i = 1; i < 100 ; i++)
    {
      $("#div12").animate({left: '500px'});
      $("#div12").animate({left: '10px'});
      $("#div12").animate({left: '800px'});
      $("#div12").animate({left: '100px'});
    };
  });
});
$(document).ready(function () /*Задание 15*/
{
  $("#but14").click(function ()
  {
    var links = $('li> a');
    for (var i=0; i<links.length; i++)
    {
      alert(links[i].href);
    }
  });
});
$(document).ready(function () /*Задание 18*/
{
  $("#but15").click(function ()
  {
    alert("Text: "+$("#test4").text());
  });
  $("#but16").click(function ()
  {
    alert("HTML: "+$("#test4").text());
  });
});
$(document).ready(function () /*Задание 19*/
{
  $("#but17").click(function ()
  {
    alert("Value: "+$("#test5").val());
  });
});
$(document).ready(function () /*Задание 20*/
{
  $("#but18").click(function ()
  {
    alert($("#w3s").attr("href"));
  });
});
$(document).ready(function () /*Индив. 4*/
{
  $("#but19").click(function ()
  {
    $("#div13").animate({top: '4880px'});
    $("#div14").animate({top: '4980px'});
    $("#div15").animate({top: '5080px'});
    $("#div16").animate({top: '5180px'});
    $("#div17").animate({top: '5280px'});
    $("#div18").animate({top: '5380px'});

    $("#div13").animate({top: '4980px'},2000);
    $("#div15").animate({top: '5180px'},2000);
    $("#div17").animate({top: '5380px'},2000);
  });
});
