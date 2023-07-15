'use client';
import Image from 'next/image'
import save from 'public/save1.png'
import saved from 'public/saved.png'
import { useState } from 'react';
// import styles from './styles.module.css'

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
            <div className="flex flex-col items-center bg-cgray px-1.5 py-1.5 rounded-3xl w-4/12 border border-black min-h-ch">
                <div className="flex flex-col w-full px-2.5 py-2.5 rounded-3xl h-4/5" style={{background: bcolor}}>
                    <div className="flex flex-row w-full justify-between">
                        <div className="flex bg-dgray justify-center items-center h-10 text-black rounded-3xl min-w-dcw"><span>20 May,2023</span></div>
                        <div className="w-11 h-11 flex bg-dgray items-center justify-center cursor-pointer rounded-full" onClick={handleSaveClick}>
                            {jobSaved ? 
                                <div className="h-6 w-6"><Image src={saved} alt={"logo"}/></div> 
                                : 
                                <div className="h-8 w-8"><Image src={save} alt={"logo"}/></div>
                            }
                        </div>
                    </div>
                    <div className="flex w-full flex-col mt-5">
                        <div className="flex text-sm text-black">{company}</div>
                        <div className="flex flex-row w-full justify-between items-center">
                            <span className="flex w-3/5 text-2xl text-black">{role}</span>
                            <span className="items-center h-10 w-10"><Image src={logo} alt={"logo"}/></span>
                        </div>
                        <div className="flex flex-row w-full mt-5 justify-between">
                            <div className="flex flex-row w-full gap-2.5">{filter1.map((item) => {
                                return (
                                    <>
                                        <span className="flex justify-center items-center w-2/5 text-black border border-black rounded-3xl">
                                            {item.F}
                                        </span>
                                    </>
                                )
                            })}</div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-row items-center justify-evenly min-h-cb">
                    <div className="flex flex-col w-3/5 justify-center">
                        <span className="text-base font-semibold text-black">{pay}</span>
                        <span className="text-xs text-black">{location}</span>
                    </div>
                    <div className="flex w-3/12 bg-black justify-center items-center cursor-pointer rounded-3xl min-h-cdb">
                        <span className="text-sm text-white">Details</span>
                    </div>
                </div>
            </div>
        </>
    )
}

//className={styles.jobCard}
//className={styles.jobDetailContainer}
//className={styles.cardHeader}
//className={styles.jobDate}
//className={styles.saveImagecon}
//className={styles.savedImgSty}
//className={styles.imageSty}
//className={styles.companyDetails}
//className={styles.companyName}
//className={styles.positionDetail}
//className={styles.roleDesc}
//className={styles.companyLogo}
//className={styles.jobFilters}
//className={styles.filterContRow}
//className={styles.filterCont}
//className={styles.payContainer}
//className={styles.paytextStyle}
//className={styles.pay}
//className={styles.jobLoc}
//className={styles.buttonContainer}
//className={styles.buttontext}