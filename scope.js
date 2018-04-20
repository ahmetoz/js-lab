function getDate() {
 var date = new Date();
 function formatDate(){
     return date.toDateString().slice(4);
 }
 return formatDate();
}


// not in scope error because date is scoped inside the function

/*  getDate();
console.log(date);  */

console.log(getDate());

function discountPrices(prices , discount) {
    var discounted = [];
    for (var index = 0; index < prices.length; index++) {
        var discountPrice = prices[index] * (1 - discount);
        var finalPrice = Math.round(discountPrice * 100) / 100;
        discounted.push(finalPrice);
    }
/* 
    this will work because of the function scope variables (var)
    but this is weird in another languages like java. 
    because of hoisting the interpreter will hoist var 
    declarations to the top of the function 


    declaring variable without a keyword like

    discounted = [];

    the variable scope will be in global scope.. !

*/

    console.log(index);
    console.log(discountPrice);
    console.log(finalPrice);

    return discounted;
}

console.log(discountPrices([100, 200, 300], .3));

/* let keyword 
    - block scope {}
*/

function discountPricesLet(prices , discount) {
    let discounted = [];
    for (let index = 0; index < prices.length; index++) {
        let discountPrice = prices[index] * (1 - discount);
        let finalPrice = Math.round(discountPrice * 100) / 100;
        discounted.push(finalPrice);
    }

/*     
    console.log(index);
    console.log(discountPrice);
    console.log(finalPrice); */
    
/*
    uncomment the above code, code will throw a error :

    Exception has occurred: ReferenceError
    ReferenceError: index is not defined

    but if the variable declared with var and not initialized yet 
        the value of the variable will be undefined

    so with let keyword the interpreter will still hoist the declation
        but code will throw a ReferenceError because of block scope.

 */
    return discounted;
}

console.log(discountPricesLet([100, 200, 300], .3));

/* const keyword 
    - block scope {}

    only difference with the let 
        const variables could not be declared after first time.
*/

let name = "Ahmet Oz";
const account = "ahmetoz";

name = "Semih Unaldi"; //no problem 

//uncomment below statement: because of the const code will throw

// account = "semihunaldi"

/* Exception has occurred: TypeError
TypeError: Assignment to constant variable. */


const person = {
    account : "ahmetoz"
}

person.account = "semihunaldi"; //this work because do new assigment..

// so const variables is not immutable 
// seems final keyword for object in java..

console.log(person);

/* 
person = {} 

Exception has occurred: TypeError
TypeError: Assignment to constant variable. */

/*

Soo 

Best practise:
    generally use const by defualt
    if you changing variables like index use let.


 */