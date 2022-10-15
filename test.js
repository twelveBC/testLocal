const { Users } = require('./models')

let data = {
    username: 'test',
    password: 'test'
}

Users.create(data)