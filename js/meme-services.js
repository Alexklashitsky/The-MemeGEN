'use strict'
const key = 'MEMEdb'
var gMapOfSearch
var gSearchKes
var gIsMiddleLineActive = false
var gImgs = [
    {
        id: 1,
        url: 'img/meme-imgs (square)/1.jpg',
        keyword: ['trump', 'politician', 'Vulgar']
    },

    {
        id: 2,
        url: 'img/meme-imgs (square)/2.jpg',
        keyword: ['dogs', 'cute', 'couple', 'Labrador']
    },
    {
        id: 3,
        url: 'img/meme-imgs (square)/3.jpg',
        keyword: ['dogs', 'cute', 'couple', 'baby']
    },
    {
        id: 4,
        url: 'img/meme-imgs (square)/4.jpg',
        keyword: ['cat', 'sleep', 'relax']
    },
    {
        id: 5,
        url: 'img/meme-imgs (square)/5.jpg',
        keyword: ['boy', 'strong', 'respect']
    },
    {
        id: 6,
        url: 'img/meme-imgs (square)/6.jpg',
        keyword: ['crazy', 'alien']
    },
    {
        id: 7,
        url: 'img/meme-imgs (square)/7.jpg',
        keyword: ['boy', 'baby', 'surprise']
    },
    {
        id: 8,
        url: 'img/meme-imgs (square)/8.jpg',
        keyword: ['Condescending Wonka', 'wonka', 'crazy']
    },
    {
        id: 9,
        url: 'img/meme-imgs (square)/9.jpg',
        keyword: ['funny', 'baby', 'Laughter']
    },
    {
        id: 10,
        url: 'img/meme-imgs (square)/10.jpg',
        keyword: ['obama', 'laugh', 'politician']
    },
    {
        id: 11,
        url: 'img/meme-imgs (square)/11.jpg',
        keyword: ['boxer', 'hug', 'gay']
    },
    {
        id: 12,
        url: 'img/meme-imgs (square)/12.jpg',
        keyword: ['haim', 'i told yos so', 'righteous']
    },
    {
        id: 13,
        url: 'img/meme-imgs (square)/13.jpg',
        keyword: ['leonardo', 'celebrant', 'champagne', 'actor']
    },
    {
        id: 14,
        url: 'img/meme-imgs (square)/14.jpg',
        keyword: ['actor', 'matrix', 'Morpheus']
    },
    {
        id: 15,
        url: 'img/meme-imgs (square)/15.jpg',
        keyword: ['actor', 'Sean Bean', 'funny']
    },
    {
        id: 16,
        url: 'img/meme-imgs (square)/16.jpg',
        keyword: ['actor', 'picard', 'star-track']
    },
    {
        id: 17,
        url: 'img/meme-imgs (square)/17.jpg',
        keyword: ['politician', 'putin', 'scary']
    },
    {
        id: 18,
        url: 'img/meme-imgs (square)/18.jpg',
        keyword: ['toy', 'cartoon'],
    }


]
var gMeme = {
    id: makeId(),
    pic: '',
    topLine: {
        line: '',
        font: 'impact',
        fontColor: 'white',
        strokeColor: 'red',
        fontSize: 50,
        textAlign: 'center',
        height: 50,
    },
    middleLine: {
        line: '',
        font: 'impact',
        fontColor: 'white',
        strokeColor: 'red',
        fontSize: 50,
        textAlign: 'center',
        height: 200,
    },

    buttonline: {
        line: '',
        font: 'impact',
        fontColor: 'white',
        strokeColor: 'red',
        fontSize: 50,
        textAlign: 'center',
        height: 400,
    }

}
function createMap() {
    var keyWords = []
    for (var i = 0; i < gImgs.length; i++) {
        keyWords = keyWords.concat(gImgs[i].keyword)
    }
    console.log('keyWords:', keyWords);

    var search = keyWords.reduce(function (acc, word) {
        // console.log('Called with ', acc, vote);
        if (!acc[word]) acc[word] = 0;
        acc[word]++
        return acc;
    }, {})

    console.log('search:', search);
    gMapOfSearch = search
    gSearchKes = Object.keys(gMapOfSearch)


}
function doSearch(searchWord) {
    var imgs = gImgs.filter(img =>
        img.keyword.includes(searchWord))
    renderGallery(imgs)

}
function getGallery() {
    var imgs = [...gImgs]
    renderGallery(imgs)



}
function getMeme() {
    renderMeme(gMeme)
    renderDownline(gMeme)
    renderMiddleLine(gMeme)
    getCurrLine()
}
function setLineTxt(txt) {
    var line = txt
    if (gFocusPos === 'upper') gMeme.topLine.line = line
    else if (gFocusPos === 'down') gMeme.buttonline.line = line
    else if (gFocusPos === 'middle') gMeme.middleLine.line = line




}
function addLine() {
    if (!gIsMiddleLineActive && gFocusPos === 'upper') {
        gFocusPos = 'down'
        renderCurrLinePos()
    }
    else if (!gIsMiddleLineActive && gFocusPos === 'down') {
        gIsMiddleLineActive = true
        gFocusPos = 'middle'
        renderCurrLinePos()

    }
}
function getCurrLine() {
    var line
    if (gFocusPos === 'upper') line = gMeme.topLine.line
    else if (gFocusPos === 'down') line = gMeme.buttonline.line
    else if (gFocusPos === 'middle') line = gMeme.middleLine.line
    renderCurrLine(line)
}
function deleteLine() {
    console.log('hi');
    if (gFocusPos === 'upper') gMeme.topLine.line = ''
    else if (gFocusPos === 'down') gMeme.buttonline.line = ''
    else if (gFocusPos === 'middle') {
        gMeme.middleLine.line = ''
        gIsMiddleLineActive = false
    }

}
function setImg(num) {
    gMeme.pic = 'img' + num
    console.log('num:', num);
    console.log('gMeme:', gMeme);


}
function setFontColor(color) {
    if (gFocusPos === 'upper') gMeme.topLine.fontColor = color
    else if (gFocusPos === 'down') gMeme.buttonline.fontColor = color
    else if (gFocusPos === 'middle') gMeme.middleLine.fontColor = color

}
function setFontSize(sigh) {
    var fontSize
    if (gFocusPos === 'upper') {
        fontSize = gMeme.topLine.fontSize
        if (sigh === '+') {
            fontSize += 2
            gMeme.topLine.fontSize = fontSize

            console.log('fontSize:', fontSize);
        }
        else if (sigh === '-') {
            fontSize -= 2
            gMeme.topLine.fontSize = fontSize
        }

    } else if (gFocusPos === 'down') {
        fontSize = gMeme.buttonline.fontSize
        if (sigh === '+') {
            fontSize += 2
            gMeme.buttonline.fontSize = fontSize


        }
        else if (sigh === '-') {
            fontSize -= 2
            gMeme.buttonline.fontSize = fontSize
        }


    }
    else if (gFocusPos === 'middle') {
        fontSize = gMeme.middleLine.fontSize
        if (sigh === '+') {
            fontSize += 2
            gMeme.middleLine.fontSize = fontSize


        }
        else if (sigh === '-') {
            fontSize -= 2
            gMeme.middleLine.fontSize = fontSize
        }

    }
}
function moveLineUp() {
    if (gFocusPos === 'upper') {
        var currHeigh = gMeme.topLine.height
        currHeigh -= 2
        gMeme.topLine.height = currHeigh
    }
    else if (gFocusPos === 'down') {
        var currHeigh = gMeme.buttonline.height
        currHeigh -= 2
        gMeme.buttonline.height = currHeigh
    }
    else if (gFocusPos === 'middle') {
        var currHeigh = gMeme.middleLine.height
        currHeigh -= 2
        gMeme.middleLine.height = currHeigh

    }

}
function moveLineDown() {
    if (gFocusPos === 'upper') {
        var currHeigh = gMeme.topLine.height
        currHeigh += 2
        gMeme.topLine.height = currHeigh
        console.log('vd');
        console.log('currHeigh:', currHeigh);

    }
    else if (gFocusPos === 'down') {
        var currHeigh = gMeme.buttonline.height
        currHeigh += 2
        gMeme.buttonline.height = currHeigh
        console.log('vd');
        console.log('currHeigh:', currHeigh);

    }
    else if (gFocusPos === 'middle') {
        var currHeigh = gMeme.middleLine.height
        currHeigh += 2
        gMeme.middleLine.height = currHeigh

    }

}
function restLines() {
    gMeme.topLine.line = ''
    gMeme.buttonline.line = ''
    gMeme.topLine.height = 50
    gMeme.buttonline.height = 50
}
function focusSet() {

    if (gIsMiddleLineActive) {
        var focusPoints = ['upper', 'middle', 'down']
        changeFocus(focusPoints)
    } else {
        var focusPoints = ['upper', 'down']
        changeFocus(focusPoints)
    }

}
function changeFocus(focusPoints) {
    var idx = focusPoints.findIndex(currFocusPoint => currFocusPoint === gFocusPos)
    if (idx === focusPoints.length - 1) gFocusPos = focusPoints[0]
    else gFocusPos = focusPoints[idx + 1]
    console.log('gFocusPos:', gFocusPos);
    console.log('idx:', idx);
}
function setTextAlign(pos) {
    if (gFocusPos === 'upper') gMeme.topLine.textAlign = pos
    else if (gFocusPos === 'down') gMeme.buttonline.textAlign = pos
    else if (gFocusPos === 'middle') gMeme.middleLine.textAlign = pos
}
function setStrokeColor(color) {
    if (gFocusPos === 'upper') gMeme.topLine.strokeColor = color
    else if (gFocusPos === 'down') gMeme.buttonline.strokeColor = color
    else if (gFocusPos === 'middle') gMeme.middleLine.strokeColor = color
}
function setFont(font) {
    if (gFocusPos === 'upper') gMeme.topLine.font = font

    else if (gFocusPos === 'down') gMeme.buttonline.font = font
    else if (gFocusPos === 'middle') gMeme.middleLine.font = font
    console.log('gMeme.topLine.font:', gMeme.topLine.font);


}
function saveMeme() {
    var memeImage = document.getElementById('my-canvas');
    var imgData = getBase64Image(memeImage);
    var memes = []
    memes = loadFromStorage(key)
    if (memes === null) {
        memes = []
        memes.push(imgData)
        saveToStorage(key, memes)
    }
    else {
        memes.push(imgData)
        saveToStorage(key, memes)

        // var memeImage = document.getElementById('my-canvas');
        // var imgData = getBase64Image(memeImage);
        // localStorage.setItem("imgData", imgData);
        // // var memes = []
        // // memes = loadFromStorage(key)

        // if (memes === null) {
        //     memes = []
        //     memes.push(gMeme)
        //     saveToStorage(key, memes)
        // } else {
        //     memes.push(gMeme)
        //     saveToStorage(key, memes)


    }
}
function getFromStorage() {
    return loadFromStorage(key)
}





