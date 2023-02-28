import React from 'react'
import Image from 'next/image'
import styles from '../styles/Import.module.css'

export default function Bacground() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6'>
            <div className={styles.g}>
              <div className={styles.g1} >
                <Image
                  src='/bg2.png'
                  width={700}
                  height={550}
                  alt=''
                  style={{
                    paddingTop: '50%',
                    paddingBottom: '50%'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
