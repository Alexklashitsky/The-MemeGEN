'use strict'
var gCanvas
var gCtx
var pic = 'img1'
var test = 'bla bla bla'


gCanvas = document.querySelector('#my-canvas');
gCtx = gCanvas.getContext('2d');

// renderMeme(pic, test)





function renderMeme(img, content) {
    var content = content
    //pic
    var elImg = document.querySelector(`.${img}`);
    console.log('elImg:', elImg);
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
    // console.log('txt:', test);


    //txt
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.font = '50px monospace';
    gCtx.fillStyle = 'white';
    gCtx.fillText(`${content}`, 200, 70);



}