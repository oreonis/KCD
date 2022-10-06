$(function () {

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });
  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4 ,
    slidesToScroll: 1,
    draggable: false
  });
  


  $('.catalog-content__filter-btn').on('click', function () {
    $('.catalog-content__filter-btn').removeClass('catalog-content__filter-btn--active');
    $(this).addClass('catalog-content__filter-btn--active'); 
  });
  $('.button-list').on('click', function () {
    $('.catalog-content__item').addClass('catalog-content__item--list');
  });
  $('.button-grid').on('click', function () {
    $('.catalog-content__item').removeClass('catalog-content__item--list');
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