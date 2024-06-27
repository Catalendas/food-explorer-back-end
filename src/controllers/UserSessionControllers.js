const { compare } = require("bcrypt")
const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const authConfig = require("../config/auth")
const { sign } = require("jsonwebtoken")

class UserSessionControllers {
    async create(req, res) {
        const {email, password} = req.body

        const user = await knex("users").where({ email }).first()

        if (!user) {
            throw new AppError("E-mail ou/e senha está incorreto")
        }

        const passwordMashed = await compare(password, user.password)

        if (!passwordMashed) {
            throw new AppError("E-mail ou/e senha está incorreto")
        }

        const { expiresIn, secret} = authConfig.jwt
        const token = sign({ role: user.role }, secret, {
            subject: String(user.id),
            expiresIn
        })

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "none",
            secure: true,
            maxAge: 15 * 60 * 1000
        })

        delete user.password

        return res.json({ user })
    }
}

module.exports = UserSessionControllers