import styles from './styles.module.css'
import Navbar from '../dashboard/components/navbar/page'

export default function AboutUs () {
    return (
        <>
            <Navbar />
            <div className={styles.aboutUsContainer}>
                <div className={styles.aboutContainer}>
                    <div className={styles.center}>Who are we?</div>
                    <div className={styles.ansTextContainer}>
                        <span>
                            We are a leading job finding site dedicated to connecting job seekers with their ideal employment opportunities. 
                            With a strong focus on simplicity, efficiency, and user satisfaction, our platform serves as a comprehensive hub for individuals looking to explore and secure meaningful employment. 
                            Our team consists of experienced professionals passionate about bridging the gap between job seekers and employers, providing a seamless experience throughout the job search process.
                            For us, doing good is just as if not more important than doing well. 
                            Our employees are encouraged to engage in charitable giving and volunteer programs like Coaches, 
                            which has helped empower over 1.2M+ job seekers facing barriers to grow their careers and expand their networks through career coaching and mentorship.
                        </span>
                    </div>
                </div>
                <div className={styles.aboutContainer}>
                    <div className={styles.ansTextContainer}>
                        <span>
                            At our job finding site, we strive to simplify and streamline the job search experience for both candidates and employers. 
                            We offer a wide range of features and services designed to empower job seekers in their quest for the perfect job and assist employers in finding the right talent for their organizations. 
                            Our platform hosts an extensive database of job listings across various industries, allowing users to search and filter through opportunities that match their skills, qualifications, and preferences. 
                            Additionally, we provide tools for creating professional resumes, submitting job applications, and tracking the progress of applications. 
                            With our user-friendly interface and advanced search algorithms, we aim to enhance the efficiency and effectiveness of the job search process, ultimately helping individuals find fulfilling careers and companies discover exceptional talent.
                        </span>
                    </div>
                    <div className={styles.center}>What we do?</div>
                </div>
                <div className={styles.bottomContainer}>
                    <div className={styles.knowContainer}>Did you know?</div>
                    <div className={styles.didYouContainer}>
                        <div className={styles.knowBox}>
                            In 2021, we launched our inclusive leadership for managers initiative, reaching over three-quarters of our global manager population. 
                        </div>
                        <div className={styles.knowBox}>
                            The number of Black and Latino leaders, managers, and senior ICs at LinkedIn grew by 35% and 20.3% respectively in FY21.
                        </div>
                        <div className={styles.knowBox}>
                            Globally, women represent nearly 42% of our company’s leadership.
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}