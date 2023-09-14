import { createLogger } from 'bunyan'
import { config } from '@/lib/config'

export const logger = createLogger({
  name: 'UveysStarter',
  src: config.NODE_ENV === 'development',
})
