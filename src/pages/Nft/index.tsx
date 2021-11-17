import React, {useEffect, useState} from 'react'
import { withRouter } from 'react-router'
import Item from '../Marketplace/list/Item'
import styles from './Nft.module.css'
import * as FaIcons from "react-icons/fa";
import { getAllJSDocTags } from 'typescript'
function Nft({match}: any) {
    const [nft, setNft] = useState<null|any>({})
    const [img, setImg] = useState('')
    function arrayBufferToBase64(buffer:any) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }
    function getImg(buffer:any) {
        let temp = 'data:image/jpeg;base64,' + arrayBufferToBase64(buffer)
        setImg(temp)
    }
    async function getData() {
        let nftId = parseInt(match.params.nftId)
        const response = await fetch(`http://localhost:8000/nfts/${nftId}`)
        const json = await response.json()
        setNft(json[0])
        getImg(json[0].img.data.data)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className={styles.detailWrap}>
            <div className={styles.detail}>
                <div className={styles.detailLeft}>
                    <div className={styles.img}>
                        <div className={styles.itemFavorite}>
                            <FaIcons.FaRegHeart size={15}/>
                            1
                        </div>
                        <img src = {img}></img>
                    </div>
                    <div className={styles.details}>
                        <div>
                            <p className={styles.title}>Details</p>
                        </div>
                        <div className={styles.creator}>
                            <p className={styles.fontMedium}>Creator: <span className={styles.fontBlue}>{nft!.creatorAddr}</span></p>
                            <p className={styles.fontMedium}>contract address: <span className={styles.fontBlue}>{nft!.creatorAddr}</span></p>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.detailRight}>
                    <div className={styles.titleWrap}>
                        <div className={styles.titleHead}>
                            <p className={styles.itemCollection}>{nft!.collects}
                                <svg id="icons8-verified-badge" xmlns="http://www.w3.org/2000/svg" width="21.451" height="21.451" viewBox="0 0 21.451 21.451">
                                    <path id="Path_1" data-name="Path 1" d="M12.726,2,14.92,4.438l3.169-.975.731,3.169,3.169.731-.975,3.169,2.438,2.194L21.014,14.92l.975,3.169-3.169.731-.731,3.169-3.169-.975-2.194,2.438-2.194-2.438-3.169.975L6.632,18.82l-3.169-.731.975-3.169L2,12.726l2.438-2.194L3.463,7.363l3.169-.731.731-3.169,3.169.975Z" transform="translate(-2 -2)" fill="#42a5f5"/>
                                    <path id="Path_2" data-name="Path 2" d="M21.706,14.6l-5.629,7.924-2.318-3.263L12.6,20.892l3.477,4.894,6.788-9.555Z" transform="translate(-6.424 -9.385)" fill="#e3f2fd"/>
                                </svg>
                            </p>
                            <div className={styles.social}>
                                <FaIcons.FaDiscord size={28}/>
                                <FaIcons.FaFacebook size={28}/>
                                <FaIcons.FaTwitter size={28}/>
                            </div>
                        </div>
                        <p className={styles.titleId}>{nft!.name}</p>
                        <div className={styles.titleBottom}>
                            <p className={styles.fontMedium}>Owned by: <span>{nft!.ownerName}</span></p>
                            <p className={styles.fontMedium}>
                                <FaIcons.FaEye size={15}/>
                                2500 views
                            </p>
                        </div>
                    </div>
                    <div className={styles.priceWrap}>
                        <p className={styles.title}>Buy it now price</p>
                        <div className={styles.price}>
                            <svg className={styles.ethereumSymbol} xmlns="http://www.w3.org/2000/svg" width="12.69" height="19.942" viewBox="0 0 12.69 19.942">
                                <path id="Path_3" data-name="Path 3" d="M11,11.971,17.345,2l6.345,9.971L17.345,15.6Z" transform="translate(-11 -2)" fill="#7880e7"/>
                                <path id="Path_4" data-name="Path 4" d="M25,2l6.345,9.971L25,15.6Z" transform="translate(-18.655 -2)" fill="#5c64c7"/>
                                <path id="Path_5" data-name="Path 5" d="M11,27l6.345,3.626L23.69,27l-6.345,8.611Z" transform="translate(-11 -15.669)" fill="#7880e7"/>
                                <path id="Path_6" data-name="Path 6" d="M17.345,25.7l6.345-3.626L17.345,30.69ZM11,20.719,17.345,18l6.345,2.719-6.345,3.626Z" transform="translate(-11 -10.748)" fill="#5c64c7"/>
                                <path id="Path_7" data-name="Path 7" d="M25,18l6.345,2.719L25,24.345Z" transform="translate(-18.655 -10.748)" fill="#2a3192"/>
                            </svg>
                            <p className={styles.titleX}>{nft!.price} <span className={styles.titleL}>($2459.33)</span></p>
                        </div>
                        <button className={styles.btnBuyNow}><FaIcons.FaCartArrowDown size={10}/>Buy Now</button>
                    </div>
                    <div className={styles.offersWrap}>
                        <p className={styles.offers}><FaIcons.FaBook size={15}/> <span>Offers</span></p>
                        <FaIcons.FaArrowDown size={20}/>
                    </div>
                    <table className={styles.offersTbl}>
                        <tr>
                            <th>Price</th>
                            <th>USD price</th>
                            <th>Expirated</th>
                            <th>Offerer</th>
                        </tr>
                        <tr>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12.69" height="19.942" viewBox="0 0 12.69 19.942">
                                    <path id="Path_3" data-name="Path 3" d="M11,11.971,17.345,2l6.345,9.971L17.345,15.6Z" transform="translate(-11 -2)" fill="#7880e7"/>
                                    <path id="Path_4" data-name="Path 4" d="M25,2l6.345,9.971L25,15.6Z" transform="translate(-18.655 -2)" fill="#5c64c7"/>
                                    <path id="Path_5" data-name="Path 5" d="M11,27l6.345,3.626L23.69,27l-6.345,8.611Z" transform="translate(-11 -15.669)" fill="#7880e7"/>
                                    <path id="Path_6" data-name="Path 6" d="M17.345,25.7l6.345-3.626L17.345,30.69ZM11,20.719,17.345,18l6.345,2.719-6.345,3.626Z" transform="translate(-11 -10.748)" fill="#5c64c7"/>
                                    <path id="Path_7" data-name="Path 7" d="M25,18l6.345,2.719L25,24.345Z" transform="translate(-18.655 -10.748)" fill="#2a3192"/>
                                </svg>
                                0.59 ETH
                            </td>
                            <td>$2563.45</td>
                            <td>in 15 days</td>
                            <td>John_cena</td>
                        </tr>
                        <tr>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12.69" height="19.942" viewBox="0 0 12.69 19.942">
                                    <path id="Path_3" data-name="Path 3" d="M11,11.971,17.345,2l6.345,9.971L17.345,15.6Z" transform="translate(-11 -2)" fill="#7880e7"/>
                                    <path id="Path_4" data-name="Path 4" d="M25,2l6.345,9.971L25,15.6Z" transform="translate(-18.655 -2)" fill="#5c64c7"/>
                                    <path id="Path_5" data-name="Path 5" d="M11,27l6.345,3.626L23.69,27l-6.345,8.611Z" transform="translate(-11 -15.669)" fill="#7880e7"/>
                                    <path id="Path_6" data-name="Path 6" d="M17.345,25.7l6.345-3.626L17.345,30.69ZM11,20.719,17.345,18l6.345,2.719-6.345,3.626Z" transform="translate(-11 -10.748)" fill="#5c64c7"/>
                                    <path id="Path_7" data-name="Path 7" d="M25,18l6.345,2.719L25,24.345Z" transform="translate(-18.655 -10.748)" fill="#2a3192"/>
                                </svg>
                                0.59 ETH
                            </td>
                            <td>$2563.45</td>
                            <td>in 15 days</td>
                            <td>John_cena</td>
                        </tr>
                    </table>
                    
                    <div className={styles.historyWrap}>
                        <p className={styles.history}><FaIcons.FaHistory size={15}/> Price History</p>
                        <FaIcons.FaArrowDown size={20}/>
                    </div>
                    <table className={styles.historyTbl}>
                        <tr>
                            <th>Price</th>
                            <th>USD price</th>
                            <th>Date</th>
                            <th>New Owner</th>
                        </tr>
                        <tr>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12.69" height="19.942" viewBox="0 0 12.69 19.942">
                                    <path id="Path_3" data-name="Path 3" d="M11,11.971,17.345,2l6.345,9.971L17.345,15.6Z" transform="translate(-11 -2)" fill="#7880e7"/>
                                    <path id="Path_4" data-name="Path 4" d="M25,2l6.345,9.971L25,15.6Z" transform="translate(-18.655 -2)" fill="#5c64c7"/>
                                    <path id="Path_5" data-name="Path 5" d="M11,27l6.345,3.626L23.69,27l-6.345,8.611Z" transform="translate(-11 -15.669)" fill="#7880e7"/>
                                    <path id="Path_6" data-name="Path 6" d="M17.345,25.7l6.345-3.626L17.345,30.69ZM11,20.719,17.345,18l6.345,2.719-6.345,3.626Z" transform="translate(-11 -10.748)" fill="#5c64c7"/>
                                    <path id="Path_7" data-name="Path 7" d="M25,18l6.345,2.719L25,24.345Z" transform="translate(-18.655 -10.748)" fill="#2a3192"/>
                                </svg>
                                0.59 ETH
                            </td>
                            <td>$2563.45</td>
                            <td>10/15/2021</td>
                            <td>John_cena</td>
                        </tr>
                        <tr>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12.69" height="19.942" viewBox="0 0 12.69 19.942">
                                    <path id="Path_3" data-name="Path 3" d="M11,11.971,17.345,2l6.345,9.971L17.345,15.6Z" transform="translate(-11 -2)" fill="#7880e7"/>
                                    <path id="Path_4" data-name="Path 4" d="M25,2l6.345,9.971L25,15.6Z" transform="translate(-18.655 -2)" fill="#5c64c7"/>
                                    <path id="Path_5" data-name="Path 5" d="M11,27l6.345,3.626L23.69,27l-6.345,8.611Z" transform="translate(-11 -15.669)" fill="#7880e7"/>
                                    <path id="Path_6" data-name="Path 6" d="M17.345,25.7l6.345-3.626L17.345,30.69ZM11,20.719,17.345,18l6.345,2.719-6.345,3.626Z" transform="translate(-11 -10.748)" fill="#5c64c7"/>
                                    <path id="Path_7" data-name="Path 7" d="M25,18l6.345,2.719L25,24.345Z" transform="translate(-18.655 -10.748)" fill="#2a3192"/>
                                </svg>
                                0.59 ETH
                            </td>
                            <td>$2563.45</td>
                            <td>10/15/2021</td>
                            <td>John_cena</td>
                        </tr>
                    </table>
                </div>
            </div>            
            <div className={styles.featured}>
                <div className={styles.featuredHead}>
                    <p className={styles.title}><FaIcons.FaBook size={15}/> Featured Assets</p>
                    <FaIcons.FaArrowDown size={25}/>
                </div>
                <div className={styles.featuredList}>
                    {/* <Item idx={"0"}/>
                    <Item idx={"1"}/>
                    <Item idx={"2"}/>
                    <Item idx={"3"}/> */}
                </div>
            </div>
        </div>
    )
}

export default Nft
