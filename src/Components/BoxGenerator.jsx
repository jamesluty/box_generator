import {useState} from 'react'
import styles from './styles.module.css'

const BoxGenerator = (props) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState("")

    const addBox = (e) => {
        e.preventDefault();
        console.log(+size)
        props.newBox({color: color, size: +size})
        setColor("")
        setSize("")
    }


    return (
        <div className='color_picker'>
            <form onSubmit={addBox} className={styles.form}>
                <p>Color</p>
                <input type="text" onChange={ (e) => setColor(e.target.value)} value={color}/>
                <input type="text" onChange={(e) => setSize(e.target.value)} value={size}/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default BoxGenerator