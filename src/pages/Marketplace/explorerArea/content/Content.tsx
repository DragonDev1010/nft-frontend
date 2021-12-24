import {useState, useEffect} from 'react'

import Card from './Card'
import Paginator from './Paginator'
function Content() {
    const [nfts, setNfts] = useState([])

    function fetchNfts() {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'nfts?'
        fetch(fetchURL)
            .then(res => res.json())
            .then( res => {
                setNfts(res)
            })
    }
    useEffect(() => {
        fetchNfts()
    }, [])
    return(
        <div className="col-12 col-xl-9">
            <div className="row row--grid">
                {
                    nfts.length > 0 ?
                    nfts.map((item:any, idx:any) => (
                        <Card details={item}/>
                    ))
                    :
                    ""
                }
            </div>

            {/* paginator */}
            <Paginator amount={nfts.length}/>
            {/* end paginator */}

        </div>
    )
}

export default Content