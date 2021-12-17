// function getLine() {
//     var test = document.querySelector('.test')
//     var line = document.querySelector('[name=test-line]').value
//     test.addEventListener('keydown', function (event) {
//         const key = event.key;
//         if (key === "Backspace") {
//             line = line.substring(0, line.length - 1);
//             // alert(key);
//             console.log('line:', line);
//             return false;
//         }
//     });

//     console.log('line:', line);

// }

// var str = '12345'
// var nstr = str.substring(0, str.length - 1)
// console.log('str:', nstr);




// String method(String str) {
//     if (str != null && str.length() > 0 && str.charAt(str.length() - 1) == 'x') {
//         str = str.substring(0, str.length() - 1);
//     }
//     return str;

function renderMem() {

    var dataImage = localStorage.getItem('imgData');
    var bannerImg = document.getElementById('tableBanner');
    bannerImg.src = "data:image/png;base64," + dataImage;
}


function renderMems() {
    var memes = getFromStorage()
    console.log('memes:', memes);
    var i = 0
    var testGallery = document.querySelector('.testGallery')


    var strHtml = ''
    memes.map(meme => {
        // strHtml += `<img class="img${i + 1}" data-num=${i + 1} onclick="onImgClicked(this)" src="img/meme-imgs (square)/${i + 1}.jpg">`
        strHtml += `<img src="" id="pic${i + 1}" alt="fggddddf" />`

        i++
    })

    testGallery.innerHTML = strHtml
    strHtml = ''

    for (var i = 0; i < memes.length; i++) {
        var id = 'pic' + (i + 1)
        console.log('id:', id);

        var dataImage = memes[i]
        var bannerImg = document.getElementById(id);
        bannerImg.src = "data:image/png;base64," + dataImage;



    }
}

