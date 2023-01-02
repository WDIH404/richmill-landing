var scrolled = false;
$(window).scroll(function () {
  if (!scrolled) {
    var st = $(this).scrollTop();
    if (st >= 100 && st <= 1100) {
      scrolled = true;
      $(function () {
        $({ numberValue: 0 }).animate(
          { numberValue: 57 },
          {
            duration: 1000,
            easing: 'linear',

            step: function (val) {
              $('#counter_item1').html(Math.ceil(val));
            },
          },
        );
      });

      $(function () {
        $({ numberValue: 0 }).animate(
          { numberValue: 19135 },
          {
            duration: 2000,
            easing: 'linear',

            step: function (val) {
              $('#counter_item2').html(Math.ceil(val));
            },
          },
        );
      });

      $(function () {
        $({ numberValue: 0 }).animate(
          { numberValue: 3395144 },
          {
            duration: 3000,
            easing: 'linear',

            step: function (val) {
              $('#counter_item3').html(Math.ceil(val));
            },
          },
        );
      });
    }
  }
});
console.log('Script ready')