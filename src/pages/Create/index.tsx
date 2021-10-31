import React, {useState, useRef} from 'react'
import styles from './Create.module.css'
import * as FaIcons from "react-icons/fa";

function Create() {
    const [file, setFile] = useState()
    const [nft_name, setNft_name] = useState('')
    const [selectedImage, setSelectedImage] = useState<string | undefined | null>();
    const inputRef = useRef<HTMLInputElement>(null)

    function handleChange(event: any) {
        setNft_name(event.target.value)
    }
    function convertFormeventForAPI(event: any) {
        return JSON.stringify({
            name: event.target.nft_name.value,
            files: event.target.nft_img.files[0]
        })
    }
    function imageChange(e: any) {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    }
    const removeSelectedImage = () => {
        setSelectedImage(undefined);
    };
    function handleSubmit(event: any) {
        event.preventDefault()
        // console.log(event.target.nft_img.files)
        // console.log(event.target.nft_img.files[0])
        var data = new FormData()
        data.append('file', event.target.nft_img.files[0])
        data.append('name', event.target.nft_name.value)
        console.log(typeof(data))
        fetch("http://127.0.0.1:8000/nfts",
            {
                method: 'POST',
                body: data
            }
        )
    }
    function inputFile(event: any) {
        inputRef.current?.click()
    }
    return(
        <div className={styles.createWrap}>
            <p className={styles.createTitle}>Create Non Fungible Token (NFT):</p>
            <form onSubmit={handleSubmit} className={styles.createForm}>
                <div className={styles.category}>
                    <p className={styles.headTxt}>Category</p>
                    <select className={styles.catList}>
                        <option className={styles.catItem}>Select Category</option>
                        <option className={styles.catItem}>Saab</option>
                        <option className={styles.catItem}>Opel</option>
                        <option className={styles.catItem}>Audi</option>
                    </select>
                </div>
                <div className={styles.artworkType}>
                    <p className={styles.headTxt}>Artwork Type</p>
                    <div className={styles.typeGroup}>
                        <button className={styles.typeItem}>Image</button>
                        <button className={styles.typeItem}>Audio</button>
                        <button className={styles.typeItem}>Video</button>
                        <button className={styles.typeItem}>GIF</button>
                    </div>
                </div>
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
                <p className={styles.headTxt}>NFT Details</p>
                <div className={styles.name}>
                    <p className={styles.generalTxt}>Name :</p>
                    <input type="text" className={styles.inputName} name="nft_name"/>
                </div>
                <div className={styles.description}>
                    <p className={styles.generalTxt}>Description : </p>
                    <textarea className={styles.inputDescription} />
                </div>
                
                <div>
                    <button className={styles.formSubmit}>Create</button>
                </div>
            </form>
        </div>
    )
}

export default Create