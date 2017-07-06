$(document).ready(function() {

	//Desplazamiento automatico cada 5seg
	setInterval("$('#flechaizq').click()",5000);
	setInterval("$('#flechader').click()",5000);
	$("#flechaizq").click(function(){
		
		$("#cajacarousel ul").prepend($("#cajacarousel ul li:last"));
	});

	$("#flechader").click(function(){

		$("#cajacarousel ul").append($("#cajacarousel ul li:first"));
	})

	
});