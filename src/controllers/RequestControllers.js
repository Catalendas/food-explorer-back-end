const knex = require("../database/knex")

class RequestControllers {
    async create(req, res) {
        const user_id = req.user.id

        const { 
            dish_id,
            payment_type,
            quantity
        } = req.body

        await knex("requests").insert({ dish_id, user_id, payment_type, quantity })

        return res.status(201).json({})
    }

    async index(req, res) {

        const requests = await knex("requests")
            .innerJoin("dishes", "requests.dish_id", "dishes.id")
            .innerJoin("users", "requests.user_id", "users.id")

        return res.json(requests)
    }

    async update(req, res) {
        const { id } = req.params
        const { dish_status } = req.body

        await knex("requests").update({ dish_status }).where({ id })

        return res.json({})
    }

    async delete(req, res) {
        const { id } = req.params

        await knex("requests").delete().where({ id })

        return res.json({})
    }
}

module.exports = RequestControllers