import * as Joi from 'joi';
import EnvironmentNames from '../general/enum/environment-names';

export const validationSchema = Joi.object({
  PORT: Joi.number().default(3000),
  ENV: Joi.string().valid(EnvironmentNames.DEVELOPMENT, EnvironmentNames.PRODUCTION, EnvironmentNames.TEST).default(EnvironmentNames.DEVELOPMENT),
});