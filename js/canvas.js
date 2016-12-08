'use strict';
console.log('hello canvas');

function canvasPaint(meme = '../assets/img/3.png', canvasHeight = 300, canvasWidth = 400, inputTopText = "not sure if...", inputBottomText = "or if....", topTextHeight = 7, bottomTextHeight = 7, topTextAlign = 40, bottomTextAlign = 150, textFontSize = 30, topTextColor = 'white', bottomTextColor = 'red', transText = 0.5) {
    var elCanvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.height = canvasHeight;
    canvas.width = canvasWidth;
    // ctx.fillStyle = '#0e70d1';
    var img = new Image();
    img.src = meme;
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        // ctx.save();
        ctx.font = textFontSize + 'pt David';
        ctx.fillStyle = 'rgba(0,0,0,' + transText + ')';
        ctx.fillRect(0, 0, canvas.width, canvas.height / topTextHeight);
        ctx.fillRect(0, canvas.height - canvas.height / bottomTextHeight, canvas.width, canvas.height / bottomTextHeight);
        // ctx.save();
        ctx.fillStyle = topTextColor;
        ctx.fillText(inputTopText.toUpperCase(), topTextAlign, textFontSize + 3);
        ctx.fillStyle = bottomTextColor;
        ctx.fillText(inputBottomText.toUpperCase(), bottomTextAlign, canvas.height - 5);
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
    memeUrl = canvas.toDataURL();
    // document.getElementById('img_generated').appendChild(newImg);
    // console.log(ctx);
    // return res
}

function addLinesAndText(textFont,topTextSize) {
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

canvasPaint();
// addLines();