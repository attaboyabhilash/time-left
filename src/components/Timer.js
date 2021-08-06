import React from "react"
import styles from "./Timer.module.scss"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

const Timer = () => {
  dayjs.extend(relativeTime)
  return (
    <div className={styles.myCard}>
      <h2>Days Since I Last Talked</h2>
      <h1>{dayjs("July 29, 2021").fromNow()}</h1>
      <p>Last Date I talked - July 29, 2021</p>
    </div>
  )
}

export default Timer
