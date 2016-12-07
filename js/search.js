'use strict';
console.log('hello search');

gImages = [
    { id: '1', url: '../assets/img/1.png', keywords: ['pirate'] },
    { id: '2', url: '../assets/img/2.jpg', keywords: ['future'] },
    { id: '3', url: '../assets/img/3.png', keywords: ['fry'] },
    { id: '4', url: '../assets/img/4.png', keywords: ['everywhere'] },
]

// console.log(gImages);

// memeSearch(gImages, 'e');

function memeSearch(images, text) {
    var pressed = document.getElementsByName('search-box');
    text = pressed[0].value;
    var res = images.filter(function (image) {
        return (image.keywords.join().indexOf(text) + 1)
    })
    console.log(res);
    gImages = res;// FIX ME!!!!!!
    RenderImages();// FIX ME!!!!!
    return res
}
