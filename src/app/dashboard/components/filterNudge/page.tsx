import Image from 'next/image'
import search from 'public/search.png';
import location from 'public/location.png';
import experience from 'public/experience.png';
import clock from 'public/clock.png';
import caret_down from 'public/caret_downn.png';
import styles from './styles.module.css'

export default function Filters () {
    const FilterList = [
        {
            description: "Role",
            Image: search,
            alt: "search"
        },
        {
            description: "Work Location",
            Image: location,
            alt: "location"
        }, 
        {
            description: "Experience",
            Image: experience,
            alt: "exp"
        },
        {
            description: "Type",
            Image: clock,
            alt: "clock"
        }
    ]
    return (
        <>
            <div className={styles.filterContainer}>
                <div className={styles.filterListContainer}>
                    {
                        FilterList.map((planItem) => {
                            return (
                                <>
                                    <div className={styles.filterListContent}>
                                        <div className={styles.filterImage}><Image src={planItem.Image} alt={planItem.alt}/></div>
                                        <div className={styles.optionContainer}>
                                            <div className={styles.contentText}>
                                                <p dangerouslySetInnerHTML={{ __html: planItem.description }} ></p>
                                            </div>
                                            <div className={styles.caretDown}>
                                                <Image src={caret_down} alt={"caret"}/>
                                            </div>
                                        </div>
                                        <div className={styles.verticalLine}></div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}