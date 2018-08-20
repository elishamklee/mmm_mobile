
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
	/*$('input,select').focusin(function(){
		$(this).parent().addClass('focus');
		$('.btn_search button').css('background','#A20000');
	})
	$('input,select').focusout(function(){
		$(this).parent().removeClass('focus');
		$('.btn_search button').css('background','');
	})*/
	
	/*$('.label').click(function(){
		$(this).addClass('active');
		$(this).parent().addClass('focus');
		$(this).siblings().focus().addClass('focus');
	});*/

	$('input').focusin(function() {
		$(this).parent().addClass('focus');
	});

	/* Swipe */
	$('#emailaddress').focusin(function(){
		$('#swipe_check').removeClass('inactive').addClass('active');
		$('#swipe_check .text').text('Active');
		$('button#CTA_Save').removeClass('bg_gray').addClass('bg_red');
	})
	$('#emailaddress').focusout(function(){
		$('#swipe_check.active').removeClass('active').addClass('inactive');
		$('#swipe_check .text').text('Inactive');
	})

	/* Dashboard */
	$('#CTA_New_Note').click(function(){
		$('#add_new_note.right_slider').addClass('open');
	})


	/* Zoom ID */
	$('#passport').click(function(){
		$('#zoomid_passport.zoom').addClass('open');
		$('#zoomid_passport .modal_bg').addClass('open');
	})
	$('#driver').click(function(){
		$('#zoomid_driver.zoom').addClass('open');
		$('#zoomid_driver .modal_bg').addClass('open');
	})
	$('.close_zoom').click(function(){
		$(this).parent().removeClass('open');
		$(this).sibilings().removeClass('open');
	})
	/* Search */

	$('.search_select').each(function(){
		$(this).click(function(){
			$(this).children().addClass('selected');
			$('.selected .show').css('display','none');
	   		$('.selected .hide').css('display','inline-block');
	   		$(this).siblings().children().removeClass('selected');
	   		$(this).siblings().children().find('.hide').css('display','none');
	   		$(this).siblings().children().find('.show').css('display','inline-block');	
	   		$('.warning_msg').css('display','none');
	   	})
	});
	$('.btn_search button').click(function(){
		if($('.search_select').hasClass('selected')) {
			$('.warning_msg').css('display','none');
		} else {
			$('.warning_msg').css('display','block');
		};
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
		$('#cancel_modal.modal_popup').addClass('open');
		$('#cancel_modal .modal_bg').addClass('open');
	})
	$('#no').click(function(){
		$('#cancel_modal.modal_popup').removeClass('open');
		$('#cancel_modal .modal_bg').removeClass('open');
	})

	/* Set Time */

	$(function() {
    // setTimeout() function will be fired after page is loaded
    // it will wait for 5 sec. and then will fire
    // $("#successMessage").hide() function
	    setTimeout(function() {
	        $("#shortime.modal_popup, #shortime .modal_bg").removeClass('open', {}, 300)
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


	$('.view_note').click(function(){
		$('#view_note_detail.right_slider').addClass('open');
	});

	$('.flag').click(function(){
		$('#view_flag.right_slider').addClass('open');
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



})



	
