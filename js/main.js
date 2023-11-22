$(function () {
  var mixer = mixitup(".works__content");
});

const menuBtn = document.querySelector(".menu__btn");

menuBtn.addEventListener("click", function () {
  toggleMenu();
  toggleBodyScroll();
});

$(".menu__link").on("click", function () {
  toggleMenu();
  toggleBodyScroll();
});

function toggleMenu() {
  menuBtn.classList.toggle("active");
  $(".menu__list").toggleClass("menu__list--active");

  if ($(".menu__list").hasClass("menu__list--active")) {
    $(".header__content").hide();
  } else {
    $(".header__content").show();
  }
}

function toggleBodyScroll() {
  $("body").toggleClass("lock");
}

let navbar = document.getElementById("navbar").classList;
let active_class = "menu__scrolled";

window.addEventListener("scroll", function () {
  if (scrollY > 100) navbar.add(active_class);
  else navbar.remove(active_class);
});

$(".menu a, footer a").on("click", function (event) {
  event.preventDefault();
  var id = $(this).attr("href"),
    top = $(id).offset().top;
  $("body,html").animate({ scrollTop: top }, 2000);
});
var header__content = $(".header__content");
var scrollChange = 100;
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= scrollChange) {
    header__content.addClass("header__content--fixed");
  } else {
    header__content.removeClass("header__content--fixed");
  }
});
