import Image from 'next/image';
import subs from 'public/logo.png';
import coupon from 'public/coupon.png';
import caretRight from 'public/caretRight.png';
import styles from './styles.module.css';

export default function Payment () {
    return (
        <>
            <div className={styles.paymentContainer}>
                <div className={styles.payDetailContainer}>
                    <div className={styles.payDetails}>
                        <div className={styles.headerPlan}>
                            <div className={styles.subsImage}>
                                <Image src={subs} alt={"subs"}/>
                            </div>
                            <div className={styles.planName}>
                                <span className={styles.planText}>Quaterly Plan</span>
                                <span className={styles.planText}>$750</span>
                            </div>
                        </div>
                        <div className={styles.couponContainer}>
                            <div className={styles.couponImage}>
                                <Image src={coupon} alt={"coupon"} />
                            </div>
                            <div className={styles.discountMsg}>
                                <span className={styles.discountText}>Have a discount Code?</span>
                                <div className={styles.couponImage}><Image src={caretRight} alt={"arrow"}/></div>
                            </div>
                        </div>
                        <div className={styles.toPayContainer}>
                            <span>To Pay</span>
                            <span>$750</span>
                        </div>
                        <div className={styles.cancelContainer}>
                            <span className={styles.cancelStar}>*</span>
                            <span className={styles.cancelMsg}>cancel anytime</span>
                        </div>
                    </div>
                    <div className={styles.userDetails}>
                        <div className={styles.cardNoContainer}>
                            <div className={styles.cardDetailContainer}>
                                <div>Enter your card Number</div>
                                <input className={styles.cardInput} id="cardNo" name="card" placeholder="4242 4242 4242 4242"></input>
                            </div>
                            <div className={styles.cvvContainer}>
                                <div>Expiry Month</div>
                                <input className={styles.cardInput} id="month" name="month" placeholder="05/02/23"></input>
                            </div>
                        </div>
                        <div className={styles.nameContainer}>
                            <div className={styles.cardDetailContainer}>
                                <div>Enter your name</div>
                                <input className={styles.cardInput} id="name" name="name" placeholder="Saket Vallabh"></input>
                            </div>
                            <div className={styles.cvvContainer}>
                                <div>Cvv</div>
                                <input className={styles.cardInput} id="cvv" name="cvv" placeholder="333"></input>
                            </div>
                        </div>
                        <div className={styles.nameContainer}>
                            <div className={styles.cardDetailContainer}>
                                <div>Enter your email</div>
                                <input className={styles.cardInput} id="email" name="email" placeholder="Saketvallabh@gmail.com"></input>
                            </div>
                            <div className={styles.cvvContainer}>
                                <div>Phone number</div>
                                <input className={styles.cardInput} id="phone" name="phone" placeholder="3784783838"></input>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.amountContainer}>
                            <span className={styles.amount}>$750</span>
                            <span className={styles.payableText}>Total Payable</span>
                        </div>
                        <div className={styles.payButton}>
                            <span className={styles.payText}>Proceed to pay</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}