'use strict';

var mailButton = document.querySelector('.map-mail__send');
var popup = document.querySelector('.modal-window');
var close = document.querySelector('.modal-form-close');
var form = popup.querySelector('.modal-form');
var username = popup.querySelector('.modal-form-username-field__input');
var mailto = popup.querySelector('.modal-form-mail-field__input');

var removeElement = function (elem) {
  elem.classList.remove('modal-form-show');
}

var addElement = function (elem) {
  elem.classList.add('modal-form-show');
}

mailButton.addEventListener('click', function(event) {
	event.preventDefault();
	username.focus();
  addElement(popup);
});

close.addEventListener('click', function(event) {
	event.preventDefault();
	removeElement(popup);
});
