import Image from 'next/image';
import Navbar from '../dashboard/components/navbar/page';
import Cards from './components/cards/page';
import Faq from './components/faq/page';
import computer from 'public/computer.png';
import msgIcon from 'public/msgIcon.png';
import avatar_one from 'public/avatar_one.png';
import tie from 'public/tie.png';
import money_one from 'public/money.png';
import search_one from 'public/search_one.png';
import styles from './styles.module.css'

export default function getPremium () {
    const benefits = [
        {
            perks: "More reach for your profile",
            image: computer,
            alt: "comp"
        },
        {
            perks: "Direct msg to recruiter",
            image: msgIcon,
            alt: "msg"
        },
        {
            perks: "Know who has seen your profile",
            image: avatar_one,
            alt: "avatar"
        },
        {
            perks: "Get more recommended jobs",
            image: tie,
            alt: "tie"
        },
        {
            perks: "Advance search filter",
            image: search_one,
            alt: "search"
        },
        {
            perks: "Salary insights",
            image: money_one,
            alt: "money"
        },
    ]
    return (
       <div className={styles.pricingContainer}>
            <Navbar />
            <div className={styles.pricingBody}>
                <div className={styles.heading}>
                    <span className={styles.headingText}>Switch to Premium now!</span>
                </div>
                <div className={styles.benefitsContainer}>
                    <div className={styles.benefitText}><span>Benefits after becoming a premium user.</span></div>
                    <div className={styles.benefitRowContainer}>
                        <div className={styles.benefitsRow}>
                            {
                                benefits.map((item, index) => {
                                    if(index<=2){
                                        return (
                                            <>
                                                <div className={styles.benefitBox}>
                                                    <div className={styles.benefitImage}>
                                                        <Image src={item.image} alt={item.alt} />
                                                    </div>
                                                    <span style={{color: "black"}}>{item.perks}</span>
                                                </div>
                                            </>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.benefitRowContainer}>
                        <div className={styles.benefitsRow}>
                            {
                                benefits.map((item, index) => {
                                    if(index>=3){
                                        return (
                                            <>
                                                <div className={styles.benefitBox}>
                                                     <div className={styles.benefitImage}>
                                                        <Image src={item.image} alt={item.alt} />
                                                    </div>
                                                    <span style={{color: "black"}}>{item.perks}</span>
                                                </div>
                                            </>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
                <Cards />
                <div className={styles.faqContainer}>
                    <Faq />
                </div>
            </div>
       </div>
    )
}