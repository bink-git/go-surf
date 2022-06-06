$(function () {
  $('.header__slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt="">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt="">',
    asNavFor: '.slider-dots-header',
  });

  $('.slider-dots-header').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
  });

  $('.surf-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt="">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt="">',
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '.slider-map',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 401,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });

  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.surf-slider',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 401,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.travel__slider').slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt="">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt="">',
  });

  jQuery(
    '<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>'
  ).insertAfter('.quantity input');
  jQuery('.quantity').each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find('input').val(newVal);
      spinner.find('input').trigger('change');
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find('input').val(newVal);
      spinner.find('input').trigger('change');
    });
  });

  $('.quantity-button ').on('click', function () {
    let summ =
      $('.nights').val() * $('.summ').data('nights') +
      ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + summ);
  });

  let summ =
    $('.nights').val() * $('.summ').data('nights') +
    ($('.guests').val() - 1) * $('.summ').data('guests');
  $('.summ').html('$' + summ);

  $('.surfboard-box__circle').on('click', function () {
    $(this).toggleClass('active');
  });

  $('.hamburger').on('click', function () {
    $('.menu').toggleClass('active');
    $('.hamburger').toggleClass('is-active');
  });
});
