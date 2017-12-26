$(document).ready(function() {
	$("#carousel").carousel({interval: 7500, pause: false});

	$(".search a").click(
		function() {
			$(".form-control").toggle();
			$(".form-control").css("width", "220px");
			return false;
		}
		);

});
