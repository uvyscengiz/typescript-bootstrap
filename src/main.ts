import process from 'node:process'
import { logger } from '@/lib/logger'
import { config } from '@/lib/config'

const bootstrap = async () => {
  logger.info('Congratulations...')
  logger.info('CONFIG', config)
}

bootstrap().catch((err) => {
  logger.error(err)
  process.exit(-1)
})
