function daysToXmas(date) {
    const lafecha = new Date('Dec 25, 2021')
    return Math.ceil((lafecha - date) / 86400000)
}

const date1 = new Date('Dec 1, 2021')
const date2 = new Date('Dec 24, 2021 00:00:01')
const date3 = new Date('Dec 24, 2021 23:59:59')
const date4 = new Date("December 20, 2021 03:24:00")
const date = new Date('Dec 25, 2021')
const date5 = new Date('Dec 26, 2021')
const date6 = new Date('Dec 31, 2021')
const date7 = new Date('Jan 1, 2022 00:00:01')
const date8 = new Date('Jan 1, 2022 23:59:59')
console.log(daysToXmas(date1)) // 24
console.log(daysToXmas(date2)) // 1
console.log(daysToXmas(date3)) // 1
console.log(daysToXmas(date4)) // 5
console.log(daysToXmas(date)) // 0
console.log(daysToXmas(date5)) // -1
console.log(daysToXmas(date6)) // -6
console.log(daysToXmas(date7)) // -7
console.log(daysToXmas(date8)) // -7