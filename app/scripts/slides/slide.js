/*global define */
define([
    'text!slides/01.html',
    'text!slides/02.html',
    'text!slides/03.html',
    'text!slides/04.html',
    'text!slides/05.html',
    'text!slides/06.html',
    'text!slides/07.html'
], function (S01, S02, S03, S04, S05, S06, S07) {
    'use strict';

    var Slide = {
        slides: [
            {content: S01, id: 'bored', klass: 'slide', x: -1000, y: -1500, dx: 1000, dy: 0},
            {content: S02, klass: 'slide'},
            {content: S03, klass: 'slide'},
            {content: S04, id: 'title', x: 0, y: 0, scale: 4},
            {content: S05, id: 'its', x: 850, y: 3000, rotate: 90, scale: 5},
            {content: S06, id: 'big', x: 3500, y: 2100, rotate: 180, scale: 6},
            {content: S07, id: 'tiny', x: 2825, y: 2325, z: -3000, rotate: 300, scale: 1}
        ]
    };

    return Slide;
});
