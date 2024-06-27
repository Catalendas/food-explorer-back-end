
const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class UserValidatedControllers {
    async index(req, res) {
        const {
            user
        } = req

        const userEmailExist = await knex("users").where({id: user.id})

        if(userEmailExist.length === 0) {
            throw new AppError("Unauthorized", 401)
        }

        return res.status(200).json({})
    }
}

module.exports = UserValidatedControllers