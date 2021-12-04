const { Users, Addresses, Roles } = require("../models/index")


module.exports = {
    Register: async (req, res) => {
        console.log("Register");
    },
    GetUser: async (req, res) => {
        try {
            const user = await Users.findAll({
                include: [
                    {
                        model: Addresses,
                        required: false
                    }
                ]
            })

            return res.status(200).send(user)
        } catch (error) {
            return res.send(error)
        }
    }




}