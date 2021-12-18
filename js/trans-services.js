'use strict'
const gTrans = {
    UNKNOWN: {
        en: 'UNKNOWN',
        he: 'לא הוגדר'
    },
    gallery: {
        en: 'Gallery',
        he: 'גלריה'
    }, memes: {
        en: 'Memes',
        he: 'ממים'
    }, about: {
        en: 'About',
        he: 'אודות'
    }, search: {
        en: 'search',
        he: 'חיפוש'
    }, save: {
        en: 'save',
        he: 'שמור'
    }, share: {
        en: 'Share',
        he: 'שתף'
    }, download: {
        en: 'Download',
        he: 'הורד'

    }, currentLine: {
        en: ' current Line ',
        he: 'השורה הנוכחית',
    }, upper: {
        en: ' current Line ',
        he: 'עליונה',
    }, down: {
        en: ' current Line ',
        he: 'תחתונה',
    },
}
const DEFAULT_LANG = 'en'
var gCurrLang = DEFAULT_LANG;
function getTrans(transKey) {
    const tranLangsMap = gTrans[transKey]
    if (!tranLangsMap) return gTrans['UNKNOWN'][gCurrLang]
    const word = tranLangsMap[gCurrLang]
    if (!word) return tranLangsMap[DEFAULT_LANG]
    return word;
}
function doTrans() {

    var els = document.querySelectorAll('[data-trans]')
    console.log(els);
    els.forEach((el) => {
        const transKey = el.dataset.trans
        el.innerText = getTrans(transKey)
    })
}
function setLang(lang) {
    gCurrLang = lang;
}