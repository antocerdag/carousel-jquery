$(document).ready(function() {
	$("#flechaizq").click(function(){
		
		$("#cajacarousel ul").prepend($("#cajacarousel ul li:last"));
	});

	$("#flechader").click(function(){

		$("#cajacarousel ul").append($("#cajacarousel ul li:first"));
	})

	
});