'use strict';
// console.log('hello search');

function memeSearch(images) {
    var pressed = document.getElementsByName('search-box');
    
    var text = pressed[0].value;
    var res = images.filter(function (image) {
        return (image.keywords.join(',').indexOf(text) + 1);
    });
    return res;
}