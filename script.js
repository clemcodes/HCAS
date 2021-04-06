
// Menu
$(document).ready(function(){
  $('.header__menu').on('click', function(){
    $('.header__menu').toggleClass('active');
    $('.mobile-nav').toggleClass('active');
  })
});


// Carousel
$(document).ready(function(){

  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n)
  }

  $('.next').on('click', function() {
    plusSlides(1);
  })
  $('.prev').on('click', function() {
    plusSlides(-1);
  })

  function showSlides (n) {
    const slides = $('.carousel__slides');

    if(n > slides.length) slideIndex = 1;
    if(n < 1) slideIndex = slides.length;

    slides.css('display','none');
    slides.eq(slideIndex - 1).css('display','block');
  }

  setInterval(function() {
    plusSlides(1);
  }, 4000);

});

// Back to top 
$(document).ready(function(){
  $(window).on('scroll', function(){
    if(window.pageYOffset > 600) {
      $('.button-to-top').css('display','block');
    } else {
      $('.button-to-top').css('display','none');
    }
  });

  $('.button-to-top').on('click', function(){
    window.scrollTo ({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
});

