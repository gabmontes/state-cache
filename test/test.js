define([
	'chai',
	'index',
	'stores/memory',
	'stores/localStorage'
], function (chai, StateCache, MemStore, LSStore) {
	'use strict';

	var assert = chai.assert;

	suite('state cache with localStorage', function () {

		var state = new StateCache();
		state.use(new LSStore());

		var testStr = 'foo';
		var testObj = {
			key: 'value'
		};

		suiteSetup(function () {
			localStorage.clear();
		});

		test('set a string', function () {
			assert.isTrue(state.setItem('bar', testStr));
			assert.strictEqual(localStorage.getItem('bar'), JSON.stringify(testStr));
		});

		test('set an object', function () {
			assert.isTrue(state.setItem('baz', testObj));
			assert.strictEqual(localStorage.getItem('baz'), JSON.stringify(testObj));
		});

		test('get a string', function () {
			assert.strictEqual(state.getItem('bar'), testStr);
		});

		test('get an object', function () {
			assert.deepEqual(state.getItem('baz'), testObj);
		});

		test('remove', function () {
			assert.isTrue(state.removeItem('bar'));
			assert.isNull(localStorage.getItem('bar'));
		});

		test('get missing', function () {
			assert.isTrue(!state.getItem('bar'));
		});

		test('get from localStorage', function () {
			localStorage.setItem('box', JSON.stringify(testObj));
			assert.deepEqual(state.getItem('box'), testObj);
		});

		suiteTeardown(function () {
			localStorage.clear();
		});
	});
});
