$(document).ready(function () {
	$('#more').on('click', function () {
  	$('#more-overlay').css('display', 'block');
  });
  
  $('#close-overlay').on('click', function () {
  	$('#more-overlay').css('display', 'none');
  });
});