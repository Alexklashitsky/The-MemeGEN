'use strict'
var gMeme = {
    pic: '',
    line1: '',
    fontColor: 'white',
    fontSize: 50,
    line2: 'sgdgrgf',
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

function setLineTxt(text) {
    var line = text
    gMeme.line1 = line
}
function setImg(num) {
    gMeme.pic = 'img' + num
    console.log('num:', num);
    console.log('gMeme:', gMeme);


}
function setFontColor(color) {
    gMeme.fontColor = color
}
function setFontSize(sigh) {
    var fontSize = gMeme.fontSize
    if (sigh === '+') {
        fontSize += 2
        gMeme.fontSize = fontSize
        console.log('fontSize:', fontSize);
    }
    else {
        fontSize -= 2
        gMeme.fontSize = fontSize
        console.log('fontSize:', fontSize);
    }


}