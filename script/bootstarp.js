document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('touchstart', function () {});
  var app = new Nlvi(nlviconfig);
  app.bootstarp();
});
$(document).ready(function() {
  $('.container').show();
});
