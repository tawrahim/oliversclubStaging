// JavaScript Document

$( function()
{
	
		var windowWidth = $(window).width();

		$(window).resize(function() {
			if(windowWidth != $(window).width()){
			location.reload();
			return;
			}
		});
		/*============= Handling scripts small screens =============
		============================================================*/	
		if($(window).width() <= 979){		
			// Remove sidenav - append it into header		
			var $sideNav = $(".sidenav-wrap");
			var $ddlNav = $(".nav");
			var $navDetach = $($sideNav,$ddlNav).detach();
			$sideNav.appendTo(".header-wrap").wrap( "<div id='main-nav'></div>" );
			$ddlNav.appendTo(".header-wrap").wrap( "<div id='user-nav'></div>" );
		}
		
		// Add class to menu item on click
		$(".sidenav li").click(function(e) {	
			if( $(this).hasClass("current") ) {
				$(this).removeClass("current");
			} else {
				// if other menus are open remove open class and add closed
				$(this).siblings().removeClass("current"); 
				$(this).addClass("current");
			}	
		});
		/*============= NAVICON  =============
		===========================================*/	
		// build a variable to target the #menu div
			var mainNav = $('#main-nav');
			var userNav = $('#user-nav');
			var navClose = $('#main-nav, #user-nav');
			// bind a click function to the menu-trigger
			if (navClose.is(":visible"))
			{
				navClose.addClass('closed');
			}			
			$('.navicon').click(function(event){
				event.preventDefault();			
				// if the menu is visible slide it up
				if (mainNav.is(":visible"))
				{
					mainNav.slideUp(400);
					$(this).removeClass("open");
				}			
				// otherwise, slide the menu down
				else
				{
					mainNav.slideDown(400);
					$(this).addClass("open");
				}
			});
			$('.nav-user-icon').click(function(event){
				event.preventDefault();			
				// if the menu is visible slide it up
				if (userNav.is(":visible"))
				{
					userNav.slideUp(400);
					$(this).removeClass("open");
				}			
				// otherwise, slide the menu down
				else
				{
					userNav.slideDown(400);
					$(this).addClass("open");
				}
			});
		
		/* Appned aside nav to header nav */
		if($(window).width() <= 979){
		
		}	
		
	// Alerts
	var $alertBox = $("div.alert");
	$alertBox.on("click", function(){
		$(this).fadeOut("slow");
	});
	
	/*============= BX slider  =============
	===========================================*/				
	$('.bxslider').bxSlider({
		mode: 'fade',
		auto: 'true',
		pause: '4000',
		autoHover: 'true'
	});	
	/*============= Responsive tabs  =============
	===========================================*/		
	$('#responsiveTabs').responsiveTabs({
		startCollapsed: 'tabs',
		animation: 'slide'
	});		
	/*============= Handling scripts for big scirpt =============
	============================================================*/	
	if($(window).width() >= 1200){
		// Affixed sidenav
		var summaries = $('.affixed-box, .affixed-sidenav');
		summaries.each(function(i) {
			var summary = $(summaries[i]);
			var next = summaries[i + 1];
	
			summary.scrollToFixed({
				marginTop: $('.header').outerHeight(true) - 30,
				limit: function() {
					var limit = 0;
					if (next) {
						limit = $(next).offset().top - $(this).outerHeight(true) - 30;
					} else {
						limit = $('.footer, .footer-join').offset().top - $(this).outerHeight(true) - 30;
					}
					return limit;
				},
				zIndex: 999
			});
		});
	}		
	/* OWL carousell */ 
	 $("#owl-brands, #owl-auctions, #owl-stores, #owl-related").owlCarousel({
		autoPlay: false,  
		items : 5,
		stopOnHover: true,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [979,3]	,
		itemsDesktopSmall: [979,3] ,
		itemsTablet: [768,2],
		itemsMobile: [479,1]			
	}); 
	/* Magnific Popup*/ 
	$('.detail-image').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});	
	// Ellipsis
	var $shorten = $(".shorten");
	$shorten.dotdotdot();
	
	// Settings
	var $inputHide = $('.textbox.t-textbox');
	var $labelHide = $('.t-label');
	var $userEdit = $('.user-edit');
	
	$inputHide.css("display","none"); 
	$userEdit.on( "click", function() {
		$(this).parent().prev().find($labelHide).css("display" , "none");
		$(this).parent().prev().find($inputHide).css("display" , "block");
	});
	
	// Show more/less
    $('#more-toggle').hideMaxListItems({
        'max':6,
        'speed':300,
    	'moreText':'Show more specs',
		'lessText':'Shdw less specs',
        'moreHTML': '<p class="maxlist-more"><span class="fa fa-plus red"></span>  <a href="#">Show more specs <span class="fa fa-plus"></span></a></p>'
    });	
	// Upload form append
	var $selectTriger = $(".select-branch option");
	var $selectShow = $(".select-category");
	var $selectShowItem = $(".select-category option");
	var $uploadForm = $(".upload-form");
	var $hideForm = $(".select-category, .upload-form");
	
	$hideForm.css("display" , "none");
	$selectTriger.click(function(){
		$selectShow.slideDown();
	});
	$selectShowItem.click(function(){
		$uploadForm.slideDown();
	});
	
	// Tooltips 
	$('.masterTooltip').hover(function(){
		// Hover over code
		var title = $(this).attr('title');
		$(this).data('tipText', title).removeAttr('title');
		$('<p class="tooltip"></p>')
		.text(title)
		.appendTo('body')
		.fadeIn('slow');
		}, function() {
		// Hover out code
		$(this).attr('title', $(this).data('tipText'));
		$('.tooltip').remove();
		}).mousemove(function(e) {
		var mousex = e.pageX + 20; //Get X coordinates
		var mousey = e.pageY + 10; //Get Y coordinates
		$('.tooltip')
		.css({ top: mousey, left: mousex })
	});
	<!-- jQuery validation plugin -->
	$("#form").validate({
		rules: {
			productbrand: {
				selectcheck: true
			},
			storename: {
				selectcheck: true
			},
			name: {
				required: true
			},					
			email: {
				required: true,
				email: true	
			},
			message: {
				required: true
			},
			phone: {
				required: true,
				phoneUS: true
			},			
			firstname: {
				required: true
			},					
			lastname: {
				required: true
			},																														
			password: {
				required: true,
				minlength: 5
			},
			passwordconfirm: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},
			companyname: {
				required: true
			},	
			productname: {
				required: true
			},					
			street: {
				required: true
			},
			city: {
				required: true
			},		
			zip: {
				required: true
			},
			country: {
				selectcheck: true
			},
			purchasedby: {
				required: true
			},
			color: {
				required: true
			},	
			size: {
				required: true
			},	
			quantity: {
				required: true
			}							
		},
		messages: {
			name: {
				required: "Enter name",
			},					
			email: {
				required: "Enter email",
				email: "Wrong email format"	
			},
			phone: {
				required: "Enter phone",
			},				
			message: {
				required: "Enter message"
			},
			productname: {
				required: "Required"
			},
			purchasedby: {
				required: "Required"
			},
			color: {
				required: "Required"
			},	
			size: {
				required: "Required"
			},	
			quantity: {
				required: "Required"
			},	
			productname: {
				required: "Required"
			},				
			firstname: {
				required: "Enter first name",
			},
			lastname: {
				required: "Enter lastname",
			},		
			password: {
				required: "Please provide a password",
				minlength: "Minimum of 5 characters required"
			},
			passwordconfirm: {
				required: "Please provide a password",
				minlength: "Minimum of 5 characters required",
				equalTo: "Please re-enter the same password"
			},
			companyname: {
				required: "Enter company name",
			},
			street: {
				required: "Enter street",
			},	
			city: {
				required: "Enter city",
			},		
			zip: {
				required: "Enter zip",
			},
			country: {
				required: "Choose country",
			}					
		}	
	});	
	
	jQuery.validator.addMethod('selectcheck', function (value) {
        return (value != '0');
    }, "Select option");     
		    
});
	

 
