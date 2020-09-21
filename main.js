(function (window, document) {
  'use strict';
  $('#login').click(() => {
    $('#id01').css({ display: 'block' });
  });

  $('#cancel').click(() => {
    $('#id01').css({ display: 'none' });
  });

  $('#signup_cancel').click(() => {
    $(location).attr('href', '/index.html');
  });
})(window, document);
