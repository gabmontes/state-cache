define([], function () {
	'use strict';

	function LSStore() {}

	LSStore.prototype.setItem = function(key, value) {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (err) {
			return false;
		}
		return true;
	};

	LSStore.prototype.getItem = function(key) {
		try {
			return JSON.parse(localStorage.getItem(key));
		} catch (err) {
			return null;
		}
	};

	LSStore.prototype.removeItem = function(key) {
		if (!localStorage.getItem(key)) {
			return false;
		}
		localStorage.removeItem(key);
		return true;
	};

	return LSStore;
});
