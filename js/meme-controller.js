'use strict'
var gCanvas
var gCtx
gCanvas = document.querySelector('#my-canvas');
gCtx = gCanvas.getContext('2d');
var gFontColor
var gFontSize
var focusedOnTop = true

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


function renderMeme(gMeme) {

    var content = gMeme.line1
    var img = gMeme.pic
    var elImg = document.querySelector(`.${img}`);
    var fontColor = gMeme.fontColor
    var fontSize = gMeme.fontSize
    console.log('elImg:', elImg);
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);


    //txt
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.font = `${fontSize}px monospace`;
    gCtx.fillStyle = fontColor;
    gCtx.fillText(`${content}`, 200, 50);


}

function renderDownline(gMeme) {

    var content = gMeme.line2
    var fontColor = gMeme.fontColorDown
    var fontSize = gMeme.fontSizeDown

    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.font = `${fontSize}px monospace`;
    gCtx.fillStyle = fontColor;
    gCtx.fillText(`${content}`, 200, 400);

}



function onSave() {
    console.log('hi');
    var upperLine = document.querySelector('[name=upperLine]').value
    setLineTxt(upperLine)
    document.querySelector('[name=upperLine]').value = ''
    getMeme()
}

function onFontColorChange() {
    console.log('hi');
    var fontColor = document.querySelector('[name=fontColor]').value
    console.log('fontColor:', fontColor);
    setFontColor(fontColor)
    getMeme()

}

function onIncrease() {
    setFontSize('+')
    getMeme()

}
function onDecrease() {
    setFontSize('-')
    getMeme()

}

function onFocusSet() {
    var currFocus = document.querySelector('[name=focus]').value
    // console.log('currFocus:', currFocus);
    if (currFocus === 'upper') {
        focusedOnTop = true
    }
    else focusedOnTop = false
}
// function onType() {
//     var currKey = document.querySelector('[name=upperLine]').value
//     gUpperLine += currKey
//     // console.log('line:', gUpperLine);
//     console.log('gUpperLine:', gUpperLine);



//     // console.log('newText:', newText);

// }