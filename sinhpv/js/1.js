$(function () {

	$('.content-item').slideUp();
	$('.shop-product__box h3').click(function(event){
		$(this).next('.content-item').slideToggle();
		$(this).toggleClass('doimau');
	});

	$('.khoicheckbox').slideUp();
	$('.loc h3').click(function(event){
		$(this).next('.khoicheckbox').slideToggle();
		$(this).toggleClass('doimau');
	});


































	//loc bang isotop
	//code cho phần nút
	$('.shop-product__all').click(function(event){
		var danhmuc = $(this).data('fish');
		$('.shop-product__title').text('Tất cả');
		$('.shop-product__box-product').isotope({filter:'*'});
	});

	$('.content-item ul li a').click(function(event){
		var danhmuc = $(this).data('fish');
		var ten =$(this).text();
		console.log(danhmuc);
		//dat ten vao trong h2
		danhmuc = '.'+danhmuc;
			$('.shop-product__title').text(ten);
 			$('.shop-product__box-product').isotope({filter:danhmuc});
		return false;
	});

	$(window).scroll(function(event){
	var vitri=$('html, body').scrollTop();
	if(vitri>=41){
		$('.box-menu').addClass('menufixtop');
	}else{
		$('.box-menu').removeClass('menufixtop');
	}
	  });
	//

	$('.backtotop').click(function (event) {
	$('html,body').animate({
            scrollTop: 0
        }, 500);
	});
});