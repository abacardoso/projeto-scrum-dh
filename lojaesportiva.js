var camisas = [
    {
      nome: "Fiorentina Retrô Batistuta",
      preco: 200,
      ano: "1998",
      clube: "Fiorentina",
      qtd: 40,
    },
    {
      nome: "Lazio Retrô",
      preco: 120.54,
      ano: "1978",
      clube: "Lazio",
      qtd: 12,
    },
    {
      nome: "Newll's Old Boys Retrô",
      preco: 150.90,
      ano: null,
      clube: "Newll's Old Boys",
      qtd: 54,
    },
  ];

camisas.push({
      nome: "Arctic Monkeys",
      preco: 89.90,
      ano: "1999",
      clube: null,
      qtd: 26,
})
console.log(camisas)

for(var i=0; i<camisas.length; i++){
    console.log(camisas[i].nome)
}


