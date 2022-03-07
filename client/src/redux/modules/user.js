import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import { apis } from '../../shared/api/apis'
import { setCookie, getCookie, deleteCookie } from '../../shared/Cookie'

// actions
const SIGNUP = 'SIGNUP' //회원가입
const FIRST_SIGNUP = 'FIRST_SIGNUP'

const SET_USER = 'SET_USER' //로그인
const GET_USER = 'GET_USER' //사용자 불러오기
const LOG_OUT = 'LOG_OUT' // 로그아웃

const AUTH_CHECK = 'AUTH_CHECK' //인증완료 여부
const DELETE_USER = 'DELETE_USER' //회원탈퇴

const CHECK_NAME = 'CHECK_NAME'

const ERR_SIGNUP = 'ERR_SIGNUP'

// action creators

const signup = createAction(SIGNUP) //회원가입
const firstSignup = createAction(FIRST_SIGNUP)

const setUser = createAction(SET_USER, (user) => ({ user })) //로그인
const getUser = createAction(GET_USER, (username) => ({ username })) // 사용자 불러오기
const logout = createAction(LOG_OUT, () => ({}))
const authCheck = createAction(AUTH_CHECK, (auth_check) => ({ auth_check }))
const deleteUser = createAction(DELETE_USER, () => ({}))

const nameCheck = createAction(CHECK_NAME, (name_check) => ({ name_check }))

const err_signup = createAction(ERR_SIGNUP, (err) => ({ err }))

//initialState

const initialState = {
  user: {
    userIdx: 1,
    email: 'test',
    //noticeSet: false,
    usename: '',
  },
  login_err_message: '',
  signup_err_message: '',
  is_login: false,
  is_signup: false,
  auth_check: false,
}

// middleware actions

//회원가입
export const signupDB =
  (email, password, passwordCheck, nickname) =>
  async (dispatch, getState, { history }) => {
    try {
      await apis.signup(email, password, passwordCheck, nickname)
      dispatch(signup()).then((res) => {
        if (res.payload.success) {
          console.log('회원가입 성공')
          //history.push('/user/login')
        } else {
          window.alert('회원가입 실패')
        }
      })
    } catch (err) {
      dispatch(err_signup(err.res.data.errorMessage))
    }
  }

// 로그인
export const loginDB =
  (userId, password) =>
  async (dispatch, getState, { history }) => {
    try {
      const res = await apis.login(userId, password)
      localStorage.setItem('userIdx', res.userIdx)
      localStorage.setItem('noticeSet', res.noticeSet)
      localStorage.setItem('token', res.token)

      dispatch(
        setUser({
          userIdx: res.userIdx,
          userId: res.userId,
          loginCnt: res.loginCnt,
          noticeSet: res.noticeSet,
        })
      )
      //메인화면으로
      history.push('/')
    } catch (err) {
      window.alert(err.response.data.errorMessage)
    }
  }

//---- 로그아웃 DB ----
const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem('userIdx')
    localStorage.removeItem('token')
    localStorage.removeItem('noticeSet')

    alert('로그아웃 되었습니다.')
    history.push('/')
  }
}

// 사용자 정보 불러오기

const getUserDB = () => {
  return function (dispatch, getState, { history }) {}
}

// -- reducer --
export default handleActions(
  {
    [SIGNUP]: (state, action) =>
      produce(state, (draft) => {
        draft.is_signup = true
      }),
    [FIRST_SIGNUP]: (state, action) =>
      produce(state, (draft) => {
        draft.is_signup = false
      }),
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user
        draft.is_login = true
      }),
    [ERR_SIGNUP]: (state, action) =>
      produce(state, (draft) => {
        draft.signup_errMessage = action.payload.err
      }),
  },
  initialState
)
// -- action creator export --
const actionCreators = {
  firstSignup,
  signupDB,
  loginDB,
  logoutDB,
  //socialLoginDB,
}

export { actionCreators }
