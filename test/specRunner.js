require.config({
    baseUrl: '..',
    paths: {
        'chai': 'bower_components/chai/chai',
        'mocha': 'bower_components/mocha/mocha'
    }
});

require([
    'mocha'
], function () {
    'use strict';

    mocha.setup('tdd');

    require([
        'test/test'
    ], function () {
        mocha.run();
    });
});
