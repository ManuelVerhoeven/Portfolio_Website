$(document).ready(function(){

//hamburger menu
$('.mobile-nav-trigger').on('click', function(){
  $(".primary-menu").toggleClass("show");
  $('span.fa',this).toggleClass("fa-bars"). toggleClass('fa-close');
});

//video control to overcome ipad and iphone restrictions
$('#video-bg').click(function(){
  this[this.paused ? 'play' : 'pause']();
});

//modal popup-modal
$(function(){
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: true,
		focus: '#username'
	});

	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

}); //end of document
