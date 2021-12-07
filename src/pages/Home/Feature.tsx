import React from 'react'
import FeatureItem from './FeatureItem'
import styles from './Home.module.css'

function Feature() {
    const featureData = [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="67.86" height="69.426" viewBox="0 0 67.86 69.426">
                        <path id="icons8-wallet" d="M53.633,3.031a18.184,18.184,0,0,0-4.544.757c-4.86,1.281-33.356,9.164-33.779,9.29-4.229,1.591-6.9,3.156-8.584,5a12.311,12.311,0,0,1,6.968-2.171h45.24V10.5C58.935,7.891,58.916,3.031,53.633,3.031ZM13.694,19.138C7.686,19.138,4,24.787,4,28.832V63.368a9.107,9.107,0,0,0,9.088,9.088H62.772a9.107,9.107,0,0,0,9.088-9.088V28.58c0-4.942-4.62-9.442-9.694-9.442Zm46.048,22.62A4.039,4.039,0,1,1,55.7,45.8,4.039,4.039,0,0,1,59.742,41.758Z" transform="translate(-4 -3.031)" fill="#fff"/>
                    </svg>`,
            header: "Connect Wallet",
            detail: "Begin using Starseas by connecting your crypto wallet. Once connected, our software will verify that you hold 1 Billion SGE tokens. Upon verification, you will have access to all utilities"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="86.782" height="69.426" viewBox="0 0 86.782 69.426">
            <path id="icons8-image_1_" data-name="icons8-image (1)" d="M80.1,4H10.678A8.676,8.676,0,0,0,2,12.678V64.747a8.676,8.676,0,0,0,8.678,8.678H80.1a8.676,8.676,0,0,0,8.678-8.678V12.678A8.676,8.676,0,0,0,80.1,4ZM36.713,21.356A4.339,4.339,0,1,1,32.374,25.7,4.341,4.341,0,0,1,36.713,21.356ZM75.765,60.408H15.017L30.2,40.887,41.052,53.943,56.239,34.378Z" transform="translate(-2 -4)" fill="#fff"/>
          </svg>
          `,
            header: "Create NFTs",
            detail: "Starseas allows you to create your very own NFTS! Our platform focuses on the magnificent wonders and mysteries behind space exploration."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="69.405" height="69.426" viewBox="0 0 69.405 69.426">
            <path id="icons8-sell" d="M16.692,0a2.782,2.782,0,0,0-2.777,2.777v27.77a2.782,2.782,0,0,0,2.777,2.777H58.347a2.782,2.782,0,0,0,2.777-2.777V2.777A2.782,2.782,0,0,0,58.347,0ZM31.271,6.943h12.5a2.083,2.083,0,0,1,0,4.166h-12.5a2.083,2.083,0,1,1,0-4.166ZM18.644,38.748c-3.471,0-6.536,1.242-17.921,6.378A1.4,1.4,0,0,0,.03,46.949L7.406,63.308a1.6,1.6,0,0,0,.824.824A1.39,1.39,0,0,0,9.315,64l3.775-2.473c1.665-1.112,2.332-1.285,4.556-.174L20.6,62.917c3.471,1.806,8.158,4.3,9.546,4.99A12.4,12.4,0,0,0,35.7,69.426a10.529,10.529,0,0,0,6.248-2.213C43.61,66.1,63.917,52.883,65.724,51.635c2.224-1.53,3.6-3.3,3.6-4.686.136-3.889-3.612-4.86-6.943-2.777L47.5,54.152a10.218,10.218,0,0,1-5.814,1.258H33.354a38.022,38.022,0,0,1-8.461-1.389.619.619,0,0,1-.434-.824.581.581,0,0,1,.824-.434h.174a36.145,36.145,0,0,0,8.331,1.389h7.9a4.166,4.166,0,0,0,2.517-.694,3.867,3.867,0,0,0,1.215-1.389c0-.141.174-.125.174-.26v-.174a2.867,2.867,0,0,0,.13-1.085c0-1.665-1.389-3.33-4.166-3.471a41.89,41.89,0,0,1-7.767-1.389,19.227,19.227,0,0,1-2.951-1.128A10.169,10.169,0,0,1,29.449,43.3C27.784,41.5,25.31,38.748,18.644,38.748Zm30.113.13A8.136,8.136,0,0,0,44.2,40.4c-.971.553-5.136,3.205-7.637,4.73a24.827,24.827,0,0,0,5.12.694,7.473,7.473,0,0,1,2.647.564l9.025-6.118A9.34,9.34,0,0,0,48.758,38.878Zm9.155,1.389c-1.389,0-3.021.553-5.38,2.083l-6.943,4.73a4.586,4.586,0,0,1,1.649,3.471,4.94,4.94,0,0,1-.824,2.647l.13-.174.13-.13,15.274-10.11C61.531,40.977,59.3,40.267,57.913,40.267Z" transform="translate(0.076)" fill="#fff"/>
          </svg>
          `,
            header: "Collect NFTS",
            detail: "Explore our marketplace and purchase NFTS from our outstanding creators! Feel free to hold or resell the items that you collect."
        },
    ]
    return (
        <div className={styles.featureWrap}>
            <p className={styles.featureHeader}>New to NFTs?</p>
            <div className={styles.featureItemWrap}>
            {
                featureData.map((item) => 
                    <FeatureItem header={item.header} detail={item.detail} icon={item.icon}/>
                )
            }
            </div>
            
        </div>
    )
}

export default Feature;