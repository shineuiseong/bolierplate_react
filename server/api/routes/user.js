import { Router } from 'express'
import { UserService } from '../../services/index.js'
import { User as userModel } from '../../models/User.js'
import { asyncErrorWrapper } from '../../asyncErrorWrapper.js'
import { nickNameDuplicationCheck } from '../middlewares/index.js'
const route = Router()

export default (app) => {
  app.use('/users', route)

  // 사용자 정보 조회
  route.get(
    '/',
    asyncErrorWrapper(async (req, res, next) => {
      const { nickName } = req.query
      let UserServiceInstance = new UserService({ userModel })
      const user = await UserServiceInstance.findByNickName(nickName)

      res.status(200).json(user)
    })
  )

  // 사용자 닉네임 중복 체크
  route.get(
    '/:id/exists',
    nickNameDuplicationCheck,
    asyncErrorWrapper(async (req, res, next) => {
      return res.status(200).json({
        isExists: false,
      })
    })
  )
}
