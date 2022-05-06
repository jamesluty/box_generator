import {useState} from 'react'
import styles from './styles.module.css'

const BoxGenerator = (props) => {
    const [color, setColor] = useState("");

    const addBox = (inputColor) => {
        inputColor.preventDefault();
        props.newColorBox(color)
    }

    return (
        <div className='color_picker'>
            <form onSubmit={addBox} className={styles.form}>
                <p>Color</p>
                <input type="text" onChange={ (inputColor) => setColor(inputColor.target.value)} value={color}/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default BoxGenerator