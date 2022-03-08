import React from 'react'
import styles from './banner.module.css'

const Banner = React.memo(() => (
  <section className={styles.banner}>
    <div className={styles.bannerContent}>
      <h1 className={styles.title}>
        <span className={styles.titleContent}>초기 </span>
        <span className={styles.titleContent}>사이드 프로젝트를</span>
        <span className={styles.titleContent}>가장 편하게 제작하기 위한</span>
        <span className={styles.titleContent}> 보일러 플레이트</span>
      </h1>
      <div className={styles.subBanner}>
        <span className={styles.weak}>이걸로 사이드 프로젝트 시작하자!.</span>
      </div>
    </div>
  </section>
))
export default Banner
