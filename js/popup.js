'use strict';

var mailButton = document.querySelector('.map-mail__send');

var modalWindow = document.querySelector('.modal-window');
var modalWindowClose = document.querySelector('.modal-form-close');

var modalForm = modalWindow.querySelector('.modal-form');
var modalUserName = modalWindow.querySelector('.modal-form-username-field__input');
var modalUserEmail = modalWindow.querySelector('.modal-form-mail-field__input');

var hideElement = function (elem) {
  elem.classList.remove('modal-form-show');
}

var showElement = function (elem) {
  elem.classList.add('modal-form-show');
}

mailButton.addEventListener('click', function(event) {
	event.preventDefault();
  showElement(modalWindow);
});

modalWindowClose.addEventListener('click', function(event) {
	event.preventDefault();
  modalForm.reset();
	hideElement(modalWindow);
});
