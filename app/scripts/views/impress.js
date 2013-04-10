/*global define */
define([
    'jquery',
    'backbone',
    'underscore',
    'impress',
    'text!templates/slide.html',
    'text!templates/01.html',
    'text!templates/02.html',
    'text!templates/03.html',
], function ($, Backbone, _, impress, SlideTemplate, S01, S02, S03) {
    'use strict';

    var ImpressView = Backbone.View.extend({
        el: $('#impress'),

        slides: [
            S01,
            S02,
            S03
        ],

        template: _.template(SlideTemplate),

        x: -1000,
        y: -1500,

        deltaX: 1000,
        deltaY: 0,

        initialize: function () {
            // console.log('ImpressView');

            this.addSlides(this.slides);

            impress().init();
        },

        addSlides: function (slides) {
            _.each(slides, function (slide) {
                this.addSlide(slide);
            }, this);
        },

        addSlide: function (content) {
            // console.log(content);
            $(this.el).append(this.template({x: this.x, y: this.y, content: _.template(content)()}));

            this.x += this.deltaX;
            this.y += this.deltaY;
        }
    });

    return ImpressView;
});
