/*global define */
define([
    'text!slides/01.html',
    'text!slides/02.html',
    'text!slides/03.html',
    'text!slides/04.html',
    'text!slides/05.html',
    'text!slides/06.html',
    'text!slides/07.html',
    'text!slides/08.html',
    'text!slides/09.html',
    'text!slides/10.html',
    'text!slides/11.html',
    'text!slides/12.html'
], function (S01, S02, S03, S04, S05, S06, S07, S08, S09, S10, S11, S12) {
    'use strict';

    var Slide = {
        slides: [
            {content: S01, id: 'bored', klass: 'slide', x: -1000, y: -1500, dx: 1000, dy: 0},
            {content: S02, klass: 'slide'},
            {content: S03, klass: 'slide'},
            {content: S04, id: 'title', x: 0, y: 0, scale: 4},
            {content: S05, id: 'its', x: 850, y: 3000, rotate: 90, scale: 5},
            {content: S06, id: 'big', x: 3500, y: 2100, rotate: 180, scale: 6},
            {content: S07, id: 'tiny', x: 2825, y: 2325, z: -3000, rotate: 300, scale: 1},
            {content: S08, id: 'ing', x: 3500, y: -850, rotate: 270, scale: 6},
            {content: S09, id: 'imagination', x: 6700, y: -300, scale: 6},
            {content: S10, id: 'source', x: 6300, y: 2000, rotate: 20, scale: 4},
            {content: S11, id: 'one-more-thing', x: 6000, y: 4000, scale: 2},
            {content: S12, id: 'its-in-3d', x: 6200, y: 4300, z: -100, rotateX: -40, rotateY: 10, scale: 2},
            {id: 'overview', x: 3000, y: 1500, scale: 10}
        ]
    };

    return Slide;
});
