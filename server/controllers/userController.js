const { Users, Addresses, Roles } = require("../models/index");

// handle request and response
// terima request, validate body, etc.
// ...
// kirim response

module.exports = {
  register: async (req, res) => {
    try {
      const serviceResult = await authService.registerUser(req);

      if (!serviceResult.success) {
        throw serviceResult.err;
      }

      return res.status(201).json({
        message: "Your account has been registered!",
        result: serviceResult.result,
      });
    } catch (err) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }
  },

  GetUser: async (req, res) => {
    try {
      const user = await Users.findAll({
        include: [
          {
            model: Addresses,
            required: false,
          },
        ],
      });

      return res.status(200).send(user);
    } catch (error) {
      return res.send(error);
    }
  },
};
