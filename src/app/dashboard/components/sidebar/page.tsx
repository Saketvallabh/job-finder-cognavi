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

    // const location = {
    //     async: true,
    //     crossDomain: true,
    //     url: 'https://city-and-state-search-api.p.rapidapi.com/cities/132782',
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'baac45ea12mshd1afe6f34339e0dp155ccejsn73e30e3f3207',
    //         'X-RapidAPI-Host': 'city-and-state-search-api.p.rapidapi.com'
    //     }
    // };
    
    // $.ajax(location).done(function (response) {
    //     console.log(response, "location");
    // });

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

    const url = 'https://job-opening-analyzer.p.rapidapi.com/jobs?keyword=Marketing&location=California&skip=0&limit=10';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'baac45ea12mshd1afe6f34339e0dp155ccejsn73e30e3f3207',
            'X-RapidAPI-Host': 'job-opening-analyzer.p.rapidapi.com'
        }
    };

    const jobApi = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    const url1 = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries/US/places';
    const options1 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'baac45ea12mshd1afe6f34339e0dp155ccejsn73e30e3f3207',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };

    const placeApi = async () => {
        try {
            const response = await fetch(url1, options1);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        jobApi();
        placeApi();
    }, [])

    return (
        <>
            <div className="flex flex-col w-full gap-12 pt-10 pl-5 pr-1 pb-1">
                <div className="flex flex-col w-full h-80 rounded-3xl py-2.5 px-4 bg-gradient-to-t from-cblack to-cblue">
                    <div className="flex flex-col h-5/6">
                        <span className="font-normal text-aliceblue">
                            <span className="text-3xl font-semibold">Increase</span> <span>&nbsp;</span>  
                            your chances of getting hired by <span>&nbsp;</span> 
                            <span className="text-3xl font-semibold text-aliceblue">3x</span>
                        </span>
                        <span className="font-normal text-dgray mt-2">premium user profile has more reach in compare with non premium user, which helps them to get hired faster.</span>
                    </div>
                    <div className="flex w-full h-5 bg-acqa items-center justify-center cursor-pointer rounded-3xl min-h-gpbh" onClick={handlePremiumClick}>
                        <span className="text-black">Get Premium</span>
                    </div>
                </div>
                <div className="flex flex-col px-2.5 py-2.5 rounded-3xl border-2 border-black">
                {
                    userOption.map((item) => {
                        return (
                            <>
                                <div className="flex flex-row w-full h-12 items-center cursor-pointer gap-4">
                                    <div className="w-5 h-5"><Image src={item.Image} alt={item.alt}/></div>
                                    <div className="font-normal text-black">{item.description}</div>
                                </div>
                                <div><hr className="justify-center h-0 w-11/12 text-black"/></div>
                            </>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}

//className={styles.cardContainer}
//className={styles.msgContainer}
//className={styles.cardMsg}
//className={styles.multiText} 
//className={styles.cardMsgDetail}
//className={styles.premiumButton}
//className={styles.optionContainer}
//className={styles.optionBox}
//{styles.imageContainer}
//className={styles.optionText}
//className={styles.horizontalLine}