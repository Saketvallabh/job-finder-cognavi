'use client';
import Image from 'next/image'
import save from 'public/save1.png'
import saved from 'public/saved.png'
import { useState } from 'react';
import styles from './styles.module.css'

interface Props {
    company?: string;
    logo?: any;
    bcolor?: string;
    role?: string;
    pay?: string;
    location?: string;
    level?: string
}

export default function JobCard ({
    company,
    logo,
    bcolor,
    role,
    pay,
    location, 
    level
    } : Props ) {

    const [jobSaved, setJobSaved] = useState(false)

    const filter1 = [
        {
            F: "full time"
        }, 
        {
            F: `${level} level`
        }, 
    ]

    const handleSaveClick = () => {
        setJobSaved(!jobSaved)
    }

    return (
        <>
            <div className={styles.jobCard}>
                <div className={styles.jobDetailContainer} style={{background: bcolor}}>
                    <div className={styles.cardHeader}>
                        <div className={styles.jobDate}><span>20 May,2023</span></div>
                        <div className={styles.saveImagecon} onClick={handleSaveClick}>
                            {jobSaved ? 
                                <div className={styles.savedImgSty}><Image src={saved} alt={"logo"}/></div> 
                                : 
                                <div className={styles.imageSty}><Image src={save} alt={"logo"}/></div>
                            }
                        </div>
                    </div>
                    <div className={styles.companyDetails}>
                        <div className={styles.companyName}>{company}</div>
                        <div className={styles.positionDetail}>
                            <span className={styles.roleDesc}>{role}</span>
                            <span className={styles.companyLogo}><Image src={logo} alt={"logo"}/></span>
                        </div>
                        <div className={styles.jobFilters}>
                            <div className={styles.filterContRow}>{filter1.map((item) => {
                                return (
                                    <>
                                        <span className={styles.filterCont}>{item.F}</span>
                                    </>
                                )
                            })}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.payContainer}>
                    <div className={styles.paytextStyle}>
                        <span className={styles.pay}>{pay}</span>
                        <span className={styles.jobLoc}>{location}</span>
                    </div>
                    <div className={styles.buttonContainer}><span className={styles.buttontext}>Details</span></div>
                </div>
            </div>
        </>
    )
}