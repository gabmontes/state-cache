define([], function () {
	'use strict';

	function MemoryStore() {
		this.store = {};
	}

	MemoryStore.prototype.setItem = function(key, value) {
		this.store[key] = value;
		return false;
	};

	MemoryStore.prototype.getItem = function(key) {
		return this.store[key];
	};

	MemoryStore.prototype.removeItem = function(key) {
		delete this.store[key];
		return false;
	};

	return MemoryStore;
});
