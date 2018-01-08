$(document).ready(function(){
	var title;
	//========================navigate smoothly============
	$("a").click(function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
	   
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		} // End if
  });
	
	
	
	
	$(".panel").hide();
	
	
	$(".flip").click(function(){	
		
		 // hide all other panel other than this panel
		var $thisPanel = $(this).find('.panel');
		$(".panel").not($thisPanel).hide();
		
		// show all other dots other than this dot.
		var $thisDot = $(this).find('.dot_hide');
		$(".dot_hide").not($thisDot).show();
		
		//toggle the dots and panel
		$thisPanel.slideToggle();
		$thisDot.slideToggle();
		 
		
	
	});
	/*==============add botton=============*/
	//top btn
  $(window).scroll(function(){
	  
	  if
		  ($(this).scrollTop()>400){
			  $("#top_btn").fadeIn();
			  
		  }
		else{
			$("#top_btn").fadeOut();
			
		}
	  
	  
	  
	  
  });
	$("#top_btn").click(function(){
		$("body,html").animate({scrollTop:0},1000);
	});
	
	// Register to save the seat
	$(document).on("click",".watch_now",function(){
		$('#register').modal('show');
		$("#form_save_seat")[0].reset();
		title = $(this).data("title");

	});

    $("#form_save_seat").submit(function(e) {
            e.preventDefault();
            
            $.ajax({ 
                url: "https://www.happidoc.com/happigastro_ajax/docdata",
                crossDomain: true,
                type: "POST",
                data: {
                        name : $("#register .u_name").val(),
                        speciality: $("#register .u_speciality").val(),
                        city: $("#register .u_city").val(),
                        email: $("#register .u_mail").val(),
                        title: title
                },
                dataType: "text",
                success: function(data) {
                        if(data){
                                alert('Thank you for registering for the HappiGastro Webinar. You will receive an email event invite to confirm your registration.');
                        } else {
                                alert('Email Id exists. Thank you');
                        }
                }		
		});
    });
});