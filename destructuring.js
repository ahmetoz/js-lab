const user = { }
user.name = "Ahmet Oz"
user.account = "ahmetoz"
user.location = "urla"

//or

const user2 = {
    "name": "Semih Unaldi",
    "account": "semihunaldi",
    "location": "ozdere"
}

// this is first way to extract properties from an object
var name = user.name
var account = user.account
var location = user.location

console.log(user)
console.log(name)
console.log(account)
console.log(location)

//destructuring allows extract multiple properties from object

var {name, account, location} = user2

console.log(user2)
console.log(name)
console.log(account)
console.log(location)

function getUser() {
    return {
        "name": "Semih Unaldi",
        "account": "semihunaldi",
        "location": "ozdere"    
    }
}

var {name, account, location} = getUser()

console.log(name)
console.log(account)
console.log(location)

//for arrayss

var userArr = ["Ahmet", "ahmetoz", "urla"]

var name = userArr[0]
var account = userArr[1]
var location = userArr[2]


console.log(name)
console.log(account)
console.log(location)

//better with destructuring

var [name, account, location] = userArr

//note !! not like 
// var {name, account, location} 

console.log(name)
console.log(account)
console.log(location)


// csv like string..

var csv = "Ahmet,ahmetoz,urla"
var [name, account, location] = csv.split(",") //split returns array

console.log(name)
console.log(account)
console.log(location)

// if the object keys is different from variables like below

var user3 = {
    "n": "Cagrı Aydın",
    "a": "cagriaydin",
    "l": "kadıköy"
}

var {n: name, a: account, l: location} = user3

console.log(name)
console.log(account)
console.log(location)

//on function variables

function setUser(name, id, account, location){
     return {
        "name": name,
        "id": id,
        "account": account,
        "location": location    
    }
}

setUser("cagri", null, "cagriaydin", "kadikoy")
//u must remember the order..

function setUserDest( {name, id, account, location} ){
     return {
        "name": name,
        "id": id,
        "account": account,
        "location": location    
    }
}

//simple way no need to set null
setUserDest({
    name: "cagri",
    location: "kadikoy",
    account: "cagriaydin"
})


//if usign null we can set default values to variables..

function setUserDefaultVars(name, id=null, account, location){
     return {
        "name": name,
        "id": id,
        "account": account,
        "location": location    
    }
}

function setUserDest( {name, id=null, account, location} ){
     return {
        "name": name,
        "id": id,
        "account": account,
        "location": location    
    }
}

// normally variables is undefined

// we should use the before the function like below
// id = id || null
// to set default values
// we can use default variables..
