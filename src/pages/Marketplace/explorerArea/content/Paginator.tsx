import { useState, useEffect } from 'react'
import * as FaIcons from 'react-icons/fa'
function Paginator(props:any) {
    const [pages, setPages] = useState<any>([])
    useEffect(() => {
        let p = Math.floor(props.amount/6) + 1
        let temp = Array()
        for(let i = 1 ; i <= p ; i++) {
            temp.push(i)
        }
        setPages(temp)
    })
    return (
        <div className="row row--grid">
            <div className="col-12">
                <div className="paginator">
                    <ul className="paginator__list">
                        <li>
                            <a href="#"><FaIcons.FaArrowLeft /></a>
                        </li>
                        {
                            pages.map((item:any) => (
                                <li><a href="#">{item}</a></li>
                            ))
                        }     
                        <li>
                            <a href="#"><FaIcons.FaArrowRight /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Paginator