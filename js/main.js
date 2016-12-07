'use strict';

var gImages = [
    { id: '1', url: '/assets/img/best-crying-jordan-memes.jpg', keywords: ['bla,sle'] },
    { id: '2', url: '/assets/img/Captain-Picard-Facepalm.jpg', keywords: ['bla,sle'] },
    { id: '3', url: '/assets/img/Disaster-Girl.jpg', keywords: ['bla,sle'] },
];


function RenderImages() {
    var img = document.querySelector('.my-imges');
    var strHTML = '';
    for (var i = 0; i < gImages.length; i++) {
        var hex = '<div class="hexagon2" style="background-image:url(' + gImages[i].url + ');">' +
            '<div class="hexTop"></div>' +
            '<div class="hexBottom"></div>' +
            '</div>';
        strHTML += hex;
    }
    img.innerHTML = strHTML;
    console.log('strHTML: ', strHTML);

}

RenderImages();