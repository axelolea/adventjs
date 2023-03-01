function sumPairs(numbers, result) {
    // ¡Y no olvides compartir tu solución en redes!
    return numbers.reduce((acc, el, index, arr) => {
        arr.slice(index + 1).forEach(element => {
            if ((element + el) == result && !acc) acc = [el, element]
        });
        return acc
    }, null) 
}

let result = sumPairs([3, 5, 7, 2], 10) // [3, 7]
console.log(result)
result = sumPairs([-3, -2, 7, -5], 10) // null
console.log(result)
result = sumPairs([2, 2, 3, 1], 4) // [2, 2]
console.log(result)
result = sumPairs([6, 7, 1, 2], 8) // [6, 2]
console.log(result)
result = sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]
console.log(result)