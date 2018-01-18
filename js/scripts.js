
$(function() {

	// Выезжающий блок вверху страницы
	$(document).ready(function(){
		$(".toggle-btn").click(function(){
			$('.toggle-btn').toggleClass("on");
			$(".top-line__content").slideToggle("200");
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