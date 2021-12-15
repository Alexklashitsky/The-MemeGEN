'use strict'
var gMeme = {
    pic: '',
    line1: '',
    fontColor: 'white',
    fontSize: 50,
    line2: '',
    fontColorDown: 'white',
    fontSizeDown: 50


}

// getMeme()

function getMeme() {
    // var pic = gMeme.pic
    // var line = gMeme.line1
    renderMeme(gMeme)
    renderDownline(gMeme)
}

function setLineTxt(text, pos) {
    var line = text
    if (pos === 'upper') gMeme.line1 = line
    else gMeme.line2 = line


}
function setImg(num) {
    gMeme.pic = 'img' + num
    console.log('num:', num);
    console.log('gMeme:', gMeme);


}
function setFontColor(color, pos) {
    if (pos === 'upper') gMeme.fontColor = color
    else gMeme.fontColorDown = color

}
function setFontSize(sigh, pos) {
    var fontSize
    if (pos === 'upper') {
        fontSize = gMeme.fontSize
        if (sigh === '+') {
            fontSize += 2
            gMeme.fontSize = fontSize

            console.log('fontSize:', fontSize);
        }
        else if (sigh === '-') {
            fontSize -= 2
            gMeme.fontSize = fontSize
        }

    } else if (pos === 'down') {
        fontSize = gMeme.fontSizeDown
        if (sigh === '+') {
            fontSize += 2
            gMeme.fontSizeDown = fontSize


        }
        else if (sigh === '-') {
            fontSize -= 2
            gMeme.fontSizeDown = fontSize
        }


    }
}

function restLines() {
    gMeme.line1 = ''
    gMeme.line2 = ''

}