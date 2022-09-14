// Iteration 1: Names and Input
let hacker1 = "ironhaker";
console.log(`The driver's name is: ${hacker1}`);

let hacker2 = 'chrome';
console.log(`The navegator's name is: ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length}`);
}

// Iteration 3: Loops
//1ra Opcion
//console.log(hacker1.toUpperCase().split('').join(' '));
let separando = '';

for(let i = 0; i < hacker1.length; i++){
    separando += hacker1.charAt(i) + ' ';
    //separando += ' ';
}
separando = separando.toUpperCase();

console.log(separando);

//caracteres del nombre del navegante, en orden inverso.

let lenguajeIvertido = hacker2.split('').reverse().join('');
console.log(lenguajeIvertido);

 /*if(hacker1 > hacker2){
    console.log('1');
}else if(hacker1 < hacker2){
    console.log('2');
}else {
    console.log('3');
}  */

//Ejercicio 3.3

/*  for(let i = 0; i < hacker1.length; i++){ 
for(let j = 0; j < hacker2.length; j++){
}
} 

if(hacker1 < hacker2){
    console.log("The driver's name goes first.");
}else if(hacker1 > hacker2){
console.log('Yo, the navigator goes first definitely.')
}else {
    console.log('What?! You both have the same name?');
}
 */

 let nano = hacker1.localeCompare(hacker2);
 
 if (nano == -1){
    console.log("The driver's name goes first.")
 }else if(nano == 0){
    console.log("What?! You both have the same name?")
 }else{
    console.log("Yo, the navigator goes first definitely.")
 }