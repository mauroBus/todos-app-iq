import React from 'react'
import t from 'format-message'
import LinearProgress from '@material-ui/core/LinearProgress'
import Title from 'react-document-title'
import styles from './index.css'

export const LoadingPage = () => (
  <div>
    <Title title={t('Loading page...')} />
    <LinearProgress className={styles.icon} />
  </div>
)
