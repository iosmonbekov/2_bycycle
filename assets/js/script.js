//Code for Menu-Burger 
$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

//ibg function Jquery
function ibg(){

$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}

ibg();
// SLider Code 
$(document).ready(function(){
	$('.slider__body').slick({
		dots: true, 
		arrows: false, 
		accessibility: false, 
		slideToShow:1,
		autoplay: true,
		adaptiveHeight: true, 
	});
});