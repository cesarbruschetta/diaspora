// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready( function(){
	
	$('input[type="radio"]').click(function(){
		var soma = 0;
		$('input[type="radio"]').each(function(){
			if ($(this).attr('checked')){
				soma += parseInt($(this).val()); 
			};
		});	
		alert(soma);
	});
});


