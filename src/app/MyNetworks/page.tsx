import Image from 'next/image';
import Navbar from '../dashboard/components/navbar/page';
import avatar from 'public/avatar_one.png'
import avatar_w from 'public/avatarr.png'
import styles from './styles.module.css';

export default function MyNetworks () {
    return (
        <>
            <Navbar />
            <div className={styles.networkContainer}>
                <div className={styles.myNetworkContainer}>
                    <div className={styles.requestContainer}>
                        <div className={styles.headerPlan}>
                            <div className={styles.planName}>
                                <div className={styles.cardContainer}>
                                    <div className={styles.avatarImage}><Image src={avatar} alt={"avatar"}/></div>
                                    <div className={styles.personDetail}>
                                        <span className={styles.planText}>saket vallabh</span>
                                        <span className={styles.personWork}>SDE at @JobFinder</span>
                                    </div>
                                </div>
                                <div className={styles.buttonContainer}>
                                    <div className={styles.responseButton}>
                                        <span>Accept</span>
                                    </div>
                                    <div className={styles.responseButton} style={{background: "#000000"}}>
                                        <span style={{color: "#ffffff"}}>Reject</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.headerPlan}>
                            <div className={styles.planName}>
                                <div className={styles.cardContainer}>
                                    <div className={styles.avatarImage}><Image src={avatar} alt={"avatar"}/></div>
                                    <div className={styles.personDetail}>
                                        <span className={styles.planText}>Allen Johns</span>
                                        <span className={styles.personWork}>SDE at @JobFinder</span>
                                    </div>
                                </div>
                                <div className={styles.buttonContainer}>
                                    <div className={styles.responseButton}>
                                        <span>Accept</span>
                                    </div>
                                    <div className={styles.responseButton} style={{background: "#000000"}}>
                                        <span style={{color: "#ffffff"}}>Reject</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.headerPlan}>
                            <div className={styles.planName}>
                                <div className={styles.cardContainer}>
                                    <div className={styles.avatarImage}><Image src={avatar} alt={"avatar"}/></div>
                                    <div className={styles.personDetail}>
                                        <span className={styles.planText}>Hellen</span>
                                        <span className={styles.personWork}>SDE at @JobFinder</span>
                                    </div>
                                </div>
                                <div className={styles.buttonContainer}>
                                    <div className={styles.responseButton}>
                                        <span>Accept</span>
                                    </div>
                                    <div className={styles.responseButton} style={{background: "#000000"}}>
                                        <span style={{color: "#ffffff"}}>Reject</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.showMore}>Show More</div>
                    </div>
                    <div className={styles.connectContainer}>
                        <div className={styles.connectionContainer}>
                            <div className={styles.connectRequest}>
                                <div className={styles.avImage}><Image src={avatar_w} alt={"avatar"}/></div>
                                <span className={styles.nameOfothers}>Saket Vallabh</span>
                                <span className={styles.personJobDetails}>SDE at @myntra</span>
                                <span className={styles.personJobDetails}>231 mutual connection</span>
                                <div className={styles.connectButton}>
                                    <span>+ connect</span>
                                </div>
                            </div>
                            <div className={styles.connectRequest}>
                                <div className={styles.avImage}><Image src={avatar_w} alt={"avatar"}/></div>
                                <span className={styles.nameOfothers}>Anushka sharma</span>
                                <span className={styles.personJobDetails}>SDE at @amazon</span>
                                <span className={styles.personJobDetails}>121 mutual connection</span>
                                <div className={styles.connectButton}>
                                    <span>+ connect</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.connectionContainer}>
                            <div className={styles.connectRequest}>
                                <div className={styles.avImage}><Image src={avatar_w} alt={"avatar"}/></div>
                                <span className={styles.nameOfothers}>Jeffin james</span>
                                <span className={styles.personJobDetails}>SDE at @cognavi</span>
                                <span className={styles.personJobDetails}>276 mutual connection</span>
                                <div className={styles.connectButton}>
                                    <span>+ connect</span>
                                </div>
                            </div>
                            <div className={styles.connectRequest}>
                                <div className={styles.avImage}><Image src={avatar_w} alt={"avatar"}/></div>
                                <span className={styles.nameOfothers}>Swder karen</span>
                                <span className={styles.personJobDetails}>SDE at @tesla</span>
                                <span className={styles.personJobDetails}>76 mutual connection</span>
                                <div className={styles.connectButton}>
                                    <span>+ connect</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.connectContainer}>
                        
                    </div> */}
                </div>
            </div>
        </>
    )
}