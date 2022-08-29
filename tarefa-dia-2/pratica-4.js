let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

produtoA.nome = "camiseta"
produtoA.valor = 100
produtoA.internacional = false

console.log (produtoA.nome)


if (produtoA.internacional  == false) {
    console.log (produtoA.valor * 1.120)
} else {
console.log (produtoA.valor * 1.20)
}

produtoB.nome = "perfume"
produtoB.valor = 200
produtoB.internacional = true

console.log (produtoB.nome)


if (produtoB.internacional == false) {
    console.log (produtoB.valor * 1.12)
} else {
console.log (produtoB.valor * 1.20)
}
 
produtoC.nome = "sandália"
produtoC.valor = 120
produtoC.internacional = true

console.log (produtoC.nome)


if (produtoC.internacional == true) {
    console.log (produtoC.valor * 1.12)
} else {
console.log (produtoC.valor * 1.20)
}
 


