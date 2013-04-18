/*global define */
define([
    'jquery',
    'backbone',
    'underscore',
    'text!views/control.html'
], function ($, Backbone, _, ControlTemplate) {
    'use strict';

    var ControlView = Backbone.View.extend({
        el: $('#view'),

        template: _.template(ControlTemplate),

        initialize: function () {
            console.log('ControlView');
        },

        render: function () {
            $(this.el).html(this.template());
        }
    });

    return ControlView;
});
