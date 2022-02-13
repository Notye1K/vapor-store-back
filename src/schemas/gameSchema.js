import joi from 'joi';

const gameSchema = joi.object({
  name: joi.string().required(),
  img: joi.string().required(),
  description: joi.string().required(),
  price: joi.number().required(),
  genre: joi.string().required()
})

export default gameSchema