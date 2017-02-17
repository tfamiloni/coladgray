
// 
var nav = $(".navigation");

$(window).scroll(function() {
    if (nav.offset().top > 150) {
        nav.addClass("fold");
    } else {
        nav.removeClass("fold");
    }
});



// When page is fukky loaded

$(document).ready(function(){

	$('a[role=tab]').on('click',function(e){

		$('.navigation > .btn-group > .btn').removeClass('in');
		$(this).addClass('in');

		$('html, body').animate({scrollTop: $("body").offset().top}, 1000);

		$.ajaxSetup({
			beforeSend:function(){
				$('#team-ajax, #services-ajax, #products-ajax').html('<br/><h3 class="text-center"><i class="fa fa-inverse fa-hourglass-half fa-spin fa-fw"></i></h3>');
			},
			error:function(){
				$('#team-ajax, #services-ajax, #products-ajax').html('<br/><h5 class="text-center"><i class="fa fa-inverse fa-2x fa-cogs"></i><br><br> Connection Error. Pls check your internet connection</h5>');
			}
		});

		if ($(this).hasClass('ajax-products')) {
            
			$.ajax({
				url : 'products.html',
				success: function(data){
					$('#products-ajax').html(data);
                    $('.ajax-products').addClass('in');
				}
			});
		}

		if ($(this).hasClass('ajax-services')) {
            
			$.ajax({
				url : 'services.html',
				success: function(data){
					$('#services-ajax').html(data);
                    $('.ajax-services').addClass('in');
				}
			});
		}

		if ($(this).hasClass('ajax-team')) {
			$.ajax({
				url : 'team.html',
				success: function(data){
					$('#team-ajax').html(data);
                    $('.ajax-team').addClass('in');
				}
			});
		}
	});


	$('#vid-view').on('click',function(e){
		$('.front-content').toggle(300);
		$(this).html('toggle video');
	});



	$('#menu-trigger , #sidenav a').on('click',function(){
		$('#sidenav').toggle();
		// $('body').css('overflow','hidden');
	});

	// 



});



