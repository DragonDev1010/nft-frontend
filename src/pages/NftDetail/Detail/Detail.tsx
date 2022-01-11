
import Content from './Content/Content'
import Sidebar from './Sidebar/Sidebar'
function Detail(props:any) {
    console.log('sdf: ', props.nftId)
    return(
        <div className="row">
            <Content/>
            <Sidebar />
        </div>
    )
}

export default Detail