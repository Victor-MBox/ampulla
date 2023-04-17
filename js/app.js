/* Развернуть описание */
function readMore() {
  var dots = document.getElementById("dots");
  var more = document.getElementById("more");
  var btn = document.getElementById("btnMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "Развернуть описание";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Свернуть описание";
    more.style.display = "inline";
  }
}

/* Slick Slider */
$(document).ready(function () {
  $(".product__slider").slick({
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px 0px 50px",
    initialSlide: 0,
    focusOnSelect: true,
    asNavFor: ".product__slider-big",
  });
});

/* Slick Slider big*/
$(document).ready(function () {
  $(".product__slider-big").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    fade: true,
    asNavFor: ".product__slider",
  });
});

/* Slick Slider reviews*/
$(document).ready(function () {
  $(".reviews__slick-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});

/*Фиксация хедера*/
const header = document.querySelector(".header");
const banner = document.querySelector(".banner");
const headerHeight = header.offsetHeight;
const bannerHeight = banner.offsetHeight;
let lastScrollTop = 10;

window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance > lastScrollTop) {
    header.classList.remove("header--fixed");
    banner.style.marginTop = null;
  } else {
    header.classList.add("header--fixed");
    banner.style.marginTop = `110px`;
  }

  if (scrollDistance === 0) {
    header.classList.remove("header--fixed");
    banner.style.marginTop = null;
  }

  lastScrollTop = scrollDistance;
});

/* Модальное окно Контакты */
$('[data-modal=contactsMod]').on('click', function() {
  $('.overlay, #contactsMod').fadeIn('slow');
})
  $('.modal__close').on('click', function() {
    $('.overlay, #contactsMod').fadeOut('slow');
  })

/* Модальное окно Купить сейчас */
$('[data-modal=buyNow]').on('click', function() {
  $('.overlay-buyNow, #buyNow').fadeIn('slow');
})
  $('.modal__close').on('click', function() {
    $('.overlay-buyNow, #buyNow').fadeOut('slow');

  })

