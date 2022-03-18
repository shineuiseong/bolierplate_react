import config from '../config/index.js'

export class UserService {
  constructor({ userModel }) {
    this.userModel = userModel
  }

  // 닉네임을 사용하여 사용자 정보 조회
  async findByNickName(nickName) {
    const users = await this.userModel.findByNickName(nickName)
    return users
  }

  // id를 사용하여 사용자 정보 조회
  async findById(id) {
    const users = await this.userModel.findById(id)
  }

  // 사용자 정보 수정
  async modifyUser(id, tokenUser, user) {
    if (id != tokenUser) throw new CustomError('NotAuthenticatedError', 401, 'User does not match')

    const userRecord = await this.userModel.modifyUser(id, user)
    const accessToken = await userRecord.generateAccessToken()
    const refreshToken = await userRecord.generateRefreshToken()
    return { userRecord, accessToken, refreshToken }
  }

  //사용자 삭제
  async deleteUser(id, tokenUser) {
    if (id != tokenUserId) throw new CustomError('NotAuthenticatedError', 401, 'User does not match')
  }
}
