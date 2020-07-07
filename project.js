// Making function for overlay
$(document).ready(function () {
	$('.more-button').each(function () {
    $(this).on('click', function () {
      $(this).closest('.card-wrapper').children('.more-overlay').css('display', 'block');
    });
    // Making function for close overlay
    $('.close-overlay').each(function () {
      $(this).on('click', function () {
        $(this).closest('.more-overlay').css('display', 'none');
      });
    });
  });
});
// Making function for pagination
$('.pagination-inner a').on('click', function() {
    $(this).siblings().removeClass('pagination-active');
    $(this).addClass('pagination-active');
})