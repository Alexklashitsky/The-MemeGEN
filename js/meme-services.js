'use strict'

var gImgs = [
    {
        id: 1,
        url: 'img/meme-imgs (square)/1.jpg',
        keyword: []
    },

    {
        id: 2,
        url: 'img/meme-imgs (square)/2.jpg',
        keyword: []
    },
    {
        id: 3,
        url: 'img/meme-imgs (square)/3.jpg',
        keyword: []
    },
    {
        id: 4,
        url: 'img/meme-imgs (square)/4.jpg',
        keyword: []
    },
    {
        id: 5,
        url: 'img/meme-imgs (square)/5.jpg',
        keyword: []
    },
    {
        id: 6,
        url: 'img/meme-imgs (square)/6.jpg',
        keyword: []
    },
    {
        id: 7,
        url: 'img/meme-imgs (square)/7.jpg',
        keyword: []
    },
    {
        id: 8,
        url: 'img/meme-imgs (square)/8.jpg',
        keyword: []
    },
    {
        id: 9,
        url: 'img/meme-imgs (square)/9.jpg',
        keyword: []
    },
    {
        id: 10,
        url: 'img/meme-imgs (square)/10.jpg',
        keyword: []
    },
    {
        id: 11,
        url: 'img/meme-imgs (square)/11.jpg',
        keyword: []
    },
    {
        id: 12,
        url: 'img/meme-imgs (square)/12.jpg',
        keyword: []
    },
    {
        id: 13,
        url: 'img/meme-imgs (square)/13.jpg',
        keyword: []
    },
    {
        id: 14,
        url: 'img/meme-imgs (square)/14.jpg',
        keyword: []
    },
    {
        id: 15,
        url: 'img/meme-imgs (square)/15.jpg',
        keyword: []
    },
    {
        id: 16,
        url: 'img/meme-imgs (square)/16.jpg',
        keyword: []
    },
    {
        id: 17,
        url: 'img/meme-imgs (square)/17.jpg',
        keyword: []
    },
    {
        id: 18,
        url: 'img/meme-imgs (square)/18.jpg',
        keyword: [],
    }


]
var gMeme = {
    pic: '',
    topLine: {
        line: '',
        fontColor: 'white',
        strokeColor: 'red',
        fontSize: 50,
        textAlign: 'center',
        height: 50,
    },
    buttonline: {
        line: '',
        fontColor: 'white',
        strokeColor: 'red',
        fontSize: 50,
        textAlign: 'center',

        height: 400,
    }

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
    if (pos === 'upper') gMeme.topLine.line = line
    else gMeme.buttonline.line = line


}
function setImg(num) {
    gMeme.pic = 'img' + num
    console.log('num:', num);
    console.log('gMeme:', gMeme);


}
function setFontColor(color, pos) {
    if (pos === 'upper') gMeme.topLine.fontColor = color
    else if (pos === 'down') gMeme.buttonline.fontColor = color

}
function setFontSize(sigh, pos) {
    var fontSize
    if (pos === 'upper') {
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

    } else if (pos === 'down') {
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
}

function moveLineUp() {
    if (gFocusPos === 'upper') {
        var currHeigh = gMeme.topLine.height
        currHeigh -= 2
        gMeme.topLine.height = currHeigh
        console.log('vd');
        console.log('currHeigh:', currHeigh);
    }
    else if (gFocusPos === 'down') {
        var currHeigh = gMeme.buttonline.height
        currHeigh -= 2
        gMeme.buttonline.height = currHeigh
        console.log('vd');
        console.log('currHeigh:', currHeigh);
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
}


function restLines() {
    gMeme.topLine.line = ''
    gMeme.buttonline.line = ''
    gMeme.topLine.height = 50
    gMeme.buttonline.height = 50
}


function focusSet() {
    const focusPoints = ['upper', 'down']

    var idx = focusPoints.findIndex(currFocusPoint => currFocusPoint === gFocusPos)
    if (idx === focusPoints.length - 1) gFocusPos = focusPoints[0]
    else gFocusPos = focusPoints[idx + 1]
    console.log('gFocusPos:', gFocusPos);
    console.log('idx:', idx);
}
function setTextAlign(pos) {
    if (gFocusPos === 'upper') gMeme.topLine.textAlign = pos
    else if (gFocusPos === 'down') gMeme.buttonline.textAlign = pos

}
function setStrokeColor(color) {
    if (gFocusPos === 'upper') gMeme.topLine.strokeColor = color
    else if (gFocusPos === 'down') gMeme.buttonline.strokeColor = color
}




