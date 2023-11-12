import React from 'react'
import s from './index.module.css'
import error from './error.png'

export default function NotFoundPage() {
  return (
    <div>
      <img className={s.error} src={error} alt="" />
    </div>
  )
}
