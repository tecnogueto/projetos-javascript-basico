// boleano || Verdadeiro ou falso

// 0 = False // False
// 1 = True // Verdadeiro

// Se o valor é 'não' == Verdadeiro || Se valor for diferente de 'não' == falso

// exemplos de verficação

/*

** Verificando se é verdadeiro ou falso
const nao = 'não';

if(nao == 'não') alert('É verdeiro');

if(nao == 'nao') alert('É verdeiro');


** Verificando valor e tipo
const numero = 100;

if(numero == "100") alert("chamou o alerta"); verificação simples = verificar se o valor é igual

if(numero === "100") alert("chamou o alerta"); verificação complexa = verifica se o valor e o tipo são iguais
*/

// Variaveis
var valor = 'ValorDeVariavel'; // Efeito global !*** Não usar*** !
const valorConst = 'ValorVariavel'; // Não pode mudar o valor na execução do programa
let valorLet = 'ValorLet'; // Pode mudar o valor na execução do programa

// O que posso guardar em variaveis
const verdadeiroOuFalso = false;
const numeros = 123321;
const float = 1.2;
// const funcaoAlerta = alert();

// Operações aritimeticas

// + soma
// - subtração
// * mutiplição
// / divisão
// ** exponenciação
// % modulo (resto da divisão)
// == ou === || 1 + 1 == 2 ou 1 + 1 === 2 saber se o resultado é verdadeiro.
// = atribição de valor

// ++ incremento
// -- decremento

// !== Diferente
// < Menor que
// > Maior que
// <= Menor ou igual
// >= Maior ou igual
// ? Valor ternario ex: numeroUm >= numeroDois ? 'Sim menor ou igual' : 'Não é menor ou igual';

// E &&
// OU ||
// ! Negação

// Tipos de dados
// typeof = serve para verificar o tipo de um determinado elemento, ex: typeof alert()
// string = tudo que for referente a texto. '' ou ""
// number = tudo que for numero é igual a number. ex: 1; 2;
// double/float = tudo for numero com casa decimais. ex: 1.2; 400.1;
// boolean = tudo que for verdeiro ou falso. ex: const boleano = true;
// null = quando não tem nada ou nulo
// undefined = quando o valor não foi definido

// Ferrementas de interação com o navegador
// alert = Vai mostrar um popup pra gente
// confirm = Vai mostrar um popup pra gente esperando a nossa confirmação e ele retorna um boleano, ex: confirm("Você concorda com os temos do site?");
// prompt = Vai mostrar um input do tipo texto e vamos poder intergir com ele, ex: prompt("Qual é o seu nome?")

// Login
// qual o nome usuário
// qual a senha
// se logou ou não

//Exemplo da aula
// const nomeUsuario = 'rodrigo';
// const senha = '123321';
// const perguntaUm = prompt('Qual é seu usuário?');
// const perguntaDois = prompt('Qual é a sua senha?');
// const confirmarSuaEntrada = confirm('Confima que você é você?');

// if (
//   nomeUsuario === perguntaUm &&
//   senha === perguntaDois &&
//   confirmarSuaEntrada
// ) {
//   alert('Você logou');
// } else {
//   alert('Você não logou');
// }

// condicionais

// const nomeUsuario = 'rodrigo';
// const senha = '123321';
// const perguntaUm = prompt('Qual é seu usuário?');
// const perguntaDois = prompt('Qual é a sua senha?');
// // const confirmarSuaEntrada = confirm('Confima que você é você?');

// if (nomeUsuario === perguntaUm) {
//   alert('Você logou');
// } else if (senha === perguntaDois) {
//   alert('Você logou, mas logou só com a senha');
// } else {
//   alert('Você não logou');
// }

// const dia = prompt('Qual é o dia da semana?');

// if (nomeUsuario === perguntaUm) {
//   alert('Você logou');
// } else if (senha === perguntaDois) {
//   alert('Você logou, mas logou só com a senha');
// } else {
//   alert('Você não logou');
// }

// switch (dia) {
//   case 'segunda':
//     alert('Hoje é segunda :(');
//     break;
//   case 'terca':
//     alert('Hoje é minha terça tá parecendo segunda :/');
//     break;
//   case 'quarta':
//     alert('Hoje é quarta :|');
//     break;
//   case 'quinta':
//     alert('Hoje é quinta :)');
//     break;
//   case 'sexta':
//     alert('Hoje é sexta :D SEXTOU!!!');
//     break;
//   default:
//     alert('Não achei nenhum dia da semana :(');
// }

// Laços de repetição

// let passos;
// const metaDePassos = 1000;

// for (passos = 1; passos <= metaDePassos; passos++) {
//   console.log(`já dei ${passos} passos`);
//   if (passos === metaDePassos) {
//     alert('Você atigiu sua meta diaria de passos, parabens!');
//   }
// }

// Arrays
// Arrays sempre começam na posição ZERO.

// const diaDaSemana = [
//   'segunda', // posição no array 0
//   'terça', // posição no array 1
//   'quarta', // posição no array 2
//   'quinta', // posição no array 3
//   'sexta', // posição no array 4
//   'sabado', // posição no array 5
//   'domingo', // posição no array 6
// ];

// const dia = prompt('Qual é o dia da semana?');

// switch (dia) {
//   case diaDaSemana[0]:
//     alert('Hoje é segunda :(');
//     break;
//   case diaDaSemana[1]:
//     alert('Hoje é minha terça tá parecendo segunda :/');
//     break;
//   case diaDaSemana[2]:
//     alert('Hoje é quarta :|');
//     break;
//   case diaDaSemana[3]:
//     alert('Hoje é quinta :)');
//     break;
//   case diaDaSemana[4]:
//     alert('Hoje é sexta :D SEXTOU!!!');
//     break;
//   case diaDaSemana[5]:
//     alert('Sabadou!!!');
//     break;
//   case diaDaSemana[6]:
//     alert('De novo já é domingo :(');
//     break;
//   default:
//     alert('Não achei nenhum dia da semana :(');
// }

// Objetos
// Objeto é um tipo de dado que contém uma coleção de propriedades organizadas com chave e valor;

let estudantes = [
  {
    nome: 'Rodrigo Ribeiro',
    idade: 34,
    profissao: 'Desenvolvedor',
    turma: 'Turma 1',
    temTrabalho: false,
  },
  {
    nome: 'Edmar Santos',
    idade: 45,
    profissao: 'Desenvolvedor',
    turma: 'Turma 2',
    temTrabalho: true,
  },
  {
    nome: 'Ludmila Garcia',
    idade: 18,
    profissao: 'Desenvolvedora',
    turma: 'Turma 1',
    temTrabalho: false,
  },
  {
    nome: 'Natalia Garcia',
    idade: 20,
    profissao: 'Ux Designer',
    turma: 'Turma 2',
    temTrabalho: true,
  },
];
console.log(estudantes.length);

// Exemplo usando o map
// estudantes.map(function (estudante) {
//   console.log(estudante.nome, estudante.idade);
// });

// Exemplo filter
// const resultadoFiltro = estudantes.filter(function (estudante) {
//   return estudante.idade <= 35;
// });

// Exemplo find
// const resultadoEncontrar = estudantes.find(function (estudante) {
//   return estudante.idade <= 35;
// });

// console.log(resultadoEncontrar);

// const estudantes = new Object();

// estudantes.nome = 'Aline';
// estudantes.idade = 25;
// estudantes.profissao = 'Desenvolvedora';
// estudantes.turma = 'Turma 1';
// estudantes.temTrabalho = true;

//Pegando valores do objeto
// console.log('Nome: ', estudante.nome);
// console.log('Idade: ', estudante.idade);
// console.log('Profissão: ', estudante.profissao);
