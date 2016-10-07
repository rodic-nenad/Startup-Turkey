function openAloTechInfo(){
	document.getElementById("aloTechInfo").style.display = 'block';
}

function openMenu(){
	$(topMenu).addClass("open");
}

function closeMenu(){
	$(topMenu).removeClass("open");
}

$(window).scroll(function() {
	if( $(this).scrollTop() > 10) {
    	$('nav').stop().animate({'marginTop': '-200px'}, 500);
  	} else {
    	$('nav').stop().animate({'marginTop': '0'}, 500);
  	}
});

$("#audioOff").click( function (){
       $("#headerVideo").prop('muted', !$("#headerVideo").prop('muted'));
       $("#audioOff").css("display", "none");
       $("#audioOn").css("display", "block");
   });
$("#audioOn").click( function (){
       $("#headerVideo").prop('muted', !$("#headerVideo").prop('muted'));
       $("#audioOff").css("display", "block");
       $("#audioOn").css("display", "none");
   });

$(document).ready(function() {
	$('.fancybox').fancybox();
	$(".fancyvideo").fancybox({
		'type': 'iframe',
		'transitionIn' : 'elastic',
		'padding' : 0,
		'autoScale' : false,
		'transitionOut' : 'fade',
		'width' : 680,
		'height' : 495
		});
});
