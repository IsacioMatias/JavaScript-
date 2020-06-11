var pvareavel ;
pvareavel = 'Isacio_Matias ' ;

// declaração de um variável string

var vnumero;
vnumero = 19 ;

// declaração de variável number

console.log(pvareavel); // saida

console.log(vnumero); //saida

// operadores 

var num1 ;   
num1 = 20;
var num2 = 30;

console.log('O resultado é ',num1 +num2);// Realizando um operação de adição com saidaaa

// Condicionas
var isacio = 5;
var matias = 5; 
if (isacio == matias){ // estrutura de condições  simpres.
    console.log('Ganhou ');

}else{
	console.log('Bust');
}

// Laço de Repetição while
 var numero1;
 numero1 = 1;
 while(numero1<= 3){ // inicio do laço 
 	   console.log(numero1);
 	   numero1 ++; // 
 }
 
 // função 
 
var fatorial;
fatorial = function fac(n) {return n<2 ? 1 : n*fac(n-1)}; // cal tutorial 
console.log(fatorial(3));