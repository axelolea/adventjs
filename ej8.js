function maxProfit(prices)
{
    return prices.reduce((acc, el, index, arr) => {
        if (index >= (arr.length - 1)) return acc
        arr.slice(index + 1).forEach(element => {
            const value = element - el
            if (value <= 0){
                return acc
            }
            if (value > acc){
                acc = value
            }
        }); 
        return acc
    },-1)
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
// maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
// maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70) 

console.log(maxProfit(pricesBtc))
// console.log('<-- hola :D -->')
console.log(maxProfit(pricesEth))
console.log('uwu')