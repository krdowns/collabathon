$(document).ready(function() {
	console.log("App.js running")
	$("body").on('click', '.top', function() {
		$("nav.menu").toggleClass("menu-show");
	});

	// $('#myModal').on('shown.bs.modal', function () {
	// 	$('#myInput').trigger('focus')
	// })
});