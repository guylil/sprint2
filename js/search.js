'use strict';
console.log('hello search');



console.log(gImages);

// memeSearch(gImages, 'e');

function memeSearch(images) {
    var pressed = document.getElementsByName('search-box');
console.log(gImages);
    
    var text = pressed[0].value;
console.log(text);
    var res = images.filter(function (image) {
        return (image.keywords.join(',').indexOf(text) + 1)
    })
    console.log(res);
    // gImages = res;// FIX ME!!!!!!
    // RenderImages();// FIX ME!!!!!
    return res
}
