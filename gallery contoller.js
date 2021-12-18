'use strict'
const gNumOfImg = 18





function renderGallery() {
    var elGallery = document.querySelector('.gallery')
    var strHtml = ''
    for (var i = 0; i < gNumOfImg; i++) {
        strHtml += `<img class="img${i + 1}" data-num=${i + 1} onclick="onImgClicked(this)" src="img/meme-imgs (square)/${i + 1}.jpg">`
    }
    elGallery.innerHTML = strHtml
}


function renderMem() {
    var dataImage = localStorage.getItem('imgData');
    var bannerImg = document.getElementById('tableBanner');
    bannerImg.src = "data:image/png;base64," + dataImage;
}


function renderMems() {
    var memes = getFromStorage()
    console.log('memes:', memes);
    var i = 0
    var gallery = document.querySelector('.gallery')


    var strHtml = ''
    memes.map(meme => {
        // strHtml += `<img class="img${i + 1}" data-num=${i + 1} onclick="onImgClicked(this)" src="img/meme-imgs (square)/${i + 1}.jpg">`
        strHtml += `<img src="" id="pic${i + 1}" data-id="${makeId()}" alt="cool meme" onclick="onMemeClick(this)" />`

        i++
    })

    gallery.innerHTML = strHtml
    strHtml = ''

    for (var i = 0; i < memes.length; i++) {
        var id = 'pic' + (i + 1)
        console.log('id:', id);

        var dataImage = memes[i]
        var bannerImg = document.getElementById(id);
        bannerImg.src = "data:image/png;base64," + dataImage;

    }
}





// function renderMemes() {

//     var dataImage = localStorage.getItem('imgData');
//     var bannerImg = document.getElementById('tableBanner');
//     bannerImg.src = "data:image/png;base64," + dataImage;


    // var elImg = document.querySelector('.gallery');
    // var dataImage = localStorage.getItem('imgData');
    // elImg.innerHTML = `<img src="data:image/png;base64," +${dataImage}  />`

    // elImg.src = "data:image/png;base64," + dataImage;


    // var elGallery = document.querySelector('.gallery')
    // var strHtml = ''
    // const memes = getFromStorage()
    // console.log('memes:', memes);

// }