function isValid(letter) {
    const balance = letter.split('').reduce((acc, el) => {
        if (el == '(') return acc -= 1
        else if (el == ')') return acc += 1
        return acc
    }, 0);
    if (balance != 0) return false
    return /\([^\{\}\[\]\(\)]+\)/.test(letter)
}

const test1 = "bici coche (balón) bici coche peluche" // -> ✅
const test2 = "(muñeca) consola bici" // ✅
const test3 = "bici coche (balón bici coche" // -> ❌
const test4 = "peluche (bici [coche) bici coche balón" // -> ❌
const test5 = "(peluche {) bici" // -> ❌
const test6 = "() bici" // ❌
const test7 = "(()) bici" // ❌
const test8 = "(a() bici (a)" // ❌
console.log(isValid(test1))
console.log(isValid(test2))
console.log(isValid(test3))
console.log(isValid(test4))
console.log(isValid(test5))
console.log(isValid(test6))
console.log(isValid(test7))
console.log(isValid(test8))