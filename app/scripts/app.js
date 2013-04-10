/*global define */
define(['views/impress'], function (ImpressView) {
    'use strict';

    var app = function () {
        new ImpressView();
    };

    return app;
});
