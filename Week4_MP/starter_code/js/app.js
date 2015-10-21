//waits for DOM to load
$(document).ready(function(){
	
	//var city = $('#city-type').val();
	//prevents submit from reloading page
	$('#submit-btn').click(function(city){
    event.preventDefault();
		//Set var city get input
		var city = $('#city-type').val();
		//This code clears the input but not sure exactly how/why...
		$('#city-type').val(''); 
		//lowercase so code recognizes it & gets rid of any spaces user inputs
		city = city.toLowerCase().trim();
		//replace image with new york
		if (city == 'new york' || city == 'nyc' || city == 'new york city') {
			$('body').attr('class', 'nyc');
		};
		//replace image with la
		if (city == 'la' || city == 'los angeles' || city == 'new york city sucks') {
			$('body').attr('class', 'la');
		};
		//replace image with hipster
		if (city == 'hipster' || city == 'womp') {
			$('body').attr('class', 'hipster')
		};
		if (city == 'san francisco' || city == 'sf' || city == 'sfo') {
			$('body').attr('class', 'sf')
		};
		if (city == 'austin' || city == 'atx') {
			$('body').attr('class', 'austin')
		};
		if (city == 'sydney' || city == 'syd') {
			$('body').attr('class', 'sydney')
		};
  });
});