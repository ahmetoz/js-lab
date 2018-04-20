function formatMessage(name, id, avatar) {
    return {
        name: name,
        id: id,
        avatar: avatar,
        timestamp: Date.now()
    }
}

//with es6 shortand property names

// name, id and avatar is the same exact key with the value

function formatMessage(name, id, avatar) {
    return {
        name,
        id,
        avatar,
        timestamp: Date.now()
    }
}

//With method 

function formatMessage(name, id, avatar) {
    return {
        name,
        id,
        avatar,
        timestamp: Date.now(),
        save: function () {
            //save message
        }
    }
}

//omitting function keyword
function formatMessage(name, id, avatar) {
    return {
        name,
        id,
        avatar,
        timestamp: Date.now(),
        save () {
            //save message
        }
    }
}

var actions = {
    sayName: function () {
      alert(this.name)
    },
    takeStep: function () {
      this.step++
    }
}
// to..

var actions = {
    sayName () {
      alert(this.name)
    },
    takeStep () {
      this.step++
    }
  }


  function getUser (username) {
    const email = getEmail(username)
    return {
      username: username,
      email: email
    }
  }

  //to...

  function getUser (username) {
    const email = getEmail(username)
    return {
      username,
      email
    }
  }
  