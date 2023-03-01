function createXmasTree(height) {
    "use strict"
    // ¡Y no olvides también poner los turrones!
    if(!(1 <= height <= 100)) return
    let three = ''
    for(let i = 1; i <= height; i++)
    {
        const lowdash = '_'.repeat(height - i)
        const leaves = '*'.repeat((i * 2) - 1)
        three += `${lowdash}${leaves}${lowdash}\n`
    }
    const lowdash = '_'.repeat(height - 1)
    const base = `${lowdash}#${lowdash}`
    three += `${base}\n${base}`
    return three
}
console.log(createXmasTree(2))
console.log(createXmasTree(3))
console.log(createXmasTree(5))