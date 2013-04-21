require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        underscore: '../components/underscore/underscore-min',
        backbone: '../components/backbone/backbone-min',
        text: '../components/requirejs-text/text',
        bootstrap: 'vendor/bootstrap',
        impress: '../components/impress.js/js/impress',
        controldeck: '../components/controldeck.js/public/controldeck-slides'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        impress: {
            exports: 'impress'
        }
    }
});

require(['app', 'jquery', 'bootstrap', 'controldeck'], function (app) {
    'use strict';

    app();
});
