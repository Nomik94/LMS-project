import * as Joi from 'joi';

export const validation: Joi.ObjectSchema = Joi.object({
  NODE_ENV: Joi.string().valid('dev', 'prod'),
  PORT: Joi.number().default(3000),
}).options({
  abortEarly: true,
});
