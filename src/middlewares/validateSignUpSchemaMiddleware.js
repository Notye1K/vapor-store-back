import signUpSchema from "../schemas/signUpSchema.js";

export default function validateSignUpSchemaMiddleware(req, res, next) {
  const validation = signUpSchema.validate(req.body, { abortEarly: false })

  if (validation.error) {
    const erros = validation.error.details.map(detail => detail.message)

    return res.status(422).send(erros)
  }

  next();
}