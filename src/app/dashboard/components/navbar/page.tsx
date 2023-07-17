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
            <div  className="flex w-full bg-black flex-col h-16"> 
                <div className="flex flex-row w-full h-full items-center pt-2.5 pr-5 pb-2.5 pl-5">
                    <div className="flex flex-row justify-center gap-2.5 w-1/6">
                        <div className="h-5 w-6"><Image src={logo} alt={"logo"}/></div>
                        <span className="font-semibold text-white">Job Finder</span>
                    </div>
                    <div className="flex flex-row justify-center w-1/6">
                        <div className="font-normal text-white cursor-pointer" onClick={handleDashboardClick} style={{color: tab === "dashboard" ? '#d4f6ed' : '#ffffff'}}>
                            <p>Dashboard</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center w-1/6">
                        <div className="font-normal text-white cursor-pointer" onClick={handleNetworkClick} style={{color: tab === "MyNetworks" ? '#d4f6ed' : '#ffffff'}}>
                            <p>My Networks</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center w-1/6">
                        <div className="font-normal text-white cursor-pointer" onClick={handlePremiumClick} style={{color: tab === "GetPremium" ? '#d4f6ed' : '#ffffff'}}>
                            <p>Get Premium</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center w-1/6">
                        <div className="font-normal text-white cursor-pointer" onClick={handleAboutClick} style={{color: tab === "AboutUs" ? '#d4f6ed' : '#ffffff'}}>
                            <p>About Us</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center absolute cursor-pointer right-16 gap-2.5 w-auto" onClick={handleProfileClick}>
                        <div className="h-5 w-6"><Image src={avatar_w} alt={"logo"}/></div>
                        <span className="font-semibold text-white">Saket</span>
                        {showProfile && 
                            <div className="absolute flex flex-col bg-gray text-black px-3 py-3 top-8 rounded-md z-10 min-w-max shadow-2xl">
                                {Profile.map((Item) => 
                                    <>
                                        <span>{Item.Option}</span>
                                        <hr className="w-full justify-center h-0 text-lgray"/>
                                    </>
                                )}
                            </div>
                        }
                    </div>
                </div>
                <div>
                    <hr className="w-full text-white"/>
                </div>
            </div>
        </>
    )
}


//className={styles.navContainer}
//className={styles.listContainer}
//className={styles.logoContainer}
//className={styles.logoImage}
//className={styles.styText}
//className={styles.listContent}
//className={styles.contentText}
//className={styles.avatarContainer}
//className={styles.dropDown}
//className={styles.horizontalLine}