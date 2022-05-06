import React from 'react'
import styles from './styles.module.css'


const BoxOutput = (props) => {
    return (
        <div className={styles.display_boxes}>
            { props.colors.map( (color, idx) => 
                <div key={idx} className={styles.box} style={{backgroundColor: color}}></div>
            )}
        </div>
    )
}

export default BoxOutput