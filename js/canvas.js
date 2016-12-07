'use strict';
console.log('hello canvas');

function canvasPaint() {
    var elCanvas = document.getElementById('canvas');
    // elCanvas.display='none';
    canvas.width =800;
    canvas.heigth=600;
    console.log(elCanvas);
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#0e70d1';
    var img = new Image();
    img.src = '../assets/img/5.png'
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 568, 360);
        ctx.fillText("print on Canvas", 50, 300);
    };
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    // document.getElementById('title').addEventListener('keyup', function () {
    //     ctx.save();
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     ctx.fillRect(0, 0, canvas.width, canvas.height);
    //     var stringTitle = document.getElementById('title').value;
    //     ctx.fillStyle = '#fff';
    //     ctx.font = '60px sans-serif';
    //     var text_title = stringTitle;
    //     ctx.fillText(stringTitle, 15, canvas.height / 2 + 35);
    //     ctx.restore();
    // }); 
}
canvasPaint();