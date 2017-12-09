"use strict";

var menu = document.querySelector('.menu');
var menuList = document.querySelector('.menu__list');
var menuBtn = document.querySelector('.menu__btn');

menuBtn.addEventListener('click', function (event) {
  event.preventDefault();
  var menuShow = menuList.querySelector('.menu__list--show');

  if (!menuShow) {
    menuList.classList.add('menu__list--show');
  } else {
    menuList.classList.remove('menu__list--show');
  }
});
