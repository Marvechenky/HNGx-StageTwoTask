const Joi = require("joi");


const validatePersonModel = Joi.object({
  name: Joi.string().regex(/^[a-zA-Z-' ]+$/).min(3).max(50)
  .required('name is required.'),
});

module.exports = validatePersonModel;