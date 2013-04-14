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

            var data = {};

            data.id = slide.id !== undefined ?
                'id="' + slide.id + '" ' :
                '';

            data.klass = 'class="step' + (slide.klass !== undefined ? ' ' + slide.klass : '') + '" ';

            if (slide.x !== undefined) {
                this.x = slide.x;
            }
            if (slide.y !== undefined) {
                this.y = slide.y;
            }
            data.x = this.x;
            data.y = this.y;

            data.z = slide.z !== undefined ?
                'data-z="' + slide.z + '" ' :
                '';

            data.rotate = '';
            if (slide.rotate !== undefined) {
                data.rotate = 'data-rotate="' + slide.rotate + '" ';
            } else {
                if (slide.rotateX !== undefined) {
                    data.rotate += 'data-rotate-x="' + slide.rotateX + '" ';
                }
                if (slide.rotateY !== undefined) {
                    data.rotate += 'data-rotate-y="' + slide.rotateY + '" ';
                }
                if (slide.rotateZ !== undefined) {
                    data.rotate += 'data-rotate-z="' + slide.rotateZ + '" ';
                }
            }

            data.scale = slide.scale !== undefined ?
                'data-scale="' + slide.scale + '"' :
                '';

            data.content = slide.content !== undefined ?
                _.template(slide.content)() :
                '';

            $(this.el).append(this.template(data));


            if (slide.dx !== undefined) {
                this.dx = slide.dx;
            }
            if (slide.dy !== undefined) {
                this.dy = slide.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    });

    return ImpressView;
});
