'use strict';

var mailButton = document.querySelector('.map-mail__send');
var popup = document.querySelector('.modal-window');
var close = document.querySelector('.modal-close');
var form = popup.querySelector('.modal-form');
var username = popup.querySelector('[name=username]');
var mailto = popup.querySelector('[name=mail]');

mailButton.addEventListener('click', function(event) {
	event.preventDefault();
	popup.classList.add('modal-show');
	username.focus();
});

close.addEventListener('click', function(event) {
	event.preventDefault();
	popup.classList.remove('modal-show');
});
