import * as FaIcons from 'react-icons/fa'
function FavCount(){
    return(
        <button className="asset__likes" type="button">
            <FaIcons.FaHeart/>
            <span>100k</span>
        </button>
    )
}

export default FavCount