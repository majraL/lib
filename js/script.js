'use strict';

var go = function () {
	let firstname = document.getElementById('firstname').value;
	let lastname = document.getElementById('lastname').value;
	let language = document.getElementById('language').value;

	let pozz = H(firstname, lastname, language);
	pozz.validate().output('output');
}