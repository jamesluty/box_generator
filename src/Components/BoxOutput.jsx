import React from 'react'
import styles from './styles.module.css'


const BoxOutput = (props) => {
    return (
        <div className={styles.display_boxes}>
            { props.boxes.map( (box, idx) => 
                <div key={idx} style={{backgroundColor: box.color, height: box.size, width: box.size}}></div>
            )}
        </div>
    )
}

export default BoxOutput