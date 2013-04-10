/*global define */
define([
    'jquery',
    'backbone',
    'underscore'
], function ($, Backbone, _) {
    'use strict';

    var ImpressView = Backbone.View.extend({
        el: $('#view'),

        initialize: function () {
            console.log('ImpressView');
        }
    });

    return ImpressView;
});
