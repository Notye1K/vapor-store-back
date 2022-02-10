import joi from 'joi'

const checkoutSchema = joi.object({
    productId: joi.string().required(),
    infos: joi.object({
        name: joi.string().required(),
        cpf: joi.number().required(),
        cardNumber: joi.number().required(),
        email: joi.string().email().required()
    }).required()
})

export default checkoutSchema