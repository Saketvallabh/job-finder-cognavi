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
// import styles from './styles.module.css'

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
       <div className="flex flex-col w-full h-screen bg-white">
            <Navbar />
            <div className="w-full h-4/6 bg-gradient-to-t from-abUscone to-abUsctwo rounded-br-3xl rounded-bl-3xl">
                <div className="flex h-24 items-center justify-center">
                    <span className="text-3xl font-semibold text-black">Switch to Premium now!</span>
                </div>
                <div className="flex flex-col w-full min-h-crc">
                    <div className="flex text-xl font-normal justify-center text-black"><span>Benefits after becoming a premium user.</span></div>
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-row mt-8 justify-between items-center w-4/6 gap-4">
                            {
                                benefits.map((item, index) => {
                                    if(index<=2){
                                        return (
                                            <>
                                                <div className="flex flex-row items-center w-1/3 min-h-gpbc border-2 border-black gap-2.5 rounded-3xl py-5 px-2.5">
                                                    <div className="w-5 h-5">
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
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-row mt-8 justify-between items-center w-4/6 gap-4">
                            {
                                benefits.map((item, index) => {
                                    if(index>=3){
                                        return (
                                            <>
                                                <div className="flex flex-row items-center w-1/3 min-h-gpbc border-2 border-black gap-2.5 rounded-3xl py-5 px-2.5">
                                                     <div className="w-5 h-5">
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
                <div className="flex w-full bg-white mt-16 justify-center">
                    <Faq />
                </div>
            </div>
       </div>
    )
}

//className={styles.pricingContainer}
//className={styles.pricingBody}
//className={styles.heading}
//className={styles.headingText}
//className={styles.benefitsContainer}
//className={styles.benefitText}
//className={styles.benefitRowContainer}
//className={styles.benefitsRow}
//className={styles.benefitBox}
//className={styles.benefitImage}
//className={styles.benefitRowContainer}
//className={styles.benefitsRow}
//className={styles.benefitBox}
//className={styles.benefitImage}
//className={styles.faqContainer}