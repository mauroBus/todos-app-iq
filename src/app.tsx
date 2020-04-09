import React, { Component as ReactComponent } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import styles from './app.css'

type Props = {
  children: ReactComponent
}

export const App = ({ children }: Props) => {
  return (
    <>
      <CssBaseline />
      <section className={styles.app}>{children}</section>
    </>
  )
}
