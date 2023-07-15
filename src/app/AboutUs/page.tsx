// import styles from './styles.module.css'
import Navbar from '../dashboard/components/navbar/page'

export default function AboutUs () {

    return (
        <>
            <Navbar />
            <div className="flex flex-col w-full bg-white">
                <div className="flex flex-row w-full gap-10 px-12 py-12">
                    <div className="flex items-center text-center justify-center text-4xl font-semibold text-black rounded-full w-7/12 min-h-auch bg-gradient-to-t from-abUscone to-abUsctwo">Who are we?</div>
                    <div className="flex text-xl font-normal p-10 w-4/5">
                        <span className="text-black leading-8">
                            We are a leading job finding site dedicated to connecting job seekers with their ideal employment opportunities. 
                            With a strong focus on simplicity, efficiency, and user satisfaction, our platform serves as a comprehensive hub for individuals looking to explore and secure meaningful employment. 
                            Our team consists of experienced professionals passionate about bridging the gap between job seekers and employers, providing a seamless experience throughout the job search process.
                            For us, doing good is just as if not more important than doing well. 
                            Our employees are encouraged to engage in charitable giving and volunteer programs like Coaches, 
                            which has helped empower over 1.2M+ job seekers facing barriers to grow their careers and expand their networks through career coaching and mentorship.
                        </span>
                    </div>
                </div>
                <div className="flex flex-row w-full gap-10 px-12 py-12">
                    <div className="flex text-xl font-normal p-10 w-4/5">
                        <span className="text-black leading-8">
                            At our job finding site, we strive to simplify and streamline the job search experience for both candidates and employers. 
                            We offer a wide range of features and services designed to empower job seekers in their quest for the perfect job and assist employers in finding the right talent for their organizations. 
                            Our platform hosts an extensive database of job listings across various industries, allowing users to search and filter through opportunities that match their skills, qualifications, and preferences. 
                            Additionally, we provide tools for creating professional resumes, submitting job applications, and tracking the progress of applications. 
                            With our user-friendly interface and advanced search algorithms, we aim to enhance the efficiency and effectiveness of the job search process, ultimately helping individuals find fulfilling careers and companies discover exceptional talent.
                        </span>
                    </div>
                    <div className="flex items-center text-center justify-center text-4xl font-semibold text-black rounded-full w-7/12 min-h-auch bg-gradient-to-t from-abUscone to-abUsctwo">What we do?</div>
                </div>
                <div className="flex flex-col w-full py-12 px-12 gap-10">
                    <div className="flex mt-12 w-full pl-8 text-3xl text-black">Did you know?</div>
                    <div className="flex flex-row justify-between w-full text-black px-8 py-2.5 gap-4">
                        <div className="flex flex-col text-xl text-black rounded-xl py-5 px-8 min-h-dykc bg-gradient-to-t from-abUscone to-abUsctwo w-1/3">
                            In 2021, we launched our inclusive leadership for managers initiative, reaching over three-quarters of our global manager population. 
                        </div>
                        <div className="flex flex-col text-xl text-black rounded-xl py-5 px-8 min-h-dykc bg-gradient-to-t from-abUscone to-abUsctwo w-1/3">
                            The number of Black and Latino leaders, managers, and senior ICs at LinkedIn grew by 35% and 20.3% respectively in FY21.
                        </div>
                        <div className="flex flex-col text-xl text-black rounded-xl py-5 px-8 min-h-dykc bg-gradient-to-t from-abUscone to-abUsctwo w-1/3">
                            Globally, women represent nearly 42% of our company’s leadership.
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

//className={styles.aboutUsContainer}
//className={styles.aboutContainer}
//className={styles.center}
//className={styles.ansTextContainer}
//className={styles.bottomContainer}
//className={styles.knowContainer}
//className={styles.didYouContainer}
//className={styles.knowBox}