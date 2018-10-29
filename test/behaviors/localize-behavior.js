/* global describe, it, expect, fixture, beforeEach */

'use strict';

describe('localize behavior', function() {
	var component;

	beforeEach(function() {
		document.documentElement.removeAttribute('lang');
	});

	it('should translate terms for all supported locales', function() {
		component = fixture('localize-behavior-fixture');
		var locales = Object.keys(component.resources);
		locales.forEach(function(locale) {
			document.documentElement.setAttribute('lang', locale);
			expect(component.localize('pageLabel')).to.equal(component.resources[locale].pageLabel);
		});
	});

	describe('localize mappings', function() {
		it('should have translation for every english term', function() {
			component = fixture('localize-behavior-fixture');
			var terms = Object.keys(component.resources['en']);
			var locales = Object.keys(component.resources);
			for (var i = 0; i < locales.length; i++) {
				var currentLocale = locales[i];
				for (var j = 0; j < terms.length; j++) {
					expect(component.resources[currentLocale].hasOwnProperty(terms[j]), 'missing term ' + terms[j] + ' on locale ' + currentLocale).to.be.true;
				}
			}
		});

		it('should have no empty mappings for supported langs', function() {
			var locales = Object.keys(component.resources);
			for (var i = 0; i < locales.length; i++) {
				var currentLocale = locales[i];
				var mappings = Object.getOwnPropertyNames(component.resources[currentLocale]);

				for (var j = 0; j < mappings.length; j++) {
					expect(mappings[j].trim()).to.not.equal('');
				}

			}
		});
	});

});
