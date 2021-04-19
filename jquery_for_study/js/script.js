$(document).ready(function() {
  // Задание 1
  $('.task_1').hide();
  
  // Задание 2 и 4 и 5
  $('.task_2_2').click(function(event) {
    $('.task_2_1').hide();
  });  
  
  // Задание 3
  $('.task_3_2').click(function(event) {
    $('.task_3_1').hide();
  });
  
  $('.task_3_3').click(function(event) {
    $('.task_3_1').show();
  });
  
  // Задание 6
  $('.task_6_1').dblclick(function(event) {
    $(this).hide();
  });
  
  // Задание 7
  $('.task_7_1').mouseenter(function(event) {
    alert('Задание 7');
  });
  
  // Задание 8
  $('.task_8_1').focus(function(event) {
    $(this).css('border', '1px solid black');
  });
  $('.task_8_1').blur(function(event) {
    $(this).css('border', '1px solid red');
  });
  
  // Задание 9
  $('.task_9_1').click(function(event) {
    $(this).hide(1000);
  });
  
  // Задание 9
  $('.task_10_2').click(function(event) {
    $('.task_10_1').toggle(1000);
  });
  
  // Задание 11
  $('.task_11_4').click(function(event) {
    $('.task_11_1').fadeIn();
    $('.task_11_2').fadeIn("slow");
    $('.task_11_3').fadeIn(3000);
  });
  
  // Задание 12
  $('.task_12_4').click(function(event) {
    $('.task_12_1').fadeOut();
    $('.task_12_2').fadeOut("slow");
    $('.task_12_3').fadeOut(3000);
  });
  
  // Задание 13
  $('.task_13_2').click(function(event) {
    $('.task_13_1').slideDown("slow");
  });
  
  // Задание 14
  $('.task_14_2').click(function(event) {
    $('.task_14_1').animate({ left: '250px' });
  });
  
  // Задание 15
  $('.task_15_1').click(function(event) {
    var links = $('li > a');
    for (var i = 0; i < links.length; i++) {
      alert(links[i].href);
    }
  });
  
  // Задание 16
  $('.task_16_1').click(function(event) {
    var links = $('a', 'li');
    for (var i = 0; i < links.length; i++) {
      alert(i + ": " + links[i].href);
    }
  });
  
  // Задание 17
  $('.task_17_1').click(function(event) {
    var links = $('li a');
    
    links.each(function(i, a) {
      alert(i + ": " + a.innerHTML);
      
      if(i == 1) return false;
    });
  });
  
  // Задание 18
  $('.task_18_2').click(function(event) {
    alert("Text: " + $('.task_18_1').text());
  });
  $('.task_18_3').click(function(event) {
    alert("HTML: " + $('.task_18_1').html());
  });
  
  // Задание 19
  $('.task_19_2').click(function(event) {
    alert("Value: " + $('.task_19_1').val());
  });
  
  // Задание 20
  $('.task_20_2').click(function(event) {
    alert("Href value: " + $('.task_20_1').attr("href"));
  });
});