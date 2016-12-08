'use strict';
console.log('hello canvas');

editMeme();
var gMeme = '../assets/img/3.png';
var gCanvasHeight = 300; // TODO MAKE RESPONSIVE
var gCanvasWidth = 400; // TODO MAKE RESPONSIVE
var gInputTopText = 'write somthing';
var gInputBottomText = 'here';
var gTopTextHeight = 7;
var gBottomTextHeight = 7;
var gTopTextAlign = 40;
var gBottomTextAlign = 150;
var gTextFontSize = 30;
var gTopTextColor = 'white';
var gBottomTextColor = 'black';
var gTransText = 0.5;

function setMeme(memeSrc) {
    gMeme = memeSrc;
    canvasPaint();
};
function setCanvasSize(canvasHeight, canvasWidth) {
    gCanvasHeight = canvasHeight;
    gCanvasWidth = canvasWidth;
    canvasPaint();
};

function setText(stringTopText, StringBottumText) {
    gInputTopText = stringTopText;
    gInputBottomText = StringBottumText;
    canvasPaint();
};
function setBars(topBar, bottomBar) {
    gTopTextHeight = topBar;
    gBottomTextHeight = bottomBar;
    canvasPaint();
};
function alignTopText(number) {
    gTopTextAlign = number;
    canvasPaint();

}
function alignBottomText(number) {
    gBottomTextAlign = number;
    canvasPaint();
}

function increaseTextSize() {
    gTextFontSize++;
    canvasPaint();
};
function decreaseTextSize() {
    gTextFontSize--;
    canvasPaint();
};
function setTopTextColor(color) {
    gTopTextColor = color;
    canvasPaint();
};
function setBottomTextColor(color) {
    gBottomTextColor = color;
    canvasPaint();
};

function setOpacity(number) {
    gTransText = number;
    canvasPaint();
};
// canvasPaint(gMeme, gCanvasHeight, gCanvasWidth, gInputTopText, gInputBottomText, gTopTextHeight, gBottomTextHeight, gTopTextAlign, gBottomTextAlign, gTextFontSize, gTopTextColor, gBottomTextColor, gTransText);
function enterText1(elInputText) {
    var text1 = document.getElementsByName('textarea1');
    var text2 = document.getElementsByName('textarea2');
    gTextFontSize = 30;
    var inputTopText = '' + text1[0].value;
    var inputBottomText = '' + text2[0].value;
    setText(inputTopText, inputBottomText);
    canvasPaint();
};
// function canvasPaint(meme, canvasHeight, canvasWidth, inputTopText, inputBottomText, topTextHeight, bottomTextHeight, topTextAlign , bottomTextAlign, textFontSize , topTextColor , bottomTextColor , transText)
// function canvasPaint(meme = '../assets/img/3.png', canvasHeight = 300, canvasWidth = 400, inputTopText = "not sure if...", inputBottomText = "or if....", topTextHeight = 7, bottomTextHeight = 7, topTextAlign = 40, bottomTextAlign = 150, textFontSize = 30, topTextColor = 'white', bottomTextColor = 'red', transText = 0.5)


function canvasPaint(topTextColor = 'white', bottomTextColor = 'red', transText = 0.5) {
    var elCanvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.height = gCanvasHeight;
    canvas.width = gCanvasWidth;
    // ctx.fillStyle = '#0e70d1';
    var img = new Image();
    img.src = gMeme;
    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        // ctx.save();
        ctx.font = gTextFontSize + 'pt David';
        ctx.fillStyle = 'rgba(0,0,0,' + gTransText + ')';
        ctx.fillRect(0, 0, canvas.width, canvas.height / gTopTextHeight);
        ctx.fillRect(0, canvas.height - canvas.height / gBottomTextHeight, canvas.width, canvas.height / gBottomTextHeight);
        // ctx.save();
        ctx.fillStyle = topTextColor;
        ctx.fillText(gInputTopText.toUpperCase(), gTopTextAlign, gTextFontSize + 3);
        ctx.fillStyle = bottomTextColor;
        ctx.fillText(gInputBottomText.toUpperCase(), gBottomTextAlign, canvas.height - 5);
        ctx.font = '10pt Dvaid'
        ctx.fillStyle = '#fff';
        ctx.fillText("Noa's & Guy's MemeGenerator", 10, 300);
        // ctx.restore();
        // ctx.fillStyle = '#fff';
        ctx.save();
        // return ctx
    };
    // var newImg=new Image();
    // newImg.id="meme";
    // memeUrl = canvas.toDataURL();
    // document.getElementById('img_generated').appendChild(newImg);
    // console.log(ctx);
    // return res
}

canvasPaint();
function addLinesAndText(textFont, topTextSize) {
    // ctx.fillRect(0, 0, canvas.width, canvas.height / topTextHeight);
    // ctx.fillRect(0, canvas.height - canvas.height / bottomTextHeight, canvas.width, canvas.height / bottomTextHeight);
    // ctx.font = topTextSize + 'pt'+ textFont;
    // ctx.fillStyle = topTextColor;
    // ctx.fillText(inputTopText.toUpperCase(), topTextAlign, textFontSize + 3);
    // ctx.font = topTextSize + 'pt'+ textFont;
    // ctx.fillStyle = bottomTextColor;
    // ctx.fillText(inputBottomText.toUpperCase(), bottomTextAlign, canvas.height - 5);

    // var elCanvas = document.getElementById('canvas');
    // var ctx = canvas.getContext('2d');
    // ctx.drawImage(, 0, 0, 300, 400);
    // = canvas.getContext('2d');
    // ctx.restore();        
    // ctx.font = '30pt Dvaid'
    // ctx.fillStyle = '#fff';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    // ctx.fillText("Noa's & Guy's MemeGenerator", 10, 300);

}
// document.getElementById('title').addEventListener('keyup', function () {
// ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     var stringTitle = document.getElementById('title').value;
//     ctx.font = '60px sans-serif';
//     var text_title = stringTitle;
//     ctx.fillText(stringTitle, 15, canvas.height / 2 + 35);
// }); 