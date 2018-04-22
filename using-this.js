var name = "Ahmet Oz"

console.log(this) //empty object for nodejs
console.log(this.name) //undefined because this shows empty object name is on global scope.

// on browser this shows global window object not empty object.


var person = {
    name: "Ahmet Oz 2",
    account: "ahmetoz",
    sayName: function () {
        //this will be object itself...
        console.log(this.name)
    }
}

//implicit binding this shows invoked object 
// person. => this is person because sayName invoked from person object.
person.sayName()

// if sayName is not a method of person just a regular function..

function sayName() {
    console.log(this.name) //not object points global scope..
}

var person2 = {
    name: "Ahmet Oz 3",
    account: "ahmetoz",
}

sayName() //how to call this from person's context explicitly
//we can use set the context with call method.
sayName.call(person2) //logs. Ahmet Oz 3

//with call we can also send params to the function
function sayNameWithParams(lang1, lang2, lang3) {
    console.log(this.name + " can write " + lang1 + " " + lang2 + " " + lang3)
}

const languages = ["java", "c#", "javascript"]

//Ahmet Oz 3 can write java c# javascript
sayNameWithParams.call(person2, languages[0], languages[1], languages[2]) 

//what if we can use just array without using languages[0], languages[1], languages[2]

//another function to set context a function is apply for this kind of purpose

sayNameWithParams.apply(person2, languages)

// if we dont want to call function immidiately we can use the bind function.
// bind function does not invoke the function istead of the binde function returns a function

var funcForLaterUse = sayNameWithParams.bind(person2, languages[0], languages[1], languages[2]) 

//call func..
funcForLaterUse()

// the code below logs .. Ahmet Oz 3 can write java c# javascript
funcForLaterUse("a", "b", "c") // it can not be changed like this.



/* NEW BINDING */

var Animal = function (color, name, type) {
    this.color = color
    this.name = name
    this.type = type
}

var zebra = new Animal("black and white", "zorro", "zebra")

/* 

js will create a impilicit this if we call like new Animal..
this object bound the new object being constructed like below.

var Animal = function (color, name, type) {

    //this = {}

    this.color = color
    this.name = name
    this.type = type
}

*/





































