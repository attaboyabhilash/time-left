import React from "react"
import styles from "./Timer.module.scss"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

const lastDate = "07/29/2021"

const Timer = () => {
  dayjs.extend(relativeTime)
  const countNumberOfDays = () => {
    const date1 = new Date(lastDate)
    const date2 = new Date()
    const diffDate = date2.getTime() - date1.getTime()
    const daysPassed = Math.round(diffDate / (1000 * 3600 * 24))
    return daysPassed
  }
  return (
    <div className={styles.myCard}>
      <h2>Days Since I Last Talked</h2>
      <h1>{dayjs(lastDate).fromNow()}</h1>
      <p className={styles.optional}>
        Total Number of days - {countNumberOfDays()}
      </p>
      <p>Last Date I talked - {dayjs(lastDate).format("MMM DD, YYYY")}</p>
    </div>
  )
}

export default Timer
