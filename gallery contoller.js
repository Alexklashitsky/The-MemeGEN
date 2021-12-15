'use strict'
const gNumOfImg = 2


renderGallery()


function renderGallery() {
    var elGallery = document.querySelector('.gallery')
    var strHtml = ''
    for (var i = 0; i < gNumOfImg; i++) {
        strHtml += `<img class="img${i + 1}" data-num=${i + 1} onclick="onImgClicked(this)" src="img/meme-imgs (square)/${i + 1}.jpg">`
    }
    elGallery.innerHTML = strHtml
}