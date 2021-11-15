import React, {useState, useRef} from 'react'
import styles from './Create.module.css'
import * as FaIcons from "react-icons/fa";
import Category from './Category';
import ArtworkType from './ArtworkType';
import Image from './Image'
import Details from './Details';

function Create() {

    const [category, setCategory] = useState('')
    const [artType, setArtType] = useState('')
    const [imgFile, setImgFile] = useState(null)
    const [name, setName] = useState('')
    const [des, setDes] = useState('')
    function handleSubmit(event: any) {
        event.preventDefault()
        var data = new FormData()
        data.append('category', category)
        data.append('artType', artType)
        if( imgFile !== null) {
            data.append('file', imgFile)
        }
        data.append('name', name)
        data.append('description', des)
        fetch("http://127.0.0.1:8000/nfts",
            {
                method: 'POST',
                body: data
            }
        )
    }
    return(
        <div className={styles.createWrap}>
            <p className={styles.createTitle}>Create Non Fungible Token (NFT):</p>
            <form onSubmit={handleSubmit} className={styles.createForm}>
                <Category setMethod={setCategory}/>
                <ArtworkType setMethod={setArtType}/>
                <Image setMethod={setImgFile}/>
                <Details setName={setName} setDes={setDes}/>
                <button className={styles.formSubmit}>Create</button>
            </form>
        </div>
    )
}

export default Create