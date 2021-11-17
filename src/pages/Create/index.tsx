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
    async function getPrice() {
        return (await nftContract.methods.PRICE().call())
    }
    getPrice()
    let userWalletAddr:any
    async function mint() { 
        
        let nftPrice = await nftContract.methods.PRICE().call()
        await web3.eth.getAccounts((err, accounts) => {
            userWalletAddr = accounts[0]
        })
        console.log('user wallet address: ', userWalletAddr)
        await nftContract.methods.mint(userWalletAddr, 1).send({from: userWalletAddr, value: nftPrice})
    }

    const [collects, setCollects] = useState('')
    const [artType, setArtType] = useState('')
    const [imgFile, setImgFile] = useState(null)
    const [name, setName] = useState('')
    const [des, setDes] = useState('')
    function handleSubmit(event: any) {
        event.preventDefault()
        var data = new FormData()
        data.append('collects', collects)
        data.append('artType', artType)
        data.append('name', name)
        data.append('description', des)
        data.append('creatorAddr', userWalletAddr)
        if( imgFile !== null) {
            data.append('file', imgFile)
        }
        
        fetch("http://127.0.0.1:8000/nfts",
            {
                method: 'POST',
                body: data
            }
        )
        mint()
    }
    return(
        <div className={styles.createWrap}>
            <p className={styles.createTitle}>Create Non Fungible Token (NFT):</p>
            <form onSubmit={handleSubmit} className={styles.createForm}>
                <Collects setMethod={setCollects}/>
                <ArtworkType setMethod={setArtType}/>
                <Image setMethod={setImgFile}/>
                <Details setName={setName} setDes={setDes}/>
                <button className={styles.formSubmit}>Create</button>
                {/* {
                    localStorage.userWalletAddress !== 'undefined' ?
                        <button className={styles.formSubmit}>Create</button>
                    :
                    <div>
                        <button className={styles.formSubmit} disabled>Create</button>
                        <p style={{color: 'white', fontSize:'20px'}}>Please connect Metamask wallet.</p>
                    </div>
                } */}
                
            </form>
        </div>
    )
}

export default Create