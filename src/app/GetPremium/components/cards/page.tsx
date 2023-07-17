'use client';
import { useRouter } from 'next/navigation';
// import styles from './styles.module.css'

export default function Cards () {

    const router = useRouter();
    const handleBuyNowClick = () => {
        router.push("/Payment")
    }

    return (
        <>
            <div className="flex flex-row justify-center mt-20">
                <div className="flex flex-row w-6/12 justify-between">
                    <div className="flex flex-col w-2/5 bg-white border-2 border-black rounded-3xl min-h-crc py-5 px-2.5">
                        <div className="text-xl font-normal text-black">Monthly Plan</div>
                        <span className="font-semibold text-3xl text-black">US $300<span className="text-xl font-normal text-black">/mo</span></span>
                        <span className="text-black">Renew every month</span>
                        <div className="flex w-full justify-center items-center mt-5 cursor-pointer bg-black text-black rounded-xl border-2 border-black" onClick={handleBuyNowClick}>
                            <span className="text-white">Buy now</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-2/5 bg-black border-2 border-black rounded-3xl min-h-crc py-5 px-2.5">
                        <div className="text-xl font-normal text-white">Quaterly Plan</div>
                        <span className="font-semibold text-3xl text-white">US $250<span className="text-xl font-normal text-white">/mo</span></span>
                        <span className="text-white">Renew quaterly for $750</span>
                        <div className="flex w-full justify-center items-center mt-5 cursor-pointer bg-white text-black rounded-xl border-2 border-black" onClick={handleBuyNowClick}>
                            <span className="text-black">Buy now</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

//className={styles.planCardContainer}
//className={styles.planCards}
//className={styles.cardOne}
//className={styles.cardHeading}
//className={styles.plan}
//className={styles.buyBtn}
//className={styles.cardTwo}
//className={styles.cardHeadingTwo}
//className={styles.planTwo}
//className={styles.planMsg}
//className={styles.buyBtn}