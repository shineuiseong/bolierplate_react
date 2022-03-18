import { Router } from 'express'

import auth from './routes/auth.js'
import login from './routes/login.js'
import user from './routes/user.js'

export default () => {
  const app = Router()
  auth(app)
  login(app)
  user(app)
  return app
}
