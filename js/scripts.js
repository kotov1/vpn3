
$(function() {

	// Выезжающий блок вверху страницы
	$(document).ready(function(){
		$(".toggle-btn").click(function(){

			if(!($('.toggle-btn').hasClass("on"))){

				$('.toggle-btn').addClass("on");
				$('.page').css({"padding-top": "110px"});
				$(".top-line__content").slideToggle("200");
			} else {
				$('.toggle-btn').removeClass("on");
				$('.page').css({"padding-top": "50px"});
				$(".top-line__content").slideToggle("200");
			}
			
		});
	});



	// Фиксирование состояние рекомендованной карточки тарифного плана
	$(".table-pricing").hover( function(){
		$(".table-pricing").eq(0).removeClass('recomend');	
	});

	$(".table-pricing").mouseleave(function(){
		$(".table-pricing").eq(0).addClass('recomend');
	});

});