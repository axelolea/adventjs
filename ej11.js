function shouldBuyFidelity(times) {
    if (times <= 0)
    {
        return false
    }
    const ticket = 12
    const percentage = 0.75
    const fidelity = 250 + ((ticket * percentage) * ((1 - Math.pow(percentage, times))/(1 - percentage)))
    return times * ticket > fidelity
}
console.log(shouldBuyFidelity(0)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(1)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)) // true -> Mejor comprar tarjeta fidelidad