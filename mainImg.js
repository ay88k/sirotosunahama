// JavaScript Document
$('#wagon').delay(10).animate({
  'margin-top': '600px'
}, 'normal', function () {
  $('#goza').delay(5).animate({
    'margin-top': '1000px'
  }, 'normal', function () {
    $('#shower').delay(5).animate({
      'margin-top': '800px'
    }, 'normal', function () {
      $('#shiro').delay(5).animate({
        'margin-top': '1000px'
      }, 'normal', function () {});
    });
  });
});
