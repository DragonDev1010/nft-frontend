import styles from './Footer.module.css'
import * as FaIcons from 'react-icons/fa'
function Social() {
    return (
        <div className={styles.socialWrap}>
            <p className={styles.itemTitle}>Social</p>
            <FaIcons.FaTelegram size={40} />
            <FaIcons.FaTwitter size={40} />
        </div>
    )
}

export default Social