import * as FaIcons from 'react-icons/fa'
import {useState, useEffect} from 'react'
function DetailsTab() {
    const [desc, setDesc] = useState("Nft Description Undefined")
    return(
        <div className="tab-pane fade show active" id="tab-33" role="tabpanel">
            <div className="asset__desc--tab">
                <p>{desc}</p>
                <div className="asset__desc--content">
                    <div className="asset__desc-list">
                        <span> <FaIcons.FaUser/>Item Artist </span>
                        <span> Marilyn Root </span>
                    </div>
                    <div className="asset__desc-list">
                        <span> <FaIcons.FaClock/>Created </span>
                        <span> 25 Sep 2021 </span>
                    </div>
                    <div className="asset__desc-list">
                        <span> <FaIcons.FaJournalWhills/>Item Size </span>
                        <span> 2200 x 2500 </span>
                    </div>
                    <div className="asset__desc-list">
                        <span> <FaIcons.FaLayerGroup/>Formats </span>
                        <span> MP4, JPEG </span>
                    </div>
                    <div className="asset__desc-list">
                        <span> <FaIcons.FaDownload/>Downloadable file </span>
                        <span> Yes </span>
                    </div>
                    <div className="asset__desc-list">
                        <span> <FaIcons.FaBook/>Edition </span>
                        <span> 1/1 </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsTab