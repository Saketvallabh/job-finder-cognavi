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
    const [tab, setTab] = useState("")

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
        setTab("dashboard")
    }

    const handleNetworkClick = () => {
        router.push("/MyNetworks")
        setTab("MyNetworks")
    }

    const handlePremiumClick = () => {
        router.push("/GetPremium")
        setTab("GetPremium")
    }

    const handleAboutClick = () => {
        router.push("/AboutUs")
        setTab("AboutUs")
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
                        <div className={styles.contentText} onClick={handleDashboardClick} style={{color: tab === "dashboard" ? '#d4f6ed' : '#ffffff'}}>
                            <p>Dashboard</p>
                        </div>
                    </div>
                    <div className={styles.listContent}>
                        <div className={styles.contentText} onClick={handleNetworkClick} style={{color: tab === "MyNetworks" ? '#d4f6ed' : '#ffffff'}}>
                            <p>My Networks</p>
                        </div>
                    </div>
                    <div className={styles.listContent}>
                        <div className={styles.contentText} onClick={handlePremiumClick} style={{color: tab === "GetPremium" ? '#d4f6ed' : '#ffffff'}}>
                            <p>Get Premium</p>
                        </div>
                    </div>
                    <div className={styles.listContent}>
                        <div className={styles.contentText} onClick={handleAboutClick} style={{color: tab === "AboutUs" ? '#d4f6ed' : '#ffffff'}}>
                            <p>About Us</p>
                        </div>
                    </div>
                    <div className={styles.avatarContainer} onClick={handleProfileClick}>
                        <div className={styles.logoImage}><Image src={avatar_w} alt={"logo"}/></div>
                        <span className={styles.styText}>Saket</span>
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