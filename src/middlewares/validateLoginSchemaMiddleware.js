import loginSchema from "../schemas/loginSchema.js"

export default function validateLoginSchemaMiddleware(req, res, next) {
  const validation = loginSchema.validate(req.body, { abortEarly: false })

  if (validation.error) {
    const erros = validation.error.details.map(detail => detail.message)

    return res.status(422).send(erros)
  }

  next()
}