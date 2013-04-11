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
    'text!templates/04.html',
], function ($, Backbone, _, impress, SlideTemplate, S01, S02, S03, S04) {
    'use strict';

    var ImpressView = Backbone.View.extend({
        el: $('#impress'),

        slides: [
            {content: S01, klass: 'slide', x: -1000, y: -1500, dx: 1000, dy: 0},
            {content: S02, klass: 'slide'},
            {content: S03, klass: 'slide'},
            {content: S04, x: 0, y: 0, scale: 4}
        ],

        template: _.template(SlideTemplate),

        x: 0,
        y: 0,
        dx: 0,
        dy: 0,

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

        addSlide: function (slide) {
            // console.log(content);

            if (slide.x !== undefined) {
                this.x = slide.x;
            }
            if (slide.y !== undefined) {
                this.y = slide.y;
            }
            if (slide.dx !== undefined) {
                this.dx = slide.dx;
            }
            if (slide.dy !== undefined) {
                this.dy = slide.dy;
            }

            $(this.el).append(this.template({
                x: this.x,
                y: this.y,
                scale: slide.scale !== undefined ? slide.scale : 1,
                klass: slide.klass !== undefined ? slide.klass : '',
                content: _.template(slide.content)()
            }));

            this.x += this.dx;
            this.y += this.dy;
        }
    });

    return ImpressView;
});
