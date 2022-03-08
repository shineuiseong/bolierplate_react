import httpClient from './http_client'

class User {
  constructor(httpClient) {
    this.user = httpClient
  }

  // id를 이용해 사용자 정보를 조회
  getUserInfo = async (id) => {
    try {
      const user = await this.user.get(`users/${id}`)
      return user
    } catch (error) {
      console.error(error)
    }
  }

  // user nickname 중복 검사를 실행
  checkNickname = async (id, nickname) => {
    try {
      const res = await this.user.get(`
            users/${id}/exists?nickname=${nickname}
        `)
      return res
    } catch (error) {
      console.error(error)
    }
  }

  // 닉네임을 이용해 사용자 정보를 조회
  getUserInfoByNickName = async (nickname) => {
    try {
      const params = {
        nickname: nickname,
      }
      const user = await this.user.get(`users`, { params })
    } catch (error) {
      console.error(error)
    }
  }
  // 사용자 정보를 수정합니다.
  // 닉네임이 변경될 경우 AccessToken을 다시 설정해야 합니다.
  modifyUserInfo = async (id, userData) => {
    try {
      const user = await this.user.patch(`users/${id}`, userData)
      return {
        user,
        modifySuccess: true,
      }
    } catch (error) {
      return {
        user: null,
        modifySuccess: false,
      }
    }
  }
}
const userService = new User(httpClient)
export default userService
