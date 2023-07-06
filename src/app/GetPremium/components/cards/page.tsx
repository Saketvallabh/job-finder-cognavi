'use client';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css'

export default function Cards () {

    const router = useRouter();
    const handleBuyNowClick = () => {
        router.push("/Payment")
    }

    return (
        <>
            <div className={styles.planCardContainer}>
                <div className={styles.planCards}>
                    <div className={styles.cardOne}>
                        <div className={styles.cardHeading}>Monthly Plan</div>
                        <span className={styles.plan}>US $300<span className={styles.cardHeading}>/mo</span></span>
                        <span>Renew every month</span>
                        <div className={styles.buyBtn} style={{background: "black"}}onClick={handleBuyNowClick}>
                            <span style={{color: "#ffffff"}}>Buy now</span>
                        </div>
                    </div>
                    <div className={styles.cardTwo}>
                        <div className={styles.cardHeadingTwo}>Quaterly Plan</div>
                        <span className={styles.planTwo}>US $250<span className={styles.cardHeadingTwo}>/mo</span></span>
                        <span className={styles.planMsg}>Renew quaterly for $750</span>
                        <div className={styles.buyBtn} onClick={handleBuyNowClick}>
                            Buy now
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}