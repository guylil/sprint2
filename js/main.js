'use strict';

var gImages = [
    { id: '1', url: '/assets/img/1.jpg', keywords: ['cry','sad'] },
    { id: '2', url: '/assets/img/2.jpg', keywords: ['sarcastic'] },
    { id: '3', url: '/assets/img/3.jpg', keywords: ['naughty','girl'] },
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

//TODO: finish when clickedCounter is made by guy the func should be called by search box
function getDomKeyWord(clickedCounter){
    var elKeyWord = document.querySelector('.girl');
    elKeyWord.style.fontSize='clickedCounter'+'px';
}