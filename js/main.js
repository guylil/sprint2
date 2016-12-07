'use strict';

var gImages = [
    { id: '1', url: '/assets/img/1.jpg', keywords: ['cry', 'sad'] },
    { id: '2', url: '/assets/img/2.jpg', keywords: ['sarcastic'] },
    { id: '3', url: '/assets/img/3.png', keywords: ['naughty', 'girl'] },
    { id: '4', url: '../assets/img/4.png', keywords: ['pirate'] },
    { id: '5', url: '../assets/img/6.jpg', keywords: ['future'] },
    { id: '6', url: '../assets/img/5.png', keywords: ['fry'] },
];


function RenderImages(images) {
    var img = document.querySelector('.my-imges');
    var strHTML = '';
    for (var i = 0; i < images.length; i++) {
        var hex = '<div class="hexagon2" style="background-image:url(' + images[i].url + ');">' +
            '<div class="hexTop"></div>' +
            '<div class="hexBottom"></div>' +
            '</div>';
        strHTML += hex;
    }
    img.innerHTML = strHTML;
    // console.log('strHTML: ', strHTML);

}


RenderImages(gImages);

//TODO: finish when clickedCounter is made by guy the func should be called by search box
function getDomKeyWord(clickedCounter) {
    var elKeyWord = document.querySelector('.girl');
    elKeyWord.style.fontSize = clickedCounter + 'px';
}

// function cardModeToggle() {
//     var btn = document.querySelector('.card');
//     console.log('elbtn', btn);
//     btn.addEventListener('click', displayCard);
// }

// cardModeToggle();

// function displayCard() {
//     var strHTML = '<div class="my-imges flex flex-direction-row"></div>';
//     console.log('strHTML', strHTML);

//     var elGallery = document.querySelector('.main gallery');
//     elGallery.innerHTML = strHTML;
//     RenderImages();
// }

function renderCards() {

};

function renderList() {

};