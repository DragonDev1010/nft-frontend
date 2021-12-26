import { useStore, useSelector } from 'react-redux'
import {useState} from 'react'
function CategoryBtn(props:any) {
    const [checked, setChecked] = useState(false)
    const store = useStore()
    let storeState = useSelector((state: any) => state.search.category)
    let temp: any[] = [] 
    if(storeState !== undefined) {
        storeState.map((item:any) => {
            temp.push(item)
        })
    }
    function handleCheck(e:any) {
        setChecked(!checked)
        if(temp.length == 0) {
            console.log(e.target.id)
            temp.push(e.target.id)
        } else {
            console.log(e.target.id)
            if(temp.includes(e.target.id)) {
                temp.splice(temp.indexOf(e.target.id), 1)
            } else {
                temp.push(e.target.id)
            }
        }
        store.dispatch({
            type: "changeState",
            search: {
                status: store.getState().search.status,
                price: store.getState().search.price,
                category: temp
            }
        })
    }
    return(
        <li key={props.category}>
            {
                storeState.includes(props.category) ?
                <input id={props.category} type="checkbox" name={props.category} checked onChange={handleCheck}/>
                :
                <input id={props.category} type="checkbox" name={props.category} onChange={handleCheck}/>
            }
            <label htmlFor={props.category}>{props.category}</label>
        </li>
    )
}

export default CategoryBtn