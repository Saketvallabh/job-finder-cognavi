import Image from 'next/image';
import logo from 'public/logo.png';
import avatar from 'public/avatar.png';
import styles from './styles.module.css';

export default function Navbar () {
    const NavList = [
        {
            description: "Dashboard",
        },
        {
            description: "My Networks",
        }, 
        {
            description: "Get Premium",
        }
    ]
    return (
        <>
            <div className={styles.navContainer}>
                <div className={styles.listContainer}>
                    <div className={styles.logoContainer}>
                        <div className={styles.logoImage}><Image src={logo} alt={"logo"}/></div>
                        <span className={styles.styText}>Job Finder</span>
                    </div>
                    {
                        NavList.map((planItem) => {
                            return (
                                <>
                                    <div className={styles.listContent}>
                                        <div className={styles.contentText}>
                                            <p dangerouslySetInnerHTML={{ __html: planItem.description }} ></p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    <div className={styles.avatarContainer}>
                        <div className={styles.logoImage}><Image src={avatar} alt={"logo"}/></div>
                        <span className={styles.styText}>My Profile</span>
                    </div>
                </div>
                <div>
                    <hr style={{width: "100%", color: "red"}}/>
                </div>
            </div>
        </>
    )
}