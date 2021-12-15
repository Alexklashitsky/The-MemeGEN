'use strict'
var gCanvas
var gCtx


gCanvas = document.querySelector('#my-canvas');
gCtx = gCanvas.getContext('2d');

function onOpenModal() {
    document.querySelector('.gallery').style.display = "none"
    document.querySelector('.modal').style.display = "flex"
}
function onCloseModal() {
    document.querySelector('.gallery').style.display = "block"
    document.querySelector('.modal').style.display = "none"
    setLineTxt('')
}

function onImgClicked(data) {
    var imgNum = +data.dataset.num
    console.log('imgNum:', imgNum);

    setImg(imgNum)
    onOpenModal()
    getMeme()
}


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

function onSave() {
    console.log('hi');
    var upperLine = document.querySelector('[name=upperLine]').value
    setLineTxt(upperLine)
    document.querySelector('[name=upperLine]').value = ''
    getMeme()
}



// function onType() {
//     var currKey = document.querySelector('[name=upperLine]').value
//     gUpperLine += currKey
//     // console.log('line:', gUpperLine);
//     console.log('gUpperLine:', gUpperLine);



//     // console.log('newText:', newText);

// }