'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import type { GoogleJobsParameters } from "serpapi";
import { getJson } from "serpapi";
import $ from "jquery";
import bell from 'public/bell.png';
import note from 'public/note.png';
import note_resume from 'public/note_resume.png';
import skill from 'public/skill.png';
import setting from 'public/setting.png';
import saved from 'public/saved.png'
import styles from './styles.module.css'
import { useEffect } from 'react';

export default function SideBar () {
    const router = useRouter();
    const userOption = [
        {
            description: "My jobs",
            Image: saved,
            alt: "search"
        },
        {
            description: "Job Alerts",
            Image: bell,
            alt: "bell"
        }, 
        {
            description: "Skill Assessments",
            Image: skill,
            alt: "skill"
        },
        {
            description: "Interview Prep",
            Image: note,
            alt: "note"
        },
        {
            description: "Resume Builder",
            Image: note_resume,
            alt: "resume"
        },
        {
            description: "Settings",
            Image: setting,
            alt: "setting"
        }
    ]

    const handlePremiumClick = () => {
        router.push("/GetPremium")
    }
    
    // const searchJob = {
    //     async: true,
    //     url: 'https://serpapi.com/search.json?api_key=f0748a4fa911dac5b6a4c3d604752911dd69bd70b32f3a0a2cfb8d7506ed31e2&engine=google_jobs&q=barista+new+york&hl=en',
    //     method: 'GET',
        
    // };

    // $.ajax(searchJob).done(function (response) {
    //     console.log(response, "jobsearch");
    // });

    const location = {
        async: true,
        crossDomain: true,
        url: 'https://city-and-state-search-api.p.rapidapi.com/cities/132782',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'baac45ea12mshd1afe6f34339e0dp155ccejsn73e30e3f3207',
            'X-RapidAPI-Host': 'city-and-state-search-api.p.rapidapi.com'
        }
    };
    
    $.ajax(location).done(function (response) {
        console.log(response, "location");
    });

    // const settings = {
    //     async: true,
    //     crossDomain: true,
    //     url: 'https://fresh-linkedin-profile-data.p.rapidapi.com/get-linkedin-profile?linkedin_url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fwilliamhgates%2F',
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'baac45ea12mshd1afe6f34339e0dp155ccejsn73e30e3f3207',
    //         'X-RapidAPI-Host': 'fresh-linkedin-profile-data.p.rapidapi.com'
    //     }
    // };
    
    // $.ajax(settings).done(function (response) {
    //     console.log(response, "api response");
    // });

    return (
        <>
            <div className={styles.sidebarContainer}>
                <div className={styles.cardContainer}>
                    <div className={styles.msgContainer}>
                        <span className={styles.cardMsg}>
                            <span style={{fontSize: "32px"}}>Increase</span> <span>&nbsp;</span>  
                            your chances of getting hired by <span>&nbsp;</span> 
                            <span className={styles.multiText}>3x</span>
                        </span>
                        <span className={styles.cardMsgDetail}>premium user profile has more reach in compare with non premium user, which helps them to get hired faster.</span>
                    </div>
                    <div className={styles.premiumButton} onClick={handlePremiumClick}>
                        <span>Get Premium</span>
                    </div>
                </div>
                <div className={styles.optionContainer}>
                {
                    userOption.map((item) => {
                        return (
                            <>
                                <div className={styles.optionBox}>
                                    <div className={styles.imageContainer}><Image src={item.Image} alt={item.alt}/></div>
                                    <div className={styles.optionText}>{item.description}</div>
                                </div>
                                <div><hr className={styles.horizontalLine}/></div>
                            </>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}