// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready( function(){
	
	$('input[type="radio"]').click(function(){
		var cont = 0, 
			soma_E = 0,
			soma_A = 0,
			soma_C = 0,
			soma_N = 0,
			soma_I = 0,
			min = 0,
			max = 0,
			result='',
			result_max='',
			html = '';
		
		$('input.E[type="radio"]').each(function(){
			if ($(this).attr('checked')){
				soma_E += parseInt($(this).val());
				cont += 1; 
			};
		});	
		$('input.A[type="radio"]').each(function(){
			if ($(this).attr('checked')){
				soma_A += parseInt($(this).val());
				cont += 1; 
			};
		});
		$('input.C[type="radio"]').each(function(){
			if ($(this).attr('checked')){
				soma_C += parseInt($(this).val()); 
				cont += 1;
			};
		});
		$('input.N[type="radio"]').each(function(){
			if ($(this).attr('checked')){
				soma_N += parseInt($(this).val());
				cont += 1; 
			};
		});
		$('input.I[type="radio"]').each(function(){
			if ($(this).attr('checked')){
				soma_I += parseInt($(this).val());
				cont += 1; 
			};
		});
		
		min = Math.min(soma_E,soma_A,soma_C,soma_N,soma_I);
		max = Math.max(soma_E,soma_A,soma_C,soma_N,soma_I);
		
		//MINIMO
		if (min==soma_E){
			result = '#Extroversão ';
		}
		else if(min==soma_A){
			result = '#Afabilidade ';
		}
		else if(min==soma_C){
			result = '#Consciência ';
		}
		else if(min==soma_N){
			result = '#Neuroticismo ';
		}
		else if(min==soma_I){
			result = '#Intelecto / Imaginação ';
		};
		
		//MAXIMO
		if (max==soma_E){
			result_max = '#Extroversão ';
		}
		else if(max==soma_A){
			result_max = '#Afabilidade ';
		}
		else if(max==soma_C){
			result_max = '#Consciência ';
		}
		else if(max==soma_N){
			result_max = '#Neuroticismo ';
		}
		else if(max==soma_I){
			result_max = '#Intelecto / Imaginação ';
		};
		
		html +='<li id="as-selection-1" class="as-selection-item blur"><a class="as-close">×</a>'+result +'</li>'
		html +='<li id="as-selection-2" class="as-selection-item blur"><a class="as-close">×</a>'+result_max +'</li>'
		html +='<li id="as-original-tags" class="as-original"><input type="text" name="follow_tags" id="tags" class="nostrap as-input" autocomplete="off" style="direction: ltr;">'
		html +='<input type="hidden" id="as-values-tags" name="tags" class="as-values" value="'+result+','+result_max +',"></li>'
		
		$('ul#as-selections-tags').html(html);
		
		if (cont == 20){
			$('#awesome_button').removeClass('no_display');
		}
		
		
	});
});