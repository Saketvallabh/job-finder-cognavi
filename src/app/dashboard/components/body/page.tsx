'use client';
import amazon from 'public/amazon.png';
import google from 'public/google.png';
import dribble from 'public/dribble_logo.png'
import appl from 'public/apple_logo.png'
import { useState } from 'react';
import JobCard from './jobCard';
import styles from './styles.module.css'

export default function Jobs () {
    const [jobSaved, setJobSaved] = useState(false);

    const handleSaveClick = () => {
        setJobSaved(!jobSaved)
    }

    return (
        <>
            <div className={styles.jobsContainer}>
                <div className={styles.heading}>
                    <span className={styles.headingText}>Recommended jobs</span>
                    <div className={styles.headingRight}>
                        <div className={styles.recomNumber}><span className={styles.number}>386</span></div>
                        <div className={styles.sortContainer}>
                            <span>Sort by:</span>
                            <span>&nbsp;</span>
                            <span style={{fontSize: "16px", fontWeight: "600", alignItems: "center"}}>Last Updated</span>
                        </div>
                    </div>
                </div>
                <div className={styles.jobCardContainer}>
                    <div className={styles.jobsRow}>
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
                    <div className={styles.jobsRow}>
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