'use strict'
var gCanvas
var gCtx
gCanvas = document.querySelector('#my-canvas');
gCtx = gCanvas.getContext('2d');
var gFontColor
var gFontSize
// var focusedOnTop = true
var gFocusPos = 'upper'

function onOpenModal() {
    document.querySelector('.gallery').style.display = "none"
    // document.querySelector('.modal').style.display = "flex"
    document.querySelector('.modal').style.visibility = "visible"
    renderCurrLinePos()

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
    var strokeColor = gMeme.topLine.strokeColor
    console.log('elImg:', elImg);
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);


    //txt
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = gMeme.topLine.textAlign;
    gCtx.font = `${fontSize}px monospace`;
    gCtx.fillStyle = fontColor;
    gCtx.strokeStyle = strokeColor
    gCtx.strokeText(`${content}`, 200, gMeme.topLine.height);

    gCtx.fillText(`${content}`, 200, gMeme.topLine.height);



}

function renderDownline(gMeme) {

    var content = gMeme.buttonline.line
    var fontColor = gMeme.buttonline.fontColor
    var fontSize = gMeme.buttonline.fontSize
    var strokeColor = gMeme.buttonline.strokeColor

    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.font = `${fontSize}px monospace`;
    gCtx.fillStyle = fontColor;
    gCtx.strokeStyle = strokeColor
    gCtx.strokeText(`${content}`, 200, gMeme.buttonline.height);

    gCtx.fillText(`${content}`, 200, gMeme.buttonline.height);


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

function onStrokeColorChange() {
    var strokeColor = document.querySelector('[name=strokeColor]').value
    console.log('strokeColor:', strokeColor);
    setStrokeColor(strokeColor)
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
    getMeme()

}

function onFocusSet() {
    focusSet()
    renderCurrLinePos()

    // console.log('currFocus:', currFocus);
    // gFocusPos = currFocus
    // if (currFocus === 'upper') {
    //     focusedOnTop = true
    // }
    // else focusedOnTop = false
}

function onArrowUp() {
    moveLineUp()
    getMeme()

}
function onArrowDown() {
    moveLineDown()
    getMeme()

}

function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}




// function onLine() {

//     console.log('hi');
//     gCtx.beginPath(30, 30);
//     gCtx.lineWidth = 2;
//     gCtx.moveTo(30, 30);
//     gCtx.lineTo(70, 70);
//     gCtx.strokeStyle = 'red';
//     gCtx.stroke();
//     gCtx.closePath();

//     getMeme()
// }


function renderCurrLinePos() {
    const elLine = document.querySelector('.currLine span')
    console.log('elLine:', elLine);
    elLine.innerText = ' ' + gFocusPos


}

function onTextAlignCenter() {
    setTextAlign('center')
    getMeme()

}
function onTextAlignRight() {
    setTextAlign('right')
    getMeme()
}
function onTextAlignLeft() {
    setTextAlign('left')
    getMeme()
}

function onSetFont() {

}

// function onType() {
//     var currKey = document.querySelector('[name=upperLine]').value
//     gUpperLine += currKey
//     // console.log('line:', gUpperLine);
//     console.log('gUpperLine:', gUpperLine);



//     // console.log('newText:', newText);

// }