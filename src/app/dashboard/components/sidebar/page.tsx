import Image from 'next/image'
import bell from 'public/bell.png';
import note from 'public/note.png';
import note_resume from 'public/note_resume.png';
import skill from 'public/skill.png';
import setting from 'public/setting.png'
import styles from './styles.module.css'

export default function SideBar () {
    const userOption = [
        {
            description: "My jobs",
            Image: bell,
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
                    <div className={styles.premiumButton}>
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