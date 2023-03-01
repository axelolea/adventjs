function contarOvejas(ovejas) {
    // aquí tu magia
    return ovejas.filter((oveja) => oveja.color == 'rojo' && /(a+n+|n+a+)/.test(oveja.name.toLowerCase()))
}

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

const ovejasFiltradas = contarOvejas(ovejas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]

console.log(ovejasFiltradas)