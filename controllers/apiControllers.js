const { Users } = require('../models')
const passport = require('../node_modules/passport')

class API {
    static getTitle(req,res) {
        res.render('register')
    }

    static async regis(req,res) {
        try {
            const { username, password } = req.body
            let dataUser = { username, password}
            const users = await Users.findOne({ where: { username:username} } )
            if (users) {
                return res.send('username sudah terdaftar')
            }
            Users.register(dataUser)
            res.send('berhasil')
        } catch (error) {
            res.send('tidak berhasil')
        } 
    }

    static getTitleLogin(req,res) {
        res.render('login')
    }

    static whoami(req,res) {
        res.render('profile', req.user.dataValues)
    }
}

module.exports = API