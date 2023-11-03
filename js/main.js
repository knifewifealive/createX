$(function () {
  // POPUP VIDEO IN HEADER HERO-SECTION
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
  // FILTER DIRECTIONS SECTION
  var mixer = mixitup(".directions__list");

  $(".directions__filter-btn").on("click", function () {
    $(".directions__filter-btn").removeClass("directions__filter-btn--active");
    $(this).addClass("directions__filter-btn--active");
  });

  // HOMEWORK WITH DUMB MODIFICATOR
  $(".directions__list-link").on("click", function (e) {
    e.preventDefault();
    $(".directions__list-link").removeClass("directions__list-item--doCrazy");
    $(this).addClass("directions__list-item--doCrazy");
  });
  // TEAM SLIDER
  $(".team__slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    draggable: false,
    appendArrows: $(".team__slider-arrows"),
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $(".team__slider-prev").on("click", function (e) {
    e.preventDefault();
    $(".team__slider").slick("slickPrev");
  });

  $(".team__slider-next").on("click", function (e) {
    e.preventDefault();
    $(".team__slider").slick("slickNext");
  });
  // TESTIMONIALS SLIDER
  $(".testimonials__slider").slick({
    arrows: false,
    dots: true,
    appendDots: $(".testimonials__dots"),
    waitForAnimate: true,
  });
  $(".testimonials__prev").on("click", function (e) {
    e.preventDefault();
    $(".testimonials__slider").slick("slickPrev");
  });

  $(".testimonials__next").on("click", function (e) {
    e.preventDefault();
    $(".testimonials__slider").slick("slickNext");
  });

  // При клике выпадает и скрывается текст; тексты остальных элементов списка неизменны
  // $('.program__acc-link').on('click', function (e) {
  //   e.preventDefault()
  //   $(this).toggleClass('program__acc-link--active')
  //   $(this).children('.program__acc-text').slideToggle()
  // })

  //При клике на элемент списка, раскрывается текст; все остальные тексты скрываются
  $(".program__acc-link").on("click", function (e) {
    e.preventDefault();

    if ($(this).hasClass("program__acc-link--active")) {
      $(this).removeClass("program__acc-link--active");
      $(this).children(".program__acc-text").slideUp();
    } else {
      $(".program__acc-link").removeClass("program__acc-link--active");
      $(".program__acc-text").slideUp();
      $(this).addClass("program__acc-link--active");
      $(this).children(".program__acc-text").slideDown();
    }
  });

  // плавный переход по якорным ссылкам
  $(
    ".header__nav-list a, .header__top-btn, .footer__go-top, .footer__item-link"
  ).on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  // burger menu
  $(".burger, .overlay, .header__top a").on("click", function (e) {
    e.preventDefault();
    $(".burger").toggleClass("burger--opened")
    $(".header__top").toggleClass("header__top--open");
    $(".overlay").toggleClass("overlay--show");
  });

  setInterval(() => {
    if (
      $(window).scrollTop() > 0 &&
      $(".header__top").hasClass("header__top--open") === false
    ) {
      $(".burger").addClass("burger--follow");
    } else {
      $(".burger").removeClass("burger--follow");
    }
  }, 0);
});
