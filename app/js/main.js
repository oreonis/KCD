$(function () {

  $('.catalog-content__filter-btn').on('click', function () {
    $('.catalog-content__filter-btn').removeClass('.catalog-content__filter-btn--active');
    $(this).addClass('.catalog-content__filter-btn--active'); 
  });
  $('button-list').on('click', function () {
    $('carusel__item').addClass('carusel__item--list');
  });
  $('button-grid').on('click', function () {
    $('carusel__item').removeClass('carusel__item--list');
  });

  $('.select-style').styler();
  $('.filter-price__input').ionRangeSlider({
     type: "double",
    prefix: "$",
    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.carousel__inner').slick({
     arrows: false,
     dots: true,
     speed: 2000,
     slidesToShow: 3,
     slidesToScroll: 3,
     autoplay: true,
     autoplaySpeed: 3000,
     pauseOnHover: true
  });
});