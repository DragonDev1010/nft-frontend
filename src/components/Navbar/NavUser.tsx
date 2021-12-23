import {Dropdown} from 'react-bootstrap'
import * as FaIcons from 'react-icons/fa'
import avatar1 from '../../assets/img/avatars/avatar-1.jpg'
function NavUser() {
    return(
        <div className="header__actions">
            <div className="header__action header__action--search">
                <button className="header__action-btn" type="button"><FaIcons.FaSearch/></button>
            </div>

            <div className="header__action header__action--profile">
                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic" className="header__profile-btn header__profile-btn--verified">
                        <img src={avatar1} alt=""/>
                        <div>
                            <p>@wilson</p>
                            <span>920.75 ETH</span>
                        </div>
                        <FaIcons.FaAngleDown />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="header__profile-menu">
                        <Dropdown.Item href="/profile"><FaIcons.FaUser /> <span>Profile</span></Dropdown.Item>
                        <Dropdown.Item href="/profile"><FaIcons.FaListUl/><span>Activity</span></Dropdown.Item>
                        <Dropdown.Item href="/addItem"><FaIcons.FaLayerGroup/> <span>Add Item</span></Dropdown.Item>
                        <Dropdown.Item href="/profile"><FaIcons.FaCog /> <span>Settings</span></Dropdown.Item>
                        <Dropdown.Item href="/"><FaIcons.FaSignOutAlt/> <span>Sign out</span></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default NavUser