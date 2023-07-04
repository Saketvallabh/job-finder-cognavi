import Navbar from './components/navbar/page';
import Filters from './components/filterNudge/page';
import SideBar from './components/sidebar/page';
import Jobs from './components/body/page';
import styles from './styles.module.css'

export default function Dashboard () {
    return (
        <>
            <Navbar/>
            <Filters />
            <div className={styles.mainContainer}>
                <div className={styles.sidebar}>
                    <SideBar />
                </div>
                <div className={styles.body}>
                    <Jobs />
                </div>
            </div>
        </>
    )
}