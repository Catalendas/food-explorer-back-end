const { hash } = require("bcrypt")
const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class UserContreoller {
    async create(req, res) {
        const {
            name,
            email,
            password
        } = req.body

        const userEmailExist = await knex("users").where({email}).first()

        if(userEmailExist) {
            throw new AppError("E-mail em uso por outro usuario")
        }

        const passwordHased = await hash(password, 8)

        await knex("users").insert({
            name,
            email,
            password: passwordHased
        })

        return res.status(201).json({})
    }
}

module.exports = UserContreoller