import Image from 'next/image';
import subs from 'public/logo.png';
import coupon from 'public/coupon.png';
import caretRight from 'public/caretRight.png';
// import styles from './styles.module.css';

export default function Payment () {

    return (
        <>
            <div className="flex w-full bg-white justify-center">
            <div className="flex flex-col w-6/12 h-screen justify-center">
                <div className="flex flex-col h-screen w-full">
                    <div className="flex flex-col w-full px-10 pt-12 pb-2.5 h-1/3 rounded-br-xl rounded-bl-xl bg-gradient-to-t from-mncone to-mnctwo">
                        <div className="flex flex-row w-full items-center">
                            <div className="h-16 w-16">
                                <Image src={subs} alt={"subs"}/>
                            </div>
                            <div className="flex w-full justify-between pl-8">
                                <span className="text-2xl font-semibold text-black">Quaterly Plan</span>
                                <span className="text-2xl font-semibold text-black">$750</span>
                            </div>
                        </div>
                        <div className="flex w-full rounded-lg mt-8 items-center cursor-pointer min-h-pph border border-black pl-2.5">
                            <div className="h-5 w-5">
                                <Image src={coupon} alt={"coupon"} />
                            </div>
                            <div className="flex w-full justify-between items-center pr-1.5 pl-5">
                                <span className="text-base font-normal text-black">Have a discount Code?</span>
                                <div className="h-5 w-5"><Image src={caretRight} alt={"arrow"}/></div>
                            </div>
                        </div>
                        <div className="flex w-full mt-8 flex-row items-center justify-between">
                            <span className="text-black">To Pay</span>
                            <span className="text-black">$750</span>
                        </div>
                        <div className="flex w-full mt-8 flex-row items-center">
                            <span className="text-xs font-normal text-ccch">*</span>
                            <span className="text-xs font-normal text-black">cancel anytime</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-full px-10 pt-10 pb-5 h-3/5">
                        <div className="flex flex-row w-full justify-between">
                            <div className="flex flex-col w-3/5">
                                <div>Enter your card Number</div>
                                <input className="flex w-full items-center px-2.5 border border-black rounded-xl bg-gradient-to-t from-mncone to-mnctwo" id="cardNo" name="card" placeholder="4242 4242 4242 4242"></input>
                            </div>
                            <div className="flex flex-col w-4/12">
                                <div>Expiry Month</div>
                                <input className="flex w-full items-center px-2.5 border border-black rounded-xl bg-gradient-to-t from-mncone to-mnctwo" id="month" name="month" placeholder="05/02/23"></input>
                            </div>
                        </div>
                        <div className="flex flex-row w-full mt-12 justify-between">
                            <div className="flex flex-col w-3/5">
                                <div>Enter your name</div>
                                <input className="flex w-full items-center px-2.5 border border-black rounded-xl bg-gradient-to-t from-mncone to-mnctwo" id="name" name="name" placeholder="Saket Vallabh"></input>
                            </div>
                            <div className="flex flex-col w-4/12">
                                <div>Cvv</div>
                                <input className="flex w-full items-center px-2.5 border border-black rounded-xl bg-gradient-to-t from-mncone to-mnctwo" id="cvv" name="cvv" placeholder="333"></input>
                            </div>
                        </div>
                        <div className="flex flex-row w-full mt-12 justify-between">
                            <div className="flex flex-col w-3/5">
                                <div>Enter your email</div>
                                <input className="flex w-full items-center px-2.5 border border-black rounded-xl bg-gradient-to-t from-mncone to-mnctwo" id="email" name="email" placeholder="Saketvallabh@gmail.com"></input>
                            </div>
                            <div className="flex flex-col w-4/12">
                                <div>Phone number</div>
                                <input className="flex w-full items-center px-2.5 border border-black rounded-xl bg-gradient-to-t from-mncone to-mnctwo" id="phone" name="phone" placeholder="3784783838"></input>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row w-full bg-black items-center justify-between py-3 px-10 rounded-tr-xl rounded-tl-xl">
                        <div className="flex flex-row w-3/12 justify-between">
                            <span className="text-2xl font-semibold text-white">$750</span>
                            <span className="flex text-sm font-normal text-white items-center">Total Payable</span>
                        </div>
                        <div className="flex bg-white h-8 items-center justify-center cursor-pointer rounded-xl w-1/3">
                            <span className="text-base font-normal text-black">Proceed to pay</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}


//className={styles.payTopCont}
//className={styles.paymentContainer}
//className={styles.payDetailContainer}
//className={styles.payDetails}
//className={styles.headerPlan}
//className={styles.subsImage}
//className={styles.planName}
//className={styles.planText}
//className={styles.couponContainer}
//className={styles.couponImage}
//className={styles.discountMsg}
//className={styles.discountText}
//className={styles.toPayContainer}
//className={styles.cancelContainer}
//className={styles.cancelStar}
//className={styles.cancelMsg}
//className={styles.userDetails}
//className={styles.cardNoContainer}
//className={styles.cardDetailContainer}
//className={styles.cardInput}
//className={styles.cvvContainer}
//className={styles.cardInput}
//className={styles.nameContainer}
//className={styles.amountContainer}