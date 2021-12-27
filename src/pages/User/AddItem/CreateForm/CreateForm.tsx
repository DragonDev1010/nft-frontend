import { useState } from 'react'
import ItemDetails from './ItemDetails'
import Others from './Others'
import SaleOptions from './SaleOptions'
import UploadFile from './UploadFile'
import web3 from '../../../../web3'
const nftJson = require('../../../../contracts/NFT.json')
const nftContractAddress = process.env.NFT_CONTRACT_ADDR
function CreateForm() {
    const [imgFile, setImgFile] = useState(null)
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [cntCopies, setCntCopies] = useState(1)
    const [category, setCategory] = useState('')
    const [royalty, setRoyalty] = useState(5)
    const [saleOption, setSaleOption] = useState("0")

    const nftContract = new web3.eth.Contract(nftJson, nftContractAddress)
    let userWalletAddr:any
    async function mint() { 
        let nftPrice = await nftContract.methods.PRICE().call()
        await nftContract.methods.mint(userWalletAddr[0], 1).send({from: userWalletAddr[0], value: nftPrice})
    }
    async function handleSubmit(event: any) {
        event.preventDefault()
        console.log('sdf sdf sdf sdf sdf')
        var data = new FormData()
        if(imgFile !== null) {
            data.append('imgFile', imgFile)
        }
        data.append('name', name)
        data.append('description', desc)
        data.append('cntCopies', cntCopies.toString())
        data.append('category', category)
        data.append('royalty', royalty.toString())
        data.append('saleOption', saleOption)
        userWalletAddr = await web3.eth.getAccounts()
        data.append('creatorAddr', userWalletAddr[0])
        data.append('ownerAddr', userWalletAddr[0])
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
        // mint()
    }
    return(
        <div className="col-12 col-xl-9">
            {/* <!-- title --> */}
            <div className="main__title main__title--create">
                <h2>Create New NFT</h2>
            </div>
            {/* <!-- end title --> */}
            {/* <!-- create form --> */}
            <form onSubmit={handleSubmit} className="sign__form sign__form--create">
                <div className="row">
                    <UploadFile uploadImg = {setImgFile}/>
                    <ItemDetails setName = {setName} setDesc={setDesc}/>
                    <Others setCntCopies={setCntCopies} setCategory={setCategory} setRoyalty={setRoyalty}/>
                    <SaleOptions setSaleOption={setSaleOption}/>
                    <div className="col-12 col-xl-3">
                        <button className="sign__btn">Create item</button>
                    </div>
                </div>
            </form>
            {/* <!-- end create form --> */}
            

        </div>
    )
}

export default CreateForm