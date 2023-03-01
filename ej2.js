function listGifts(letter) {
    "use strict"
    const clean_letter = letter.replace(/\s+/g, ' ').trim()
    const list = clean_letter.split(' ').filter(el => !(/^_/.test(el)))
    return list.reduce((acc, el) => {
        acc[`${el}`] = acc[`${el}`] ? acc[`${el}`]+=1 : 1
        return acc
    }, {})
}

const carta = '    bici coche   balón _playstation bici coche    peluche'
const regalos = listGifts(carta)

console.log(regalos)
/*
{
    bici: 2,
    coche: 2,
    balón: 1,
    peluche: 1
}
*/