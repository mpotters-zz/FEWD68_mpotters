$(document).ready(function(){

	$('#submitButton').click(function(e){
		e.preventDefault();
		var newToDo = $('#newListInput').val();
		console.log("hay");
		$('#newList').append('<li><input type="checkbox">'+newToDo+'</li>');
		$('#newListInput').val("");
	});

	$('ul').on('click', 'input', function(){
		console.log("boopyu")
		$('ul').children('li').toggleClass('checked');
	});

	$('ul').on('click', '#deleteButton', function(){

		//delete on delete button 
	});





});