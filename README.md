# projeto-scrum-dh

Resolução do exercicio em grupo na aula de scrum com o enunciado abaixo:

Dinâmica scrum
A turma será divididad em grupos de até no máximo 6 pessoas. Cada grupo deve pegar o tema sorteado no arquivo README.md

Cada grupo deve dividir as funcionalidades entre os integrantes. Vocês terão 10 minutos para:

Desenvolver as funcionalidades indivualmente
Após os 10 minutos, vocês devem realizar uma reunião entre o grupo para ver o andamento de cada um e ver se algum integrante teve dificuldade e se é possível os demais ajudarem ele com a dificuldade.

Em seguida vocês devem em 5 minutos:

Ajustar o código
E para finalizar nos próximos 5 minutos:

Juntar todos os códigos em um arquivo
Lançar o arquivo em um repositório do github
Mandar o link do github no slack

Ecommerce do grupo:
Loja esportiva (roupa, bolas...)
Descrição
"Eu sou gerente de uma loja de artigos esportivos e vendo camisas e alugo outros tipos de produtos, preciso de sistema para gerenciar meu estoque" - Júlia

Funcionalidades
1 - Cadastro de camisas
No array de camisas, adicione um objeto no final desse array e liste os camisas

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
    preco: 150,90,
    ano: null,
    clube: "Newll's Old Boys",
    qtd: 54,
  },
];
2- Cadastro de equipamentos
No array de equipamentos, adicione um objeto no final desse array e liste todos os equipamentos

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
3- Buscar por um cliente
Pegar id do cliente e retorna o mesmo e caso não exista retorne a mensagem "Cliente não encontrado"

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
4- Cadastro de cliente
No array de clientes, adicione um objeto no final desse array e liste os clientes

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
5- Listar clientes entre duas idades
Crie uma função que ao receber a idade inicial e final e em seguida retorne todos os clientes que estão nesse intervalo

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
6- Listar clientes que começam com uma determinada letra
Crie uma função que receba uma letra e retorne todos os clientes que começam com a mesma letra

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
