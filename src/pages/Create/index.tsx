import React, {useState} from 'react'
import styles from './Create.module.css'

function Create() {
    const [file, setFile] = useState()
    const [nft_name, setNft_name] = useState('')
    function handleChange(event: any) {
        setNft_name(event.target.value)
    }
    function convertFormeventForAPI(event: any) {
        return JSON.stringify({
            name: event.target.nft_name.value,
            files: event.target.nft_img.files[0]
        })
    }
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
    return(
        <div className={styles.createWrap}>
            <form onSubmit={handleSubmit} className={styles.createForm}>
                <p className={styles.createTitle}>Create New Item</p>
                <div className = {styles.imgUpload}>
                    <p className={styles.headTxt}>Image, Video, Audio, or 3D Model</p>
                    <p className={styles.desTxt}>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
                </div>
                <div className={styles.name}>
                    <p className={styles.headTxt}>Name</p>
                    <input type="text" />
                </div>
                <div className={styles.description}>
                    <p className={styles.headTxt}>Description</p>
                    <p className={styles.desTxt}>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</p>
                    <input type="text" />
                </div>
                <div className={styles.collection}>
                    <p className={styles.headTxt}>Collection</p>
                    <p className={styles.desTxt}>This is the collection where your item will appear. info</p>
                    <input type="text" />
                </div>
                <input type='file' name='nft_img' /><br/>
                NFT Name: <input type='text' name='nft_name' onChange={handleChange}/> <br/>
                NFT Description: <textarea name='nft_des' /> <br/>

                <input type='submit' value='Create'/>
            </form>
        </div>
    )
}

export default Create