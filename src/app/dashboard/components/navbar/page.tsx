'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from 'public/logo.png';
import avatar_w from 'public/avatarr.png'
import styles from './styles.module.css';
import { useState } from 'react';

export default function Navbar () {
    const router = useRouter()
    const [showProfile, setShowProfile] = useState(false)

    const Profile = [
        {
            Option: "Profile"
        },
        {
            Option: "Notification"
        },
        {
            Option: "Help"
        },
        {
            Option: "Setting and privacy"
        },
        {
            Option: "Sign out"
        },
        {
            Option: "Close"
        }
    ]

    const handleDashboardClick = () => {
        router.push("/dashboard")
    }

    const handleNetworkClick = () => {
        router.push("/MyNetworks")
    }

    const handlePremiumClick = () => {
        router.push("/GetPremium")
    }

    const handleAboutClick = () => {
        router.push("/AboutUs")
    }

    const handleProfileClick = () => {
        setShowProfile(!showProfile)
    }

    return (
        <>
            <div className={styles.navContainer}>
                <div className={styles.listContainer}>
                    <div className={styles.logoContainer}>
                        <div className={styles.logoImage}><Image src={logo} alt={"logo"}/></div>
                        <span className={styles.styText}>Job Finder</span>
                    </div>
                    <div className={styles.listContent}>
                        <div className={styles.contentText} onClick={handleDashboardClick}>
                            <p>Dashboard</p>
                        </div>
                    </div>
                    <div className={styles.listContent}>
                        <div className={styles.contentText} onClick={handleNetworkClick}>
                            <p>My Networks</p>
                        </div>
                    </div>
                    <div className={styles.listContent}>
                        <div className={styles.contentText} onClick={handlePremiumClick}>
                            <p>Get Premium</p>
                        </div>
                    </div>
                    <div className={styles.listContent}>
                        <div className={styles.contentText} onClick={handleAboutClick}>
                            <p>About Us</p>
                        </div>
                    </div>
                    <div className={styles.avatarContainer} onClick={handleProfileClick}>
                        <div className={styles.logoImage}><Image src={avatar_w} alt={"logo"}/></div>
                        <span className={styles.styText}>My Profile</span>
                        {showProfile && 
                            <div className={styles.dropDown}>
                                {Profile.map((Item) => 
                                    <>
                                        <span>{Item.Option}</span>
                                        <hr className={styles.horizontalLine}/>
                                    </>
                                )}
                            </div>
                        }
                    </div>
                </div>
                <div>
                    <hr style={{width: "100%", color: "red"}}/>
                </div>
            </div>
        </>
    )
}