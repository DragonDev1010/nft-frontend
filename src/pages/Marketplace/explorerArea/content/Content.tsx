import {useState, useEffect} from 'react'

import Card from './Card'
import Paginator from './Paginator'
import ReactPaginate from 'react-paginate';
function Content() {
    const [items, setItems] = useState([])
    const [nfts, setNfts] = useState([])
    const [pages, setPages] = useState(1)
    const [page, setPage] = useState(1)

    function fetchNfts() {
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'nfts?'
        fetch(fetchURL)
            .then(res => res.json())
            .then( res => {
                setNfts(res)
                setPages(Math.floor(res.length/3) + 1)
            })
    }
    function handlePageClick(e:any) {
        setPage(e.selected)
    }
    useEffect(() => {
        if(nfts.length === 0) {
            fetchNfts()
        }
        let temp = nfts.slice(page*3, (page+1)*3)
        setItems(temp)
        console.log(items)
    }, [page, items])
    return(
        <div className="col-12 col-xl-9">
            <div className="row row--grid">
                {
                    items.length > 0 ?
                    items.map((item:any, idx:any) => (
                        <Card details={item}/>
                    ))
                    :
                    ""
                }
            </div>

            <ReactPaginate
                previousLabel={'\u2190'}
                nextLabel={'\u2192'}
                pageCount={pages}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
                className='paginator__list'
            />
        </div>
    )
}

export default Content