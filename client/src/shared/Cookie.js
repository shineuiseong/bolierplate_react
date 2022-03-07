// 쿠키 생성(저장)

const setCookie = (name, value, exp = 1) => {
  // 시간생성
  let data = new Date()

  data.setTime(data.getTime() + exp * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};exp=${data.toUTCString()};path=/`
}

// 쿠키 가져오기

const getCookie = (name) => {
  const value = document.cookie.match(`(^|;)?${name}=([^;]*)(;|$)`)

  return value ? value[2] : null
}

// 쿠키 삭제하기

const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1999 00:00:10 GMT;`
}

export { setCookie, getCookie, deleteCookie }
