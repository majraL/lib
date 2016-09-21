;(function (window) {

	let Hello = function ( firstname, lastname, language ) {
		return new Hello.init( firstname, lastname, language );
	}

	let lang = [ 'bih', 'en' ];

	let msg = {
		bih: 'Alo ba',
		en: 'Hello'
	};

	Hello.prototype = {

		validate: function () {
			if ( lang.indexOf(this.language) === -1 ) {
				throw `${this.language} as a language does not exist!`;
			}

			// chainable
			return this;
		},

		fullName: function () {
			return `${this.firstname} ${this.lastname}`;
		},

		hello: function () {
			return `${msg[this.language]} ${this.fullName()} !`;
		},

		output: function( selector ) {
			let msg = this.hello();
			document.getElementById(selector).innerHTML = msg;
		}

	}

	Hello.init = function ( firstname, lastname, language ) {
		this.firstname = firstname || `Amidja`;
		this.lastname = lastname || `Fuzilovich`;
		this.language = language || `bih`;

		// dodati validaciju() !
	}

	Hello.init.prototype = Hello.prototype;

	window.H = window.Hello = Hello;

}(window));