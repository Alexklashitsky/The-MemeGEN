'use strict'
const gNumOfImg = 18
function renderGallery(imgs) {
    var elGallery = document.querySelector('.gallery')
    var strHtml = ''
    for (var i = 0; i < imgs.length; i++) {
        strHtml += `<img class="img${i + 1}" data-num=${i + 1} onclick="onImgClicked(this)" src="${imgs[i].url}">`
    }
    elGallery.innerHTML = strHtml
}
function renderMem() {

    var dataImage = localStorage.getItem('imgData');
    var bannerImg = document.getElementById('tableBanner');
    bannerImg.src = "data:image/png;base64," + dataImage;
}
function renderMems() {
    onCloseModal()
    var memes = getFromStorage()
    console.log('memes:', memes);
    var i = 0
    var gallery = document.querySelector('.gallery')


    var strHtml = ''
    memes.map(meme => {
        strHtml += `<img src="" id="pic${i + 1}" data-id="${makeId()}" alt="cool meme" onclick="renderMemeFromSave(this)" />`

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

function renderMemeFromSave(pic) {
    var dataImage = pic.src
    console.log('img:', dataImage);

    // var elImg = document.querySelector(`#pic2`)
    // console.log('elImg:', elImg);
    document.querySelector('.myCanvas').innerHTML = ''
    var reader = new FileReader()



    var img = new Image()
    // Render on canvas
    // img.onload = renderImg.bind(null, img)
    img.src = dataImage

    console.log('after');
    // reader.readAsDataURL(target.files[0])

    onOpenModal()


    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    // onOpenModal()

}