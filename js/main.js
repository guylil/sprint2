'use strict';

var gImages = [
    { id: '1', url: 'https://imgflip.com/s/meme/Black-Girl-Wat.jpg', keywords: ['bla,sle'] },
    { id: '1', url: 'https://imgflip.com/s/meme/Black-Girl-Wat.jpg', keywords: ['bla,sle'] },
    { id: '1', url: 'https://imgflip.com/s/meme/Black-Girl-Wat.jpg', keywords: ['bla,sle'] }
];


function RenderImages() {
    var strHTML;
    var img = document.querySelector('.my-img');
    for (var i = 0; i < gImages.length; i++) {
        strHTML += '<img class= "my-img" src="' + gImages[i].url + '"></img>';
    }
    img.innerHTML = strHTML;
}

RenderImages();