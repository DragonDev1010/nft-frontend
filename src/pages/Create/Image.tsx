import React, {useState, useRef} from 'react'
import styles from './Create.module.css'
import * as FaIcons from 'react-icons/fa'
function Image(props:any) {
    const [selectedImage, setSelectedImage] = useState<string | undefined | null>();
    const inputRef = useRef<HTMLInputElement>(null)
    function inputFile(event: any) {
        if(selectedImage === undefined || selectedImage === null) {
            inputRef.current?.click()
        }
    }
    function imageChange(e: any) {
        if (e.target.files && e.target.files.length > 0) {
            props.setMethod(e.target.files[0]);
            setSelectedImage(e.target.files[0])
        }
    }
    const removeSelectedImage = () => {
        props.setMethod(undefined);
        setSelectedImage(undefined)
    };
    
    return (
        <div className = {styles.imgUpload}>
        <p className={styles.headTxt}>Upload File</p>
        <div className={styles.imgSelect} onClick={inputFile}>
            <input type="file" name="nft_img" className={styles.inputFile} ref = {inputRef}  onChange={imageChange}/>
            
            {selectedImage ?
                <div className={styles.preview}>
                    <div className={styles.imgRemove}>
                        <FaIcons.FaTimes  onClick={removeSelectedImage}/>
                    </div>
                    <img
                    src={URL.createObjectURL(selectedImage)}
                    className={styles.image}
                    alt="Thumb"
                    />
                    
                    
                    {/* <button onClick={removeSelectedImage} className={styles.delete}>
                    Remove This Image
                    </button> */}
                </div>
                :
                <FaIcons.FaFileUpload size={90}/> 
            }

            
        </div>
    </div>
    )
}

export default Image