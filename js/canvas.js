'use strict';
console.log('hello canvas');

function canvasPaint() {
    /// TO DO : FIX THIS FUNCTION SO IT WILL BE DINAMIC
    /// >>height >>width >> drawImage
    var elCanvas = document.getElementById('canvas');
    // elCanvas.display='none';
    // canvas.height = 300;
    // canvas.width = 400;
    console.log(elCanvas);
    var ctx = canvas.getContext('2d');
    // ctx.fillStyle = '#0e70d1';
    var img = new Image();
    img.src = '../assets/img/3.png'
    img.onload = function() {
        ctx.drawImage(img, 10, 10, 390, 290);
        ctx.fillText("Noa's & Guy's MemeGenerator", 10, 300);
        ctx.fillStyle = '#fff';
        // ctx.restore();
    };
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    // document.getElementById('title').addEventListener('keyup', function () {
    //     ctx.save();
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     ctx.fillRect(0, 0, canvas.width, canvas.height);
    //     var stringTitle = document.getElementById('title').value;
    //     ctx.font = '60px sans-serif';
    //     var text_title = stringTitle;
    //     ctx.fillText(stringTitle, 15, canvas.height / 2 + 35);
    // }); 
}
canvasPaint();