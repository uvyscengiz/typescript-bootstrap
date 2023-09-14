import process from 'node:process'
import { from } from 'env-var'

const env = from(process.env, {})

export const config = {
  NODE_ENV: env.get('NODE_ENV').required().asString(),
}

export type IAppConfig = typeof config
