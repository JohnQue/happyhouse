(function (window, document) {
  'use strict';

  const $toggles = document.querySelectorAll('.toggle'); // Return NodeList
  const $toggleBtn = document.getElementById('toggle-btn'); // Return Element

  $toggleBtn.addEventListener('click', function () {
    toggleElements();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
      // Off Toggle elements
      offElements();
    }
  });

  function toggleElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle('on');
    });
  }

  function offElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.remove('on');
    });
  }

  $('#login').click(() => {
    $('#id01').css({ display: 'block' });
  });

  $('#cancel').click(() => {
    $('#id01').css({ display: 'none' });
  });
})(window, document);
