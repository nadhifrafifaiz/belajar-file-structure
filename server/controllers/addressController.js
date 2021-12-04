const { Addresses } = require("../models/index")


module.exports = {
    // getDataAddress
    GetAddress: async (req, res) => {
        try {
            const address = await Addresses.findAll(
                {
                    where: { UserId: 1 }
                }
            )

            return res.status(200).send(address)
        } catch (error) {
            return res.send(error)
        }
    },
    EditAddress: async (req, res) => {
        try {
            const addressId = parseInt(req.params.id)
            await Addresses.update(req.body, {
                where: {
                    id: addressId
                }
            })
            return res.send(req.body)

        } catch (error) {
            return res.send(error)
        }
    }


}