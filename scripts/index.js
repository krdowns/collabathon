$(document).ready(function() {
	$("body").on('click', '.top', function() {
		$("nav.menu").toggleClass("menu-show");
	});

	$("body").on('click', '.close-menu-container', function() {
		$("nav.menu").toggleClass("menu-show");
	});

	$("nav").find("a").click(function(e) {
		e.preventDefault();
		var section = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(section).offset().top
		});
		$("nav.menu").toggleClass("menu-show");
	});
	// 	$('#myModal').on('shown.bs.modal', function () {
	// 	$('#myInput').trigger('focus')
	// })
});
