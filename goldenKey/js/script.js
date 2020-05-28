window.addEventListener('DOMContentLoaded', function () {

  var custom_values = [50, 100, 150, 200, 250, 300];
  var my_from = custom_values.indexOf(50);
  var my_to = custom_values.indexOf(300);

  let rangeFrom = document.querySelector('.form__range__from'),
      rangeTo = document.querySelector('.form__range__to');


  $(".js-range-slider").ionRangeSlider({
       type: "double",
       from: my_from,
       to: my_to,
       grid: true,
       min: 50,
       max: 300,
       values: custom_values,
       step: 2,
       onChange: function (data) {
          rangeFrom.value = data.from_value;
          rangeTo.value = data.to_value;
          console.log(data.from_value);   // FROM index in values array (if used)
          console.log(data.to_value);
      },
   });

});
