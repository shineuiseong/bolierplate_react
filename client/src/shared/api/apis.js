import instance from './instance'

export const apis = {
  //회원가입
  signup: (email, password, passwordCheck, nickname) => {
    instance.post('/api/signup', { email, password, passwordCheck, nickname })
  },
  //로그인
  login: (email, password) => {
    instance.post('/api/login', { email, password })
  },
  //사용자 이름가져오기
  getuser: () => {
    instance.get('/api/username')
  },
  //사용자 닉네임 체크
  nameCheck: (nickname) => {
    instance.get(`/api/username/${nickname}`)
  },
}
