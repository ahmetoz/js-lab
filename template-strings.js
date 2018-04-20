function welcomeMsg(firstName, lastName, email){
    return 'Hello, ' + firstName + ' ' + lastName + ' - \"' + email + '\".'
}

console.log(welcomeMsg('ahmet', 'oz', 'bilmuhahmet@gmail.com'))


function welcomeMsg2(firstName, lastName, email){
    return `Hello, ${firstName}  ${lastName} - "${emai}".`
}

console.log(welcomeMsg('ahmet', 'oz', 'bilmuhahmet@gmail.com'))

//a good example of js template..
function welcomeTemplate(firstName, lastName, email) {
    return `<div>
                <h1>Hello</h1>
                <h2>${firstName} ${lastName}</h2> 
                <h2>${email}</h2>
            </div>`
}