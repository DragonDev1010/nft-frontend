import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import ReactPaginate from 'react-paginate';
function Content() {
    let filterState = useSelector((state: any) => state.search)
    const [items, setItems] = useState([])
    const [nfts, setNfts] = useState([])
    const [pages, setPages] = useState(1)
    const [page, setPage] = useState(1)

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
                setNfts(res)
                setPages(Math.floor(res.length/3) + 1)
            })
    }
    function handlePageClick(e:any) {
        setPage(e.selected)
    }
    useEffect(() => {
        console.log(filterState)
        if(nfts.length === 0) {
            fetchNfts()
        }
        let temp = nfts.slice(page*3, (page+1)*3)
        setItems(temp)
        console.log(items)
    // }, [filterState])
    }, [page, items, filterState])
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