import joi from 'joi';

const signUpSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email({ tlds: { allow: false } }).required(),
  password: joi.string().required()
})

export default signUpSchema;