// ctrl + / = comentar   ctrl + L = limpar console

// alert("Hello World!");
// console.log("Ola Mundo!");
// prompt("Escreva seu Nome: \n")  typeof

// var sobrenome = prompt ("Escreva seu Sobrenome: \n")
// var myName = "Mike " + sobrenome
// var myAge = 20;
// .length - usado para contar caracters
// .slice(0, 10); - usado para pegar um caracter
// .toLowerCase(); - Usado para deixar em letra minuscula
// .toUpperCase(); - Usado para deixar em letra maiuscula
// var texto = "Hello World!";

// var nome = prompt("Nome: ")
// nome = nome.slice(0, 1).toUpperCase() + nome.slice(1, nome.length).toLowerCase();

// console.log(nome);

// function apresenta(){
//     alert("Hey, eu sou o Mike!")
// }

// // function call

// apresenta()

// function soma(){
//     var a = parseInt(prompt("A: "));
//     var b = parseInt(prompt("B: "));
//     return a + b
// }
// var res = soma();

// function soma(a, b){
//     return a + b
// }
// var res = soma(10, 4)
// console.log(res)

// function soma(nome, sobrenome){

    
    
//     return nome.slice(0, 1).toUpperCase() + nome.slice(1, nome.length).toLowerCase() + " " + sobrenome.slice(0, 1).toUpperCase() + sobrenome.slice(1, sobrenome.length).toLowerCase();
// }
//     var nome = prompt("Nome: ");
//     var sobrenome = prompt("Sobrenome: ");
//     console.log(soma(nome, sobrenome))



// for (var i = 0; i < 5; i++){
//     console.log(i)
// }

// var numerotabuada = prompt("Qual tabuada?: ")

// for (var i = 1; i < 11; i++){
//     if ((i * numerotabuada) % 2 === 0){
//         console.log(numerotabuada + " x " + i + " = " + (i * numerotabuada) + " => PAR")
//     }else{ 
//         console.log(numerotabuada + " x " + i + " = " + (i * numerotabuada) + " => IMPAR")
//     }
// }

// var idade = prompt("Qual sua nota?: ");

// if (idade >= 110) {
//     alert("Fantasia muito em");
// } else if (idade >= 18) {
//     alert("Maior de Idade");
// } else if (idade >= 13) {
//     alert("Menor de Idade");
// } else if (idade >= 0) {
//     alert("criança");
// }
// else {
//     alert("isso existe??");    
// }
// var estaChovendo = false;

// if (estaChovendo){
//     console.log("saia com um guarda-chuva");
// }else{
//     console.log("aproveite o dia ensolarado");
// }

// var nota = prompt("Qual sua nota?: ");

// if (nota >= 90) {
//     alert("parabens! voce tirou nota A");
// } else if (nota >= 80) {
//     alert("parabens! voce tirou nota B");
// } else if (nota >= 70) {
//     alert("muito bom! voce tirou nota C");
// }
// else {
//     alert("estude um pouco mias. voce tirou nota D");
//     }

// var nota = prompt("Qual sua Nota: ");
//     if (nota >= 90){
//         alert("A+")
//     }
//     else if (nota >= 80){
//         alert("B")
// }



// var frutas = ["Maça", "Banana", "Laranja", "Uva"];

// console.log(frutas[0]);

// // frutas[4] = "kiwi"
// // console.log(frutas)

// frutas.push("melancia")
// console.log|(frutas)

// frutas.splice(1,2)
// console.log(frutas)

// var ultimafruta = frutas.pop()
// console.log(ultimafruta)
// console.log(frutas)

// console.log(frutas.length)


// var a = 3
// var b = 2

// console.log(a + b);

// console.log(a - b);

// console.log(a / b);

// console.log(a % b);

// console.log(a * b);

// console.log(a ** b);

// console.log(Math.abs(-5))

// console.log(Math.abs(5))


// console.log(Math.pow(2, 3))

// console.log(Math.sqrt(144))

// console.log(Math.round(3.4))
// console.log(Math.round(3.5))

// console.log(Math.floor(3.9))
// console.log(Math.ceil(3.1))

// console.log(Math.ceil(Math.random() * 10))


// var i = 0;
// while (i < 5) {
//     console.log(i)
//     i++
// }
// alert("loop encerrado!")

// var numerotabuada = prompt("Tabuada:  ")
// var i = 1

// while (i < 11){
// if ((i * numerotabuada) % 2 === 0){
//          console.log(numerotabuada + " x " + i + " = " + (i * numerotabuada) + " => PAR");
// }else{ 
//          console.log(numerotabuada + " x " + i + " = " + (i * numerotabuada) + " => IMPAR");
// }
// i++;
// }





















// Desafio_8

// var seuNome = prompt("Digite seu nome:  Ex. Fabio")
// var suaIdade = prompt("Digite sua idade: Ex. 100")


// var mensagem = "" + seuNome + "" + suaIdade + ""
// alert(mensagem)


// alert("Seu nome é: \n" + seuNome + "\ne você tem: \n" + suaIdade + " Anos")





// Desafio_9

// var tweet = prompt("Escreva seu Tweet: \n");
// tweet = tweet.slice(0, 140);
// alert(tweet + "\n\n O Texto Maximo é de 140 !");


// console.log(tweet.length);


// DESAFIO 10

// function soma(nome, sobrenome){

    
    
//     return nome.slice(0, 1).toUpperCase() + nome.slice(1, nome.length).toLowerCase() + " " + sobrenome.slice(0, 1).toUpperCase() + sobrenome.slice(1, sobrenome.length).toLowerCase();
// }
//     var nome = prompt("Nome: ");
//     var sobrenome = prompt("Sobrenome: ");
//     console.log(soma(nome, sobrenome))


//     DESAFIO 11

    // function parametro(a, r, b){
//     return (a * r ** b);
// }
// var res = parametro(3.14, 8, 2);
// console.log(res)

//raio é qualquer valor !

// COMO FAZER !

// function areaCircunferencia(raio){
//     return (3.14 * raio ** 2);
// }
// var raio = prompt("Entre com o valor do raio: ")

// var res = areaCircunferencia(raio)

// console.log  

// DESAFIO 12

// var lista = []
// function fizzBuzz(numero) {
//     if (numero % 3 === 0 && numero % 5 === 0){
//         lista.push("FizzBuzz")
//     }
//     else if (numero % 3 === 0){
//         lista.push("Fizz")
//     }
//     else if (numero % 5 === 0){
//     lista.push("Buzz")
//     }
//     else{
//         lista.push(numero)
//     }
// }
// for (var i = 1; i < 16; i++){
//     fizzBuzz(i)
// }
// console.log(lista)


// DESAFIO 13

// var senha = prompt("Digite sua senha: ")
// while (senha.length !== 6) {
//     alert("Quantidade de digitos invalido");
//     var senha = prompt("Digite sua senha: ")
// }
// alert("Bem-Vindo ao Sistema")


// !== < diferente de