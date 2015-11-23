$("document").ready(function(){

	$("#weatherClick").on('click', function(e){
		e.preventDefault();
		//get zip code that is entered
		var zip = $("#weatherZip").val();
		//get API + JSON
		$(".weatherPrint").append('<h2>Weather the weather at ' + zip + ':</h2>');
		
		$.ajax({
			// type: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ', us&APPID=acaffe20d783b47c3157afa2b3f9196a' ,
			dataType: "jsonp",

			success: function(data){
				console.log(data);

				$(".weatherPrint").append('<h3>' + data.weather[0].description + '</h3>');


			

			for (var i = 0; i < data.length; i++) {
         		console.log(data[i]);
     			}

     		}


		});
		

	});


});