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

            var rotate = '';
            if (slide.rotate !== undefined) {
                rotate = 'data-rotate="' + slide.rotate + '" ';
            } else {
                if (slide.rotateX !== undefined) {
                    rotate += 'data-rotate-x="' + slide.rotateX + '" ';
                }
                if (slide.rotateY !== undefined) {
                    rotate += 'data-rotate-y="' + slide.rotateY + '" ';
                }
                if (slide.rotateZ !== undefined) {
                    rotate += 'data-rotate-z="' + slide.rotateZ + '" ';
                }
            }

            $(this.el).append(this.template({
                id: slide.id !== undefined ? slide.id : '',
                x: this.x,
                y: this.y,
                z: slide.z !== undefined ? slide.z : 0,
                rotate: rotate,
                scale: slide.scale !== undefined ? slide.scale : 1,
                klass: slide.klass !== undefined ? slide.klass : '',
                content: slide.content !== undefined ? _.template(slide.content)() : ''
            }));

            this.x += this.dx;
            this.y += this.dy;
        }
    });

    return ImpressView;
});
