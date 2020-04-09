import React from 'react'
import Title from 'react-document-title'
import t from 'format-message'
import styles from './index.css'

type Props = {
  location?: { pathname: string }
}

export const NotFoundPage = ({ location }: Props) => (
  <section>
    <div className={styles.root}>
      <Title title={t('Page Not Found')} />
      <div className={styles.centered}>
        <h2>{t('Are you lost?')}</h2>
        <p translate="yes">
          <span key="0" className={styles.path}>
            {location ? location.pathname : window.location.pathname}
          </span>
          is not a valid page.
        </p>
      </div>
    </div>
  </section>
)
