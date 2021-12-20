'use strict'
var gCanvas
var gCtx
gCanvas = document.querySelector('#my-canvas');
gCtx = gCanvas.getContext('2d');
var gFontColor
var gFontSize
var gFocusPos = 'upper'
var gLeng = 'en'
var isMiddleLineActive = false
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

function init() {
    getGallery()
    addListeners()
    createMap()
    getSearchWord()
    fillPlaceHolders()

}
function addListeners() {
    addMouseListeners()
    addTouchListeners()
}
function addMouseListeners() {
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mousedown', onDown)
    gCanvas.addEventListener('mouseup', onUp)
}
function addTouchListeners() {
    gCanvas.addEventListener('touchmove', onMove)
    gCanvas.addEventListener('touchstart', onDown)
    gCanvas.addEventListener('touchend', onUp)
}
function onDown(ev) {
    const pos = getEvPos(ev)
}
function onMove(ev) {
}
function onUp() {
}
function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft,
            y: ev.pageY - ev.target.offsetTop
        }
    }
    return pos
}
function onUpLoad() {
    document.querySelector('.file-input').click()

}
function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}
function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.myCanvas').innerHTML = ''
    var reader = new FileReader()

    reader.onload = (event) => {
        console.log('onload');
        var img = new Image()
        // Render on canvas
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result
    }
    console.log('after');
    reader.readAsDataURL(ev.target.files[0])
}
function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
}
function onOpenModal() {
    document.querySelector('.gallery').style.display = "none"
    document.querySelector('.modal').style.visibility = "visible"
    renderCurrLinePos()

}
function onCloseModal() {
    document.querySelector('.gallery').style.display = "block"
    document.querySelector('.modal').style.visibility = "hidden"
    restLines()
    getGallery()
}
function onImgClicked(data) {
    console.log('data:', data);

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
    var font = gMeme.topLine.font
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);


    //txt
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = gMeme.topLine.textAlign;
    gCtx.font = `${fontSize}px ${font}`;
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
    var font = gMeme.buttonline.font

    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.font = `${fontSize}px ${font}`;
    gCtx.fillStyle = fontColor;
    gCtx.strokeStyle = strokeColor
    gCtx.strokeText(`${content}`, 200, gMeme.buttonline.height);

    gCtx.fillText(`${content}`, 200, gMeme.buttonline.height);
}
function renderMiddleLine(gMeme) {
    var content = gMeme.middleLine.line
    var fontColor = gMeme.middleLine.fontColor
    var fontSize = gMeme.middleLine.fontSize
    var strokeColor = gMeme.middleLine.strokeColor
    var font = gMeme.middleLine.font

    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.font = `${fontSize}px ${font}`;
    gCtx.fillStyle = fontColor;
    gCtx.strokeStyle = strokeColor
    gCtx.strokeText(`${content}`, 200, gMeme.middleLine.height);

    gCtx.fillText(`${content}`, 200, gMeme.middleLine.height);
}
function renderCurrLine(line) {
    document.querySelector('[name=line]').value = line
}
function onSave() {
    saveMeme()
    onCloseModal()
}
function onClick() {
    var elImput = document.querySelector('.line')
    var line = document.querySelector('[name=line]').value
    elImput.addEventListener('keydown', function (event) {
        const key = event.key;
        if (key === "Backspace") {
            line = line.substring(0, line.length - 1);
            // alert(key);
            console.log('line:', line);
            setLineTxt(line)
            getMeme()
            return false;
        }
    });
    setLineTxt(line)

    getMeme()

}
function onAddLine() {
    addLine()
}
function onDeleteLine() {
    deleteLine()
    getMeme()
}
function onFontColorChange() {
    var fontColor = document.querySelector('[name=fontColor]').value
    setFontColor(fontColor)
    getMeme()
}
function onStrokeColorChange() {
    var strokeColor = document.querySelector('[name=strokeColor]').value
    console.log('strokeColor:', strokeColor);
    setStrokeColor(strokeColor)
    getMeme()

}
function onIncrease() {
    setFontSize('+')
    getMeme()
}
function onDecrease() {
    setFontSize('-')
    getMeme()
}
function onFocusSet() {
    focusSet()
    renderCurrLinePos()
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
function onMemeClick(pic) {
    console.log('pic:', pic);
    console.log('hi');
}
function renderCurrLinePos() {
    const elLine = document.querySelector('.currLine span')
    // console.log('elLine:', elLine);
    if (gFocusPos === 'upper') elLine.innerText = ' ' + '🔼'
    else if (gFocusPos === 'middle') elLine.innerText = ' ' + '◀️'
    else if (gFocusPos === 'down') elLine.innerText = ' ' + '🔽'



}
function onAbout() {
    var test = document.querySelector('.gallery')
    onCloseModal()
    test.innerText = makeLorem(400)
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
    var currFont = document.querySelector('[name=font]').value
    console.log('currFont:', currFont);
    setFont(currFont)
    getMeme()



}
function onChengeLeng() {
    var elFlag = document.getElementById('flag');
    console.log('Elflag:', elFlag);



    console.log('hi');
    if (gCurrLang === 'en') {
        gCurrLang = 'he'
        elFlag.src = "icons/united-kingdom.png"
        document.body.classList.add('rtl')
        setLang('he')
        doTrans()
        fillPlaceHolders()

    } else {
        gCurrLang = 'en'
        elFlag.src = "icons/israel.png"
        setLang('en')
        document.body.classList.remove('rtl')
        doTrans()
        fillPlaceHolders()
    }



}
function onStrokeColor() {
    document.querySelector('.strokeColor').click()
}
function onFontColor() {
    document.querySelector('.color').click()
}
function onSearch() {
    var searchWord = document.querySelector('.search').value
    doSearch(searchWord)
    searchWord = ''
    // onCloseModal()

}
function renderSearchWord(keys) {
    var elSearchCloud = document.querySelector('.search-cloud')
    var strHtml = ''
    for (var i = 0; i < 18; i++) {
        var key = keys[i]
        strHtml += `<p class="search-keys" onclick="onSearchKey(this)" data-value="${key}">${key}</p>`
    }
    // var i = 0
    // keys.forEach((key) => {
    //     strHtml += `<p class="search-keys" data-vale="${key}">${key}</p>`
    //     i++
    //     if (i > 18) return
    //     console.log('i:', i);
    // })
    elSearchCloud.innerHTML = strHtml
}
function onSearchKey(key) {
    doSearch(key.dataset.value);



}
function fillPlaceHolders() {
    var search = document.querySelector('.searchcont')
    var lineInput = document.querySelector('.line-input')
    if (gCurrLang === 'en') {
        lineInput.innerHTML = ` <input type="text" class="line" name="line" onkeypress="onClick()" placeholder="write something up">`
        search.innerHTML = `<input class="search" onchange="onSearch()" type="search" list="search" placeholder="search">`
    }

    else {
        search.innerHTML = `<input class="search" onchange="onSearch()" type="search" list="search" placeholder="חיפוש">`
        lineInput.innerHTML = ` <input type="text" class="line" name="line" onkeypress="onClick()" placeholder="תכתוב משהו...">`
    }
}
