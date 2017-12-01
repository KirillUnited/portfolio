function myFunction(myDropdown) {
			var elem = document.getElementById('myDropdown');
			if (elem.style.display === "none") {
				elem.style.display = "block";
			} else {
				elem.style.display = "none";
			}
		}

function myMap() {
var myCenter = new google.maps.LatLng(55.755826, 37.617299900000035);
var mapProp = {center:myCenter, zoom:15, scrollwheel:true, draggable:true, mapTypeId:google.maps.MapTypeId.ROADMAP};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker = new google.maps.Marker({position:myCenter});
marker.setMap(map);
}