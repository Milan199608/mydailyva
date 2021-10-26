/*-----sticky header---*/  
jQuery(window).scroll(function(){
    if (jQuery(window).scrollTop() >= 5) {
        jQuery('header').addClass('sticky-hdr');
        
    }
    else {
        jQuery('header').removeClass('sticky-hdr');
        
    }
});



/*------featured in slider----*/
 $(document).ready(function() {
              $('.featured-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay:true,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 3,
                    nav:false,
                  },
                  600: {
                    items: 4,
                    nav: false
                  },
                  1000: {
                    items: 6,
                    nav:false,
                    loop:true,
                    margin: 20
                  }
                }
              });
			  
			  $('nav#menu').mmenu({
               offCanvas : {
					position : "left", // changing this alters the position of the menu
					zposition : "front"
				}
            });
			  
			  
            })

          $('.studies').owlCarousel({
                items: 1,
                loop:true,
                margin:10,
                nav:false,
                autoplay:true,
                autoplayHoverPause:true,
                dots:false,
                navText: ["<img src='../img/left-arrow.png'>","<img src='../img/right-arrow.png'>"]
            
              })


               $('.studies-two').owlCarousel({
                items: 1,
                loop:true,
                margin:10,
                nav:true,
                dots:false,
                autoplay:true,
                autoplayHoverPause:true,
                navText: ["<img src='../img/left-arrow.png'>","<img src='../img/right-arrow.png'>"]
            
              })
 
/*------ceo-message----*/
 $("#ceo-msg").hover(function() {
      $(".ceo-msg-box").show();

      $(".dir-msg-box").hide();
});

 $("#dir-msg").hover(function() {
      $(".dir-msg-box").show();

      $(".ceo-msg-box").hide();
});


/*------menu----*/

(function($){ //create closure so we can safely use $ as alias for jQuery

      $(document).ready(function(){

        // initialise plugin
        var example = $('#example').superfish({
          //add options here if required
        });

        // buttons to demonstrate Superfish's public methods
        $('.destroy').on('click', function(){
          example.superfish('destroy');
        });

        $('.init').on('click', function(){
          example.superfish();
        });

        $('.open').on('click', function(){
          example.children('li:first').superfish('show');
        });

        $('.close').on('click', function(){
          example.children('li:first').superfish('hide');
        });
      });


    })(jQuery);



    jQuery(document).ready(function(){
    jQuery('ul.sf-menu').superfish({
      pathClass:  'current'
    });
  });



$(".mobile-nav-drop").click(function(){
  $("ul.sf-menu").slideToggle();
});


function send_contactemail(root_url,prefix){
	$('#valerr_'+prefix).hide().html('');
	$('#success_'+prefix).hide().html('');
	$('#loader_'+prefix).show();
	let name_G=$('#name_'+prefix).val();
	let email_G=$('#email_'+prefix).val();
	let txt_website_G=$('#txt_website_'+prefix).val();
	let comments_G=$('#comments_'+prefix).val();
	let err='';
	if(name_G==''){
		err+='Please enter your name<br/>';
	}
	if(email_G==''){
		err+='Please enter your email<br/>';
	}
	if(txt_website_G==''){
		err+='Please enter your website<br/>';
	}
	if(comments_G==''){
		err+='Please enter your comments<br/>';
	}
	
	if(err==''){
	
		$.ajax({
		  type: "POST",
		  url: root_url+"/ajax/quickcontact.php",
		  data: { from:'growbusiness',name:name_G,email:email_G,txt_website:txt_website_G,comments:comments_G}
		}).done(function( data ) {
			 if($.trim(data)!='false')
			 {	$('#loader_'+prefix).hide();
				$('#success_'+prefix).show().html('Request Successfully Sent.Thank You');
				$('#name_'+prefix).val('');
				$('#email_'+prefix).val('');
$('#txt_website_'+prefix).val('');
$('#comments_'+prefix).val('');
			 }
			 else
			 {
				 $('#loader_'+prefix).hide();
				alert("Please try again.");
			 }
		});
	}
	else
	{
		 $('#loader_'+prefix).hide();
		$('#valerr_'+prefix).show().html(err);
	}
}