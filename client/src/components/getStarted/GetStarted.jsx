import React from 'react'
import styles from './GetStarted.module.scss'

const GetStarted = () => {
  return (
    <main className={styles.getStarted}>
      {/* <div className='container'> */}
        <section className={styles.infoWrapper}>
          <h1 className={styles.heading}>The chemical negatively charged</h1>
          <p>
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is
          </p>
          <button>Get Started</button>
        </section>
      {/* </div> */}
    </main>
  )
}

export default GetStarted
