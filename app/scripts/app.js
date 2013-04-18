/*global define */
define(['views/impress'], function (ImpressView) {
    'use strict';

    var app = function () {
        new ImpressView();
    };

    return app;
});

/*
define([
    'backbone',
    'views/impress',
    'views/control'
], function (Backbone, ImpressView, ControlView) {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            '': 'topView'
            'c': 'controlView'
        },

        initialize: function () {
            console.log('Router');
            Backbone.history.start();
        },

        topView: function () {
            console.log('topView');

            new ImpressView();
        },

        controlView: function () {
            console.log('controlView');

            new ControlView();
        }
    });

    return Router;
});
*/
