/*global define */
define([
    'jquery',
    'backbone',
    'underscore',
    'impress',
    'text!views/slide.html',
    'slides/slide'
], function ($, Backbone, _, impress, SlideTemplate, Slide) {
    'use strict';

    var ImpressView = Backbone.View.extend({
        el: $('#impress'),

        template: _.template(SlideTemplate),

        x: 0,
        y: 0,
        dx: 0,
        dy: 0,

        initialize: function () {
            // console.log('ImpressView');

            this.addSlides(Slide.slides);

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
                rotate: slide.rotate !== undefined ? slide.rotate : 0,
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
