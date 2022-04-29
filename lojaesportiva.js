// //1 - Cadastro de camisas
// //No array de camisas, adicione um objeto no final desse array e liste os camisas
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

//2 - Cadastro de equipamentos
//No array de equipamentos, adicione um objeto no final desse array e liste todos os equipamentos
var equipamentos = [
    {
      nome: "Estreita Eletrônica",
      tipo: "estreita",
      estaAlugado: true,
      dataDeDevolucao: "01/06/2022",
    },
    {
      nome: "Conjunto de bolas de futebol",
      tipo: "artigos esportivos",
      estaAlugado: false,
      dataDeDevolucao: null,
    },
    {
      nome: "Estacao de musculação",
      tipo: "academia",
      estaAlugado: true,
      dataDeDevolucao: "05/05/2022",
    },
  ];
​
  equipamentos.push({
    nome: "Kit de Anilhas",
      tipo: "academia",
      estaAlugado: true,
      dataDeDevolucao: "10/12/2022",
  })
​  console.log(equipamentos)

for(var i=0; i<equipamentos.length; i++){
    console.log(equipamentos[i].nome)
}


// //4- Cadastro de cliente
// //No array de clientes, adicione um objeto no final desse array e liste os clientes
var clientes = [
    {
      id: 1,
      nome: "Rogério Lucas",
      sobrenome: "Silva",
      idade: 30,
      contato: "4002-8922",
    },
    {
      id: 2,
      nome: "Roberto Carlos",
      sobrenome: "Braga",
      idade: 70,
      contato: "(11) 9 1111-1111",
    },
    {
      id: 3,
      nome: "Sylvester",
      sobrenome: "Stallone",
      idade: 80,
      contato: "(22) 9 2222-2222",
    },
  ];
​
  clientes.push({
    id: 4,
    nome: "Bruno",
    sobrenome: "Sanches",
    idade: 30,
    contato: "(17) 999-99999",
});

console.log(clientes)
​
for (const nome in clientes) {
      console.log(clientes[nome]);
  } 

//5- Listar clientes entre duas idades
//Crie uma função que ao receber a idade inicial e final e em seguida retorne todos os clientes que estão nesse intervalo
var clientes = [
    {
      id: 1,
      nome: "Rogério Lucas",
      sobrenome: "Silva",
      idade: 30,
      contato: "4002-8922",
    },
    {
      id: 2,
      nome: "Roberto Carlos",
      sobrenome: "Braga",
      idade: 70,
      contato: "(11) 9 1111-1111",
    },
    {
      id: 3,
      nome: "Sylvester",
      sobrenome: "Stallone",
      idade: 80,
      contato: "(22) 9 2222-2222",
    },
  ];
  
  function filtrarIdade (idadeInicial, idadeFinal){
      const clientesPorIdade = clientes.filter((cliente) => {
          if(cliente.idade >= idadeInicial && cliente.idade <= idadeFinal)
          return true
      })
      return clientesPorIdade
  }
 const resultado = filtrarIdade(20,40)
  console.log(resultado)