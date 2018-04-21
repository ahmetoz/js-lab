// function declaration
function add(x, y) {
    return x + y
}

//function expression
var add = function (x, y) {
    return x + y
}

// lambda expression
var add = (x, y) => x + y

// almost same examples. not different or usefull

//but with anonymous functions.

users = ["user1", "user2", "user3"]

users.map(function(user){
    console.log(user)
    //
})

//or

users.map(user => console.log(user))
