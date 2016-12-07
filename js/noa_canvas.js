'use strict';
//noa's canvas part
//needs to start with buttons
var canvas = document.getElementById('noaCanvas');
var context = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height / 2;


function alignTextRight() {
    // context.font = 'italic 40pt Calibri';
    context.textAlign = 'right';
    context.fillText('Hello World!', x, y);
}

function alignTextCenter() {
    // context.font = 'italic 40pt Calibri';
    context.textAlign = 'center';
    context.fillText('Hello World!', x, y);
}

function alignTextLeft() {
    // context.font = 'italic 40pt Calibri';
    context.textAlign = 'left';
    context.fillText('Hello World!', x, y);
}

function changeTextColor(color) {//TODO: the color needs to be a string
    context.fillStyle = color;
}

function changeFont(font) {//TODO:the font should be a string
    context.font = font;
}