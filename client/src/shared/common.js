//-- 이메일 정규식 --
export const EmailCheck = (email) => {
  let _reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
  return _reg.test(email)
}

//-- 비밀번호 정규식 --
export const PwdCheck = (pwd) => {
  let _reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/
  return _reg.test(pwd)
}

//-- 닉네임 정규식 --
export const nameCheck = (nickname) => {
  let _reg = /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{3,10}$/
  return _reg.test(nickname)
}
