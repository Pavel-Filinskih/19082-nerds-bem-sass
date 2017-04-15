'use strict';

var mailButton = document.querySelector('.map-mail__send');
var popup = document.querySelector('.modal-window');
var close = document.querySelector('.modal-form-close');
var form = popup.querySelector('.modal-form');
var username = popup.querySelector('.modal-form-username-field__input');
var mailto = popup.querySelector('.modal-form-mail-field__input');

mailButton.addEventListener('click', function(event) {
	event.preventDefault();
	popup.classList.add('modal-form-show');
	username.focus();
});

close.addEventListener('click', function(event) {
	event.preventDefault();
	popup.classList.remove('modal-form-show');
});
