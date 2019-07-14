 /* Preloader
------------------------------------------------------ */

  $(window).load(function(){

    $('.loader').fadeOut();    
    $('#preloader').delay(350).fadeOut('slow');    
    $('body').delay(350);   

    });


  /* Appear Animation
------------------------------------------------------*/
$(window).scroll(function() {
    // alert($(window).scrollTop());
    // alert($(".strip").offset().top);
  if ($(window).scrollTop() >= 100) {
    $(".strip").addClass("fix-nav");
  } else {
    $(".strip").removeClass("fix-nav");
  }
});

/*----------------------------------------------------*/