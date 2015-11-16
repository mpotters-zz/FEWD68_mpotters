// Put all your lovely jQuery / Javascript goodies right down here.
$(document).ready(function(){

	// $('#blogLink').on('click', function (e) {
	// 	// e.preventDefault();
	//  	$('#blog').slideDown("slow");
	// })	
	
	// $('a[href^="#"]').on('click', function(event) {
	// 	event.preventDefault();
	// 	$('html, body')


	// })



$('a.anchorLink[href^="#"]').on('click', function(event) {

    var target =  $(this).attr('href') ;
    console.log(target);
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    }

});

	



});