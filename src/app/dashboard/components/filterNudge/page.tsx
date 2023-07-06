'use client';

import Image from 'next/image';
import search from 'public/search.png';
import location from 'public/location.png';
import experience from 'public/experience.png';
import clock from 'public/clock.png';
import caret_down from 'public/caret_downn.png';
import styles from './styles.module.css'
import { useState } from 'react';

export default function Filters () {

    const [showExp, setExpDrop] = useState(false) 
    const [showRole, setRoleDrop] = useState(false)
    const [showType, setTypeDrop] = useState(false)
    const [showLocation, setLocationDrop] = useState(false)
    const [jobCity, setJobCity] = useState("Work Location")
    const [exp, setExp] = useState("Experience")
    const [role, setRole] = useState("Role")
    const [type, setType] = useState("Type")

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

    const workExp = [
        {
            year: "0-1 years"
        },
        {
            year: "1-3 years"
        },
        {
            year: "3-5 years"
        },
        {
            year: "5-10 years"
        },
        {
            year: "Reset"
        }
    ]

    const Role = [
        {
            roleName: "Software Developer"
        },
        {
            roleName: "Analyst"
        },
        {
            roleName: "principal Engineer"
        },
        {
            roleName: "Product Manager"
        },
        {
            roleName: "Data Scientist"
        },
        {
            roleName: "Reset"
        }
    ]

    const Type = [
        {
            T: "Full Time"
        },
        {
            T: "Part Time"
        },
        {
            T: "Intern"
        },
        {
            T: "Contract"
        },
        {
            T: "Reset"
        }
    ]

    const Place = [{P: "Amanave"},{P: "Aoa"},{P: "Au'asi"},{P: "A and F Trailer Park"},{P: "A'oloau"}]

    const handleExpDropClick = () => {
        setExpDrop(!showExp)
    }
    const handleRoleDropClick = () => {
        setRoleDrop(!showRole)
    }
    const handleTypeDropClick = () => {
        setTypeDrop(!showType)
    }
    const handleLocationDropClick = () => {
        setLocationDrop(!showLocation)
    }

    return (
        <>
            <div className={styles.filterContainer}>
                <div className={styles.filterListContainer}>
                    {/* {
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
                    } */}
                    <div className={styles.filterListContent}>
                        <div className={styles.filterImage}><Image src={search} alt={"search"}/></div>
                        <div className={styles.optionContainer} onClick={handleRoleDropClick}>
                            <div className={styles.contentText}>
                                <p>{role}</p>
                                {showRole && 
                                    <div className={styles.dropDown}>
                                        {Role.map((Item) => 
                                            <>
                                            <span onClick={() => Item.roleName === "Reset" ? setRole("Role") : setRole(Item.roleName)}>{Item.roleName}</span>
                                            <hr className={styles.horizontalLine}/>
                                            </>
                                        )}
                                    </div>
                                }
                            </div>
                            <div className={styles.caretDown}>
                                <Image src={caret_down} alt={"caret"}/>
                            </div>
                        </div>
                        <div className={styles.verticalLine}></div>
                    </div>
                    <div className={styles.filterListContent}>
                        <div className={styles.filterImage}><Image src={location} alt={"search"}/></div>
                        <div className={styles.optionContainer} onClick={handleLocationDropClick}>
                            <div className={styles.contentText}>
                                <p>{jobCity}</p>
                                {showLocation &&
                                    <div className={styles.dropDown}>
                                        {Place.map((Item) => 
                                            <>
                                            <span onClick={() => setJobCity(Item.P)}>{Item.P}</span>
                                            <hr className={styles.horizontalLine}/>
                                            </>
                                        )}
                                    </div>
                                }
                            </div>
                            <div className={styles.caretDown}>
                                <Image src={caret_down} alt={"caret"}/>
                            </div>
                        </div>
                        <div className={styles.verticalLine}></div>
                    </div>
                    <div className={styles.filterListContent}>
                        <div className={styles.filterImage}><Image src={experience} alt={"search"}/></div>
                        <div className={styles.optionContainer} onClick={handleExpDropClick}>
                            <div className={styles.contentText}>
                                <p>{exp}</p>
                                {showExp && 
                                    <div className={styles.dropDown}>
                                        {workExp.map((Item) => 
                                            <>
                                            <span onClick={() => Item.year === "Reset" ? setExp("Experience") : setExp(Item.year)}>{Item.year}</span>
                                            <hr className={styles.horizontalLine}/>
                                            </>
                                        )}
                                    </div>
                                }
                            </div>
                            <div className={styles.caretDown}>
                                <Image src={caret_down} alt={"caret"}/>
                            </div>
                        </div>
                        <div className={styles.verticalLine}></div>
                    </div>
                    <div className={styles.filterListContent}>
                        <div className={styles.filterImage}><Image src={clock} alt={"search"}/></div>
                        <div className={styles.optionContainer} onClick={handleTypeDropClick}>
                            <div className={styles.contentText}>
                                <p>{type}</p>
                                {showType && 
                                    <div className={styles.dropDown}>
                                        {Type.map((Item) => 
                                           <>
                                            <span onClick={() => Item.T === "Reset" ? setType("Type") : setType(Item.T)}>{Item.T}</span>
                                            <hr className={styles.horizontalLine}/>
                                           </>
                                        )}
                                    </div>
                                }
                            </div>
                            <div className={styles.caretDown}>
                                <Image src={caret_down} alt={"caret"}/>
                            </div>
                        </div>
                        <div className={styles.verticalLine}></div>
                    </div>
                </div>
            </div>
        </>
    )
}