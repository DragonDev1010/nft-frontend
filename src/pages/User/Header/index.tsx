import styles from '../User.module.css'
import Background from './Background'
import UserInfo from './UserInfo'
function Header() {
    return (
        <div className={styles.headerWrap}>
            <Background />
        </div>
    )
}

export default Header