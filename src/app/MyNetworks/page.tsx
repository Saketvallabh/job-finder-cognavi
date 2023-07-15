import Image from 'next/image';
import Navbar from '../dashboard/components/navbar/page';
import avatar from 'public/avatar_one.png'
import avatar_w from 'public/avatarr.png'
// import styles from './styles.module.css';

export default function MyNetworks () {

    return (
        <>
            <Navbar />
            <div className="flex w-full bg-white justify-center">
            <div className="flex flex-col w-6/12 justify-center bg-white ml-1/4 mr-1/4">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col w-full pt-10 px-10 pb-2.5 h-2/5 gap-2.5 bg-gradient-to-t from-mncone to-mnctwo rounded-b-xl">
                        <div className="flex flex-row w-full items-center border border-black rounded-xl py-2.5 px-2 bg-mncb">
                            <div className="flex w-full justify-between items-center">
                                <div className="flex flex-row items-center gap-2.5">
                                    <div className="w-10 h-10"><Image src={avatar} alt={"avatar"}/></div>
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-semibold h-8 text-black">saket vallabh</span>
                                        <span className="text-sm text-black">SDE at @JobFinder</span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between w-1/3">
                                    <div className="flex rounded-lg justify-center items-center cursor-pointer bg-resb min-w-dcw border border-black">
                                        <span className="text-black">Accept</span>
                                    </div>
                                    <div className="flex rounded-lg justify-center items-center cursor-pointer bg-resbtwo min-w-dcw border border-black">
                                        <span className="text-white">Reject</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row w-full items-center border border-black rounded-xl py-2.5 px-2 bg-mncb">
                            <div className="flex w-full justify-between items-center">
                                <div className="flex flex-row items-center gap-2.5">
                                    <div className="w-10 h-10"><Image src={avatar} alt={"avatar"}/></div>
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-semibold h-8 text-black">Allen Johns</span>
                                        <span className="text-sm text-black">SDE at @JobFinder</span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between w-1/3">
                                    <div className="flex rounded-lg justify-center items-center cursor-pointer bg-resb min-w-dcw border border-black">
                                        <span className="text-black">Accept</span>
                                    </div>
                                    <div className="flex rounded-lg justify-center items-center cursor-pointer bg-resbtwo min-w-dcw border border-black">
                                        <span className="text-white">Reject</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row w-full items-center border border-black rounded-xl py-2.5 px-2 bg-mncb">
                            <div className="flex w-full justify-between items-center">
                                <div className="flex flex-row items-center gap-2.5">
                                    <div className="w-10 h-10"><Image src={avatar} alt={"avatar"}/></div>
                                    <div className="flex flex-col">
                                        <span className="text-2xl font-semibold h-8 text-black">Hellen</span>
                                        <span className="text-sm text-black">SDE at @JobFinder</span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between w-1/3">
                                    <div className="flex rounded-lg justify-center items-center cursor-pointer bg-resb min-w-dcw border border-black">
                                        <span className="text-black">Accept</span>
                                    </div>
                                    <div className="flex rounded-lg justify-center items-center cursor-pointer bg-resbtwo min-w-dcw border border-black">
                                        <span className="text-white">Reject</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center cursor-pointer text-black">Show More</div>
                    </div>
                    <div className="flex flex-col w-full h-3/5 gap-5 pt-10 px-10 pb-5">
                        <div className="flex flex-row justify-between w-full">
                            <div className="flex flex-col bg-mncrc items-center border border-black gap-2.5 rounded-xl py-5 px-8 min-h-crc min-w-dcw">
                                <div className="h-10 w-10"><Image src={avatar_w} alt={"avatar"}/></div>
                                <span className="text-2xl font-semibold text-white">Saket Vallabh</span>
                                <span className="text-base font-normal text-white">SDE at @myntra</span>
                                <span className="text-base font-normal text-white">231 mutual connection</span>
                                <div className="flex w-full bg-white justify-center items-center cursor-pointer text-black rounded-xl">
                                    <span>+ connect</span>
                                </div>
                            </div>
                            <div className="flex flex-col bg-mncrc items-center border border-black gap-2.5 rounded-xl py-5 px-8 min-h-crc min-w-dcw">
                                <div className="h-10 w-10"><Image src={avatar_w} alt={"avatar"}/></div>
                                <span className="text-2xl font-semibold text-white">Anushka sharma</span>
                                <span className="text-base font-normal text-white">SDE at @amazon</span>
                                <span className="text-base font-normal text-white">121 mutual connection</span>
                                <div className="flex w-full bg-white justify-center items-center cursor-pointer text-black rounded-xl">
                                    <span>+ connect</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <div className="flex flex-col bg-mncrc items-center border border-black gap-2.5 rounded-xl py-5 px-8 min-h-crc min-w-dcw">
                                <div className="h-10 w-10"><Image src={avatar_w} alt={"avatar"}/></div>
                                <span className="text-2xl font-semibold text-white">Jeffin james</span>
                                <span className="text-base font-normal text-white">SDE at @cognavi</span>
                                <span className="text-base font-normal text-white">276 mutual connection</span>
                                <div className="flex w-full bg-white justify-center items-center cursor-pointer text-black rounded-xl">
                                    <span>+ connect</span>
                                </div>
                            </div>
                            <div className="flex flex-col bg-mncrc items-center border border-black gap-2.5 rounded-xl py-5 px-8 min-h-crc min-w-dcw">
                                <div className="h-10 w-10"><Image src={avatar_w} alt={"avatar"}/></div>
                                <span className="text-2xl font-semibold text-white">Swder karen</span>
                                <span className="text-base font-normal text-white">SDE at @tesla</span>
                                <span className="text-base font-normal text-white">76 mutual connection</span>
                                <div className="flex w-full bg-white justify-center items-center cursor-pointer text-black rounded-xl">
                                    <span>+ connect</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}


//className={styles.netCont}
//className={styles.networkContainer}
//className={styles.myNetworkContainer}
//className={styles.requestContainer}
//className={styles.headerPlan}
//className={styles.planName}
//className={styles.cardContainer}
//className={styles.avatarImage}
//className={styles.personDetail}
//className={styles.planText}
//className={styles.personWork}
//className={styles.buttonContainer}
//className={styles.responseButton}
//className={styles.responseButton}
//className={styles.showMore}
//className={styles.connectContainer}
//className={styles.connectionContainer}
//className={styles.connectRequest}
//className={styles.avImage}
//className={styles.nameOfothers}
//className={styles.personJobDetails}
//className={styles.connectButton}