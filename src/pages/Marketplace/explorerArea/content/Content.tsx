import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import ReactPaginate from 'react-paginate';
function Content() {
    let filterState = useSelector((state: any) => state.search)
    const [allNfts, setAllNfts] = useState([])
    const [nftsPerPage, setNftsPerPage] = useState([])
    const [pages, setPages] = useState(1)
    const [curPage, setCurPage] = useState(1)

    function fetchNfts() {
        let querySearch = filterState.search
        let querySort = filterState.sort
        let queryCategory = filterState.category
        let queryPrice = filterState.price
        let query = ''
        if(querySearch !== undefined && querySearch !== '' && querySearch !== null) {
            query += 'search[search]=' + querySearch + '&'
        }
        if(querySort !== undefined && querySort !== null) {
            query += 'search[sort]=' + querySort + '&'
        }
        if(queryCategory.length > 0) {
            queryCategory.map((item:any) => {
                query += 'search[category]=' + item + '&'
            })
        }
        if(queryPrice.min > 0 || queryPrice.max < Number.MAX_SAFE_INTEGER) {
            query += 'search[price][min]=' + queryPrice.min + '&'
            query += 'search[price][max]=' + queryPrice.max + '&'
        }
        let fetchURL = process.env.REACT_APP_API_BASE_URL + 'nfts?' + query
        console.log(fetchURL)
        fetch(fetchURL)
            .then(res => res.json())
            .then( res => {
                setAllNfts(res)
                setPages(Math.floor(res.length/3) + 1)
            })
    }
    function handlePageClick(e:any) {
        setCurPage(e.selected)
    }
    useEffect(() => {
        console.log(filterState)
        if(allNfts.length === 0) {
            fetchNfts()
        }
        let temp = allNfts.slice(curPage*3, (curPage+1)*3)
        setNftsPerPage([...temp])
        console.log(nftsPerPage)
    // }, [filterState])
    }, [curPage, nftsPerPage, filterState])
    return(
        <div className="col-12 col-xl-9">
            <div className="row row--grid">
                {
                    nftsPerPage.length > 0 ?
                    nftsPerPage.map((item:any, idx:any) => (
                        <Card 
                            nftId={item.nft_id}
                            nftImg={item.img}
                            nftName={item.name} 
                            ownerAddr={item.ownerAddr}
                            currency={item.currency}
                            price={item.price}
                            state = {item.state}
                            favUsers = {item.favUsers}
                        />
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