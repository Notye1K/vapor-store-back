import joi from 'joi';

const loginSchema = joi.object({
  name: joi.string().required(),
  password: joi.string().required()
})

export default loginSchema