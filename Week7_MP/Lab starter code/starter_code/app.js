//Cheat code via interwebs: 

// var cuisines = ["Chinese","Indian"];     

// var sel = document.getElementById('CuisineList');
// var fragment = document.createDocumentFragment();

// cuisines.forEach(function(cuisine, index) {
//     var opt = document.createElement('option');
//     opt.innerHTML = cuisine;
//     opt.value = cuisine;
//     fragment.appendChild(opt);
// });
// sel.appendChild(fragment);


//pureJS below: 

// var cities	= ['NYC', 'SF', 'Sydney', 'LA', 'Austin'];

// var sel = document.getElementById('city-type');
// var fragment = document.createDocumentFragment();

// cities.forEach(function (cities, index) {
// 	// body...
// 	var opt = document.createElement('option');
// 	opt.innerHTML = cities;
// 	opt.value = cities;
// 	fragment.appendChild(opt);
// });

// sel.appendChild(fragment);

//using jQuery

$(document).ready(function() {

	var cities	= ['NYC', 'SF', 'Sydney', 'LA', 'Austin'];

	//step through each and add to select using $.append

	for (var i = 0; i < cities.length; i++){
		$('#city-type').append('<option>' + cities[i] + '</option>');
	};

	//get value of user input using $.val()

	$('#city-type').on('change', function (){
		var selection = $(this).val();
		if (selection == 'NYC') {
			$('body').attr('class', 'nyc');
		}
		else if (selection == 'SF') {
			$('body').attr('class', 'sf');
		}
		else if (selection == 'Sydney') {
			$('body').attr('class', 'sydney');
		}
		else if (selection == 'LA') {
			$('body').attr('class', 'la');
		}
		else if (selection == 'Austin') {
			$('body').attr('class', 'austin');
		}
		else {
			$('body').css('background', 'url(images/citipix_skyline.jpg)');
		}
	});
});