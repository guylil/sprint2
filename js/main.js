'use strict';

var gImages = [
    { id: '1', url: '../assets/img/1.jpg', keywords: ['cry', 'sad'] },
    { id: '2', url: '../assets/img/2.jpg', keywords: ['sarcastic'] },
    { id: '3', url: '../assets/img/3.png', keywords: ['naughty', 'girl'] },
    { id: '4', url: '../assets/img/4.png', keywords: ['pirate'] },
    { id: '5', url: '../assets/img/6.jpg', keywords: ['future'] },
    { id: '6', url: '../assets/img/5.png', keywords: ['fry'] },

];

function init() {
    RenderImages(gImages);
    //TODO:better put in HTML
    document.querySelector('.back-btn').addEventListener('click', function() {
        document.querySelector('.gallery').style.display = 'block';
        document.querySelector('.generator').style.display = 'none';
    });
}

function backToGallery() {
    document.querySelector('.generator').style.display = 'none';
    document.querySelector('.gallery').style.display = 'block';
}
function editMeme() {
    document.querySelector('.generator').style.display = 'block';
    document.querySelector('.gallery').style.display = 'none';
}


function RenderImages(images) {
    var img = document.querySelector('.my-imges');
    var strHTML = '';
    for (var i = 0; i < images.length; i++) {
        // console.log(images[i].url)
        var hex = '<div class="hexagon" onclick="setMeme(this)" id="' + images[i].url + '" style="background-image:url(' + images[i].url + ');">' +
            '<div class="hexTop" ></div>' +
            '<div class="hexBottom" ></div>' +
            '</div>';
        strHTML += hex;
    }
    img.innerHTML = strHTML;
    // console.log('strHTML: ', strHTML);

}


//TODO: finish when clickedCounter is made by guy the func should be called by search box
function getDomKeyWord(clickedCounter) {
    var elKeyWord = document.querySelector('.girl');
    elKeyWord.style.fontSize = clickedCounter + 'px';
}
//TODO: write functions
function renderCards() {

};

function renderList() {

};