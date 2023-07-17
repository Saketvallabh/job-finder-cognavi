'use client';
import amazon from 'public/amazon.png';
import google from 'public/google.png';
import dribble from 'public/dribble_logo.png'
import appl from 'public/apple_logo.png'
import { useEffect, useState } from 'react';
import JobCard from './jobCard';
import axios from 'axios';
// import styles from './styles.module.css'

export default function Jobs () {
    const [jobSaved, setJobSaved] = useState(false);

    const handleSaveClick = () => {
        setJobSaved(!jobSaved)
    }

    // NOTE ->  I have tried to integrate apis using rapid api, serp Api, adzua and even more but some of them requires Internation payment
    //          and rest of them requires CORS configuration from server side which not feasible in my case.
    //          I tried even more with public api but same issue either they need authorisation key which i will only after entering vredit card details
    //          or they need some sever side configuration.

    // I will just write here the steps which i would have done in case if i found job apis
    
    // 1. first i will collect my response in state variable.  
    //     ex - const [jobs, setJobs] = useState<jobList[]>([]);

    // 2. then if i need to use it in diff component, i will send it as props 
    //     ex- <Component jobs={jobs} />

    // 3. since we are using TypeScript i have define type of my props hence will define it like 
    //     interface Job {
    //       jobRole: string;
    //       companyName: string;
    //       location: string;
    //       pay: Number
    //     }

    // 4. in child component i will receive the props as 
    //      interface ChildComponentProps {
    //          jobs: Job[];
    //      }
    //    function childComponent ({ChildComponentProps: props})



    // async function getSearchResults(query: string): Promise<void> {
    //     const apiKey = 'f0748a4fa911dac5b6a4c3d604752911dd69bd70b32f3a0a2cfb8d7506ed31e2';
    //     const searchEngine = 'google_jobs'; 
    //     //'http://serpapi.com/search'
    //     try {
    //         const response = await axios.get(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=9fc903d4&app_key=d046bbf17aadf0839bc12180014c9179`, {
    //         headers: {
    //             'Access-Control-Allow-Origin': '*', 
    //             'Access-Control-Allow-Methods': 'GET',
    //             'Accept': 'application/json'
    //             },
    //         // params: {
    //         //     q: query,
    //         //     api_key: apiKey,
    //         //     engine: searchEngine,
    //         // },
    //         });

    //         //const searchResults = response.data;
    //         console.log("********api", response)

    //     } catch (error) {
    //         console.error('Error fetching search results:', error);
    //     }
    // }

    // const getjobs = async () => {
    //     const url = 'https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=9fc903d4&app_key=d046bbf17aadf0839bc12180014c9179';
    //     const options = {
    //         headers: {
    //             'Access-Control-Allow-Origin': '*', 
    //             'Access-Control-Allow-Methods': 'GET',
    //             'Accept': 'application/json'
    //         }
    //     }
    //     try {
    //         const response = await fetch(url, options);
    //         //const result = await response.text();
    //         console.log(response);
    //     } catch (error) {
    //         console.error(error, "error in api");
    //     }
    // }

    useEffect(() => {
        //getSearchResults("barista new york");
        //getjobs();
    }, [])


    return (
        <>
            <div className="flex flex-col w-full pt-8 pr-6 pb-1 pl-5">
                <div className="flex flex-row w-full h-10 items-center">
                    <span className="flex text-3xl font-semibold text-black min-w-hrm">Recommended jobs</span>
                    <div className="flex justify-between w-9/12">
                        <div className="flex w-20 h-10 items-center justify-center text-black border-2 border-nbb px-1 py-4 rounded-3xl">
                            <span className="font-semibold">386</span>
                        </div>
                        <div className="flex w-2/5">
                            <span className="text-black">Sort by:</span>
                            <span>&nbsp;</span>
                            <span className="text-base font-semibold text-black items-center">Last Updated</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full mt-5">
                    <div className="flex flex-row justify-between mb-2 pt-2.5 gap-2.5 w-11/12">
                        <JobCard 
                            company={"Amazon"}
                            logo={amazon}
                            bcolor="#ffe1cc"
                            pay="$250/hr"
                            location="San Francisco, CA"
                            role="Senior UI/UX Designer"
                            level="Senior"
                        />
                        <JobCard 
                            company={"Google"}
                            logo={google}
                            bcolor="#d4f6ed"
                            pay="$150/hr"
                            location="California, CA"
                            role="Junior UI/UX Designer"
                            level="Junior"
                        />
                        <JobCard 
                            company={"Apple"}
                            logo={appl}
                            bcolor="#e3dbfa"
                            pay="$260/hr"
                            location="New York, NY"
                            role="Senior Motion Designer"
                            level="Senior"
                        />
                    </div>
                    <div className="flex flex-row justify-between mb-2 pt-2.5 gap-2.5 w-11/12">
                        <JobCard 
                            company={"Dribble"}
                            logo={dribble}
                            bcolor="#fbe2f4"
                            pay="$120/hr"
                            location="California, CA"
                            role="Senior Product Manage"
                            level="Senior"
                        />
                        <JobCard 
                            company={"Amazon"}
                            logo={amazon}
                            bcolor="#b8dee0"
                            pay="$300/hr"
                            location="New York, NY"
                            role="Junior Data Scientist"
                            level="Junior"
                        />
                        <JobCard 
                            company={"Google"}
                            logo={google}
                            bcolor="#b8c9e0"
                            pay="$140/hr"
                            location="San Francisco, CA"
                            role="Graphic Designer"
                            level="Junior"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}


//className={styles.jobsContainer}
//className={styles.heading}
//className={styles.headingText}
//className={styles.headingRight}
//className={styles.recomNumber}
//className={styles.number}
//className={styles.sortContainer}
//className={styles.jobCardContainer}
//className={styles.jobsRow}