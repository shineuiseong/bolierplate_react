import React, { useState } from 'react'
import styles from './main.module.css'
import Banner from '../../components/banner/banner'
import NavBar from '../../components/nav_bar/navbar'

/* 
main page의 layout을 담당하는 component입니다. 
최신, 트렌딩 두가지의 기준으로 데이터를 보여줍니다.
*/

const SHOW_BY_VIEWS = '-views'
const SHOW_BY_DATE = '-createdAt'
const ACTIVE = styles.active
const INACTIVE = styles.inactive

const Main = () => {
  const [category, setCategory] = useState(SHOW_BY_DATE)
  const [checked, setChecked] = useState(true)

  return (
    <>
      <NavBar />
      <Banner />

      <div className={styles.languageBarWrapper}>{/* <LanguageBarList /> */}</div>
      <div className={styles.appWrapper}>
        <div className={styles.app}>
          <main className={styles.main}>
            <div className={styles.categoryWrapper}>
              <section className={styles.category}></section>
            </div>
          </main>
        </div>
        {/* <Rating /> */}
      </div>
    </>
  )
}
export default Main
