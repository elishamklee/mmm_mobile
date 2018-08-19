
$(function(){

	/* Calendar */
	$('#icon_calendar').click(function(){
		$('.calendar').addClass('open');
	});

	$('.icon_close').click(function(){
		$('.calendar').removeClass('open');
	});

	/* Marketing Question */
	$('#marketing').click(function(){
		$('.dropdown').addClass('open');
	});

	$('.icon_close, .dropdown li').click(function(){
		$('.dropdown').removeClass('open');
		$('.answer').css('display','block');
	});

	$('.clear_content').click(function(){
		$('.answer').css('display','none');
	})


	/* Group Type */
	$('.employee_id input:checkbox').click(function(){
		$('.employee_id .hide').slideToggle();
	})

	$('.veteran_id input:checkbox').click(function(){
		$('.veteran_id .hide').slideToggle();
	})

	/* Mobile Left Menu */
	$('.icon_menu').click(function(){
		$('.left_slider').addClass('open');
		$('.modal_bg').addClass('open');
		$('.left_slider_close').addClass('open');
	});

	$('.left_slider_close, .modal_bg').click(function(){
		$('.left_slider').removeClass('open');
		$('.modal_bg').removeClass('open');
		$('.left_slider_close').removeClass('open');
	});

	$('.left_slider .expand_p').each(function () {
	    $(this).click(function () {
	        $(this).toggleClass('active');
	        $(this).find('.expand_c').toggleClass('open');
	    });
	});

	/* Right Slider */
	$('.icon_search').click(function(){
		$('#search.right_slider').addClass('open');
	});
	$('.right_slider_close').click(function(){
		$('.right_slider').removeClass('open');
	});
	

	/* Input Select Highligher */
	$('input,select').focusin(function(){
		$(this).parent().addClass('focus');
		$('.btn_search button').css('background','#A20000');
	})
	$('input,select').focusout(function(){
		$(this).parent().removeClass('focus');
		$('.btn_search button').css('background','');
	})
	

	/* Swipe */
	$('#emailaddress').focusin(function(){
		$('#swipe_check').removeClass('inactive').addClass('active');
		$('#swipe_check .text').text('Active');
	})
	$('#emailaddress').focusout(function(){
		$('#swipe_check.active').removeClass('active').addClass('inactive');
		$('#swipe_check .text').text('Inactive');
	})

	/* Search */
	$('.search_category').each(function () {
	    $(this).click(function () {
	        $(this).addClass('active');
	        /*$('.default').css('display','none');
	        $('.select').css('display','inline-block');*/
	    });
	});

	/* Account Type */
	$('#medical input:radio').click(function(){
		$(this).parent().siblings().slideToggle();
		$('#caregiver .doclist').css('display','none');
		$('#caregiver input:radio').prop('checked', false);
	});
	$('#caregiver input:radio').click(function(){
		$(this).parent().siblings().slideToggle();
		$('#medical .doclist').css('display','none');
		$('#medical input:radio').prop('checked', false);
	});
	$('.doclist input:checkbox').click(function(){
		$('#CTA_Next').addClass('hide');
		$('#CTA_Scan').removeClass('hide');
	})
	
	/* Cancel Modal */
	$('#CTA_Cancel').click(function(){
		$('.modal_bg').addClass('open');
		$('.modal_popup').addClass('open');
	})
	$('#no').click(function(){
		$('.modal_bg').removeClass('open');
		$('.modal_popup').removeClass('open');
	})

	/* Set Time */

	$(function() {
    // setTimeout() function will be fired after page is loaded
    // it will wait for 5 sec. and then will fire
    // $("#successMessage").hide() function
	    setTimeout(function() {
	        $(".modal_popup, .modal_bg").removeClass('open', {}, 300)
	    }, 3000);
	});

	/* POS */
	$('#view_orderhistory').click(function(){
		$('#order_history.right_slider').addClass('open');
	});
	$('.view_detail').click(function(){
		$('#order_detail.right_slider').addClass('open');
	});

	$('.right_slider .gotoback').click(function(){
		$('#order_detail.right_slider').removeClass('open');
	})





	/* Broswer Full Size */
	//
	// A helper function to toggle a help tip
	// about how to hide Safari address bar when it's visible
	// Monitors only landscape mode and works on Safari on iOS 8+
	//
	var attachMobileSafariAddressBarHelpTip = function (target) {
	    var $target = $(target);
	    $target.tooltip({
	        title: 'Scroll up to hide Safari address bar',
	        trigger: 'manual',
	        placement: 'bottom'
	    });
	    $(window).on('resize', function () {
	        var bodyHeight = document.body.offsetHeight;
	        var windowHeight = window.innerHeight;
	        var isLandscape = Math.abs(window.orientation) === 90;
	        var showTooltip = (windowHeight < bodyHeight);
	        if(!isLandscape) return;
	        $target.tooltip(showTooltip ? 'show' : 'hide');
	    });
	}
	var ua = window.navigator.userAgent;
	if(ua.indexOf('iPhone') !== -1 && ua.indexOf('Safari') !== -1) {
	    attachMobileSafariAddressBarHelpTip('#main-nav');
	}

/* Forever */
	/* Mobile Slide Menu */
	$(".icon_menu").on("click",function() {
		$("body, .c_container, .mobile_overlay, .l_container, .signup_wrapper").addClass("open");
	});
	$(".mobile_overlay").on("click",function() {
		$("body, .c_container, .mobile_overlay, .l_container, .signup_wrapper").removeClass("open");
	});

	/* Quick View Slide*/
	$(".qv a, .mybag div a, #want a").on("click",function() {
		$("body, .r_container, .desktop_overlay").addClass("open");
	});
	$(".r_container .icon_close, .desktop_overlay").on("click",function() {
		$("body, .r_container, .desktop_overlay").removeClass("open");
	});

	/* Mobile Search Box */
	$(".m_header .nav_secondary .icon_search").on("click",function(){
		$(".m_search_container").slideToggle();
	});
	$(".m_search_container .icon_close").on("click",function(){
   		$(".m_search_container").slideToggle();
   	});
	

	/* Desktop Search Box */
	$(".show_desktop .icon_search").click(function(){
   		$(".d_search_container").animate({width: 'toggle'});
   	});
   	$(".d_search_container .icon_close").click(function(){
   		$(".d_search_container").animate({width: 'toggle'});
   	});
	
	/* Scroll */
	$(window).scroll(function () {
	    if ($(this).scrollTop() > 100) {
	        $('.scrollToTop').fadeIn();
	    } else {
	        $('.scrollToTop').fadeOut("fast");
	    }
	});
	$('.scrollToTop').click(function () {
	    $('html, body').animate({
	        scrollTop: 0
	    }, 200);
	    return false;
	});

	

	/* Dropdown */
	$('.drop_p').each(function () {
	    $(this).click(function () {
	        $(this).find('.drop_c').toggleClass('open');
	    });
	});

	/* Checkout Slide */
	$('.checkout .expand_p').each(function () {
	    $(this).click(function () {
	        $(this).toggleClass('active');
	        $(this).next().toggleClass('open');
	    });
	});

	/* Checkout Input*/
	$('.input_label').each(function () {
		$(this).click(function (){
			$(this).addClass('focus');
		});
	});

	$('.tab_title').each(function () {
	    $(this).click(function () {
	        $(this).find('.tab_content').slideToggle();
	    });
	});

	/* Mobile Dropmenu */
	if (window.devicePixelRatio > 1 ) {
	  $('h1').click(function(){
			$('.nav_c').slideToggle();
			$('.side_left_menu').slideToggle();
		})
	}

	/* Filter Dropdown */
	$('.m_filer').click(function(){
		$('.side_menu').slideToggle();
	});

	/* 500 Under */
	$('.want_free').click(function(){
		$('#want').slideToggle();
	});


})



	
