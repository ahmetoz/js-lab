function objectify (key, value) {
    let obj = {}
    // key is property name
    obj[key] = value
    return obj
}

//same with the computed property names:
function objectify2(key, value){
    return {
        [key]: value
    }
}

console.log(objectify('ahmetoz', 27))
console.log(objectify2('ahmetoz', 27))
