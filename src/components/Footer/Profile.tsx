import styles from './Footer.module.css'

function Profile() {
    return (
        <div className={styles.profileWrap}>
            <p className={styles.itemTitle}>Profile</p>
            <ul>
                <li><a>Collected</a></li>
                <li><a>Created</a></li>
                <li><a>Favorite</a></li>
                <li><a>Activity</a></li>
                <li><a>Offers</a></li>
            </ul>
        </div>
    )
}

export default Profile