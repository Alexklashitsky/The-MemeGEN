'use strict'
var gCanvas
var gCtx
gCanvas = document.querySelector('#my-canvas');
gCtx = gCanvas.getContext('2d');
var gFontColor
var gFontSize
// var focusedOnTop = true
var gFocusPos = document.querySelector('[name=focus]').value

function onOpenModal() {
    document.querySelector('.gallery').style.display = "none"
    // document.querySelector('.modal').style.display = "flex"
    document.querySelector('.modal').style.visibility = "visible"

}
function onCloseModal() {
    document.querySelector('.gallery').style.display = "block"
    document.querySelector('.modal').style.display = "none"
    restLines()
}

function onImgClicked(data) {
    var imgNum = +data.dataset.num
    console.log('imgNum:', imgNum);

    setImg(imgNum)
    onOpenModal()
    getMeme()
}


function renderMeme(gMeme) {

    var content = gMeme.topLine.line
    var img = gMeme.pic
    var elImg = document.querySelector(`.${img}`);
    var fontColor = gMeme.topLine.fontColor
    var fontSize = gMeme.topLine.fontSize
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

    var content = gMeme.buttonline.line
    var fontColor = gMeme.buttonline.fontColor
    var fontSize = gMeme.buttonline.fontSize

    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.font = `${fontSize}px monospace`;
    gCtx.fillStyle = fontColor;
    gCtx.fillText(`${content}`, 200, 400);

}



function onSave() {
    var line = document.querySelector('[name=line]').value

    if (gFocusPos === 'upper') setLineTxt(line, 'upper')


    else if (gFocusPos === 'down') setLineTxt(line, 'down')
    document.querySelector('[name=line]').value = ''
    console.log('focusPos:', gFocusPos);


    getMeme()

}

function onFontColorChange() {
    var fontColor = document.querySelector('[name=fontColor]').value
    if (gFocusPos === 'upper') setFontColor(fontColor, 'upper')
    else if (gFocusPos === 'down') setFontColor(fontColor, 'down')

    getMeme()

}

function onIncrease() {
    if (gFocusPos === 'upper') setFontSize('+', 'upper')
    else if (gFocusPos === 'down') setFontSize('+', 'down')
    getMeme()

}
function onDecrease() {
    if (gFocusPos === 'upper') setFontSize('-', 'upper')
    else if (gFocusPos === 'down') setFontSize('-', 'down')
    console.log('dffdfd');
    getMeme()

}

function onFocusSet() {
    var currFocus = document.querySelector('[name=focus]').value
    // console.log('currFocus:', currFocus);
    gFocusPos = currFocus
    // if (currFocus === 'upper') {
    //     focusedOnTop = true
    // }
    // else focusedOnTop = false
}
// function onType() {
//     var currKey = document.querySelector('[name=upperLine]').value
//     gUpperLine += currKey
//     // console.log('line:', gUpperLine);
//     console.log('gUpperLine:', gUpperLine);



//     // console.log('newText:', newText);

// }