'use strict'
var gMeme = {
    pic: 'img1',
    line1: ''



}


getMeme()

function getMeme() {
    var pic = gMeme.pic
    var line = gMeme.line1
    renderMeme(pic, line)
}

function setLineTxt(text) {
    var line = text
    gMeme.line1 = line

}