define([
	'stores/memory'
], function (MemoryStore) {
	'use strict';

	function StateCache(stores) {
		if (!stores) {
			stores = [MemoryStore];
		}
		if (!stores.length) {
			stores = [stores];
		}
		this.stores = stores.map(function (Store) {
			return new Store();
		});
	}

	StateCache.prototype.use = function (store) {
		this.stores.push(store);
	};

	StateCache.prototype.setItem = function(key, value) {
		return this.stores.reduce(function (stored, store) {
			return stored || store.setItem(key, value);
		}, false);
	};

	StateCache.prototype.getItem = function(key) {
		return this.stores.reduce(function (value, store) {
			return value || store.getItem(key);
		}, null);
	};

	StateCache.prototype.removeItem = function(key) {
		return this.stores.map(function (store) {
			return store.removeItem(key);
		}).reduce(function (removed, state) {
			return removed || state;
		}, false);
	};

	return StateCache;
});
