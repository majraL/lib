;(function (window) {

	// ZAŠTO NE RADE DEFAULT PARAMETRI U FUNKCIJI, NI U RETURN-U, NI DOLE KOD INIT-A ?? 
	let Hello = function ( firstname , lastname, language ) {
		return new Hello.init( firstname, lastname, language );
	}; // ili const ?

	const lang = [ 'ba', 'com' ];

	const msg = {
		ba: 'Alo ba',
		com: 'Hello'
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
			console.log(msg);
		}

	}

	Hello.init = function ( firstname, lastname, language ) {
			this.firstname = firstname || `Amidja`;
			this.lastname = lastname || `Fuzilovich`;
			this.language = language || `ba`;

		// dodati validaciju() !
	}

	Hello.init.prototype = Hello.prototype;

	window.H = window.Hello = Hello;

}(window));