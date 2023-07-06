import styles from './styles.module.css'

export default function Jobs () {
    return (
        <>
            <div className={styles.jobsContainer}>
                <div className={styles.heading}>
                    <span className={styles.headingText}>Recommended jobs</span>
                    <div className={styles.headingRight}>
                        <div className={styles.recomNumber}><span className={styles.number}>386</span></div>
                        <div className={styles.sortContainer}><span>Sort by:</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}