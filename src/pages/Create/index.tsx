import React, {useState, useRef} from 'react'
import styles from './Create.module.css'
import * as FaIcons from "react-icons/fa";
import Collects from './Collects';
import ArtworkType from './ArtworkType';
import Image from './Image'
import Details from './Details';
import web3 from '../../web3';
const nftJson = require('../../contracts/NFT.json')
const nftContractAddress = '0x7F80C6b98DBeF433Ce24B4512830Abc68eC82F64'

function Create() {
    const nftContract = new web3.eth.Contract(nftJson, nftContractAddress)
    let userWalletAddr:any
    async function mint() { 
        let nftPrice = await nftContract.methods.PRICE().call()
        await nftContract.methods.mint(userWalletAddr[0], 1).send({from: userWalletAddr[0], value: nftPrice})
    }

    const [collects, setCollects] = useState('')
    const [artType, setArtType] = useState('')
    const [imgFile, setImgFile] = useState(null)
    const [name, setName] = useState('')
    const [des, setDes] = useState('')
    async function handleSubmit(event: any) {
        event.preventDefault()
        var data = new FormData()
        data.append('collects', collects)
        data.append('artType', artType)
        data.append('name', name)
        data.append('description', des)
        userWalletAddr = await web3.eth.getAccounts()
        data.append('creatorAddr', userWalletAddr[0])
        if( imgFile !== null) {
            data.append('file', imgFile)
        }
        let fetchUrl = process.env.REACT_APP_API_BASE_URL + 'nfts'
        fetch(fetchUrl,
            {
                method: 'POST',
                body: data
            }
        )
        mint()
    }
    return(
        <div className={styles.createWrap}>
            
            <form onSubmit={handleSubmit} className={styles.createForm}>
                <div style={{textAlign: 'center'}}>
                    <p className={styles.createTitle}>Create NFT</p>
                    <Collects setMethod={setCollects}/>
                    <ArtworkType setMethod={setArtType} artType={artType}/>
                    <Details setName={setName} setDes={setDes}/>
                    <button className={styles.formSubmit}>
                        UPLOAD FILE
                        <svg xmlns="http://www.w3.org/2000/svg" width="17.183" height="17.272" viewBox="0 0 17.183 17.272">
                            <path id="upload-file" d="M10.958,0,7.13,4.986h2.978a.975.975,0,0,0-.04.267V11.4a.979.979,0,1,0,1.959,0V5.253a.978.978,0,0,0-.04-.267h2.8L10.958,0ZM2.5,7.212V17.272H19.683V7.212H14.138V8.992h3.417v6.5H4.629v-6.5h3.68V7.212H2.5Z" transform="translate(-2.5)" fill="#46364d"/>
                        </svg>
                    </button>
                </div>
                <Image setMethod={setImgFile}/>
            </form>
        </div>
    )
}

export default Create