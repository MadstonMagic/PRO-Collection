$(document).ready( function() {
	
	$(function () {
	    setInterval(function () {
		    $('.star-1').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
	        $('.star-2').fadeOut(300).fadeIn(120).fadeOut(120).delay(1920);
	        $('.star-3').fadeOut(150).delay(1200).fadeIn(300).fadeOut(750).delay(800);
	        $('.star-4').fadeOut(700).fadeIn(300).fadeOut(160).delay(1050);
	        $('.star-5').fadeOut(275).fadeIn(100).fadeOut(250).delay(1350).delay(1000);
	        $('.star-6').fadeOut(450).fadeIn(1400).fadeOut(180).delay(750);
	        $('.star-7').fadeOut(200).fadeIn(700).fadeOut(100).delay(300).delay(600);
	    }, 1);
    });
});