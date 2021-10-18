import * as FaIcons from "react-icons/fa"
import FilterSubitemStatus from './FilterSubitemStatus'
import FilterSubitemPrice from './FilterSubitemPrice'
import FilterSubitemCollection from './FilterSubitemCollection'
const FilterItemData = [
    {
        name: "Filters",
        icon: <FaIcons.FaFilter size={18}/>
    },
    {
        name: "Status",
        icon: <FaIcons.FaCircle size={18}/>,
        submenu: <FilterSubitemStatus/>
    },
    {
        name: "Price",
        icon: <FaIcons.FaCoins size={18}/>,
        submenu: <FilterSubitemPrice/>
    },
    {
        name: "Collections",
        icon: <FaIcons.FaCubes size={18}/>,
        submenu: <FilterSubitemCollection />
    },
    {
        name: "Categories",
        icon: <FaIcons.FaRegListAlt size={18}/>
    },
]

export default FilterItemData