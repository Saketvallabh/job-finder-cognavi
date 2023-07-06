'use client';
import $ from "jquery";
import Image from 'next/image';
import search from 'public/search.png';
import location from 'public/location.png';
import experience from 'public/experience.png';
import clock from 'public/clock.png';
import caret_down from 'public/caret_downn.png';
import styles from './styles.module.css'
import { useState } from 'react';

type job_CityProps = {
    job_City : {
        city: string
    }[]
}

export default function Filters (props: job_CityProps) {
    const [showExp, setExpDrop] = useState(false) 
    const [showRole, setRoleDrop] = useState(false)
    const [showType, setTypeDrop] = useState(false)
    const [showLocation, setLocationDrop] = useState(false)
    const [jobCity, setJobCity] = useState("Work Location")
    const [exp, setExp] = useState("Experience")
    const [role, setRole] = useState("Role")
    const [type, setType] = useState("Type")

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
                    <div className={styles.filterListContent}>
                        <div className={styles.filterImage}><Image src={search} alt={"search"}/></div>
                        <div className={styles.optionContainer} onClick={handleRoleDropClick}>
                            <div className={styles.contentText}>
                                <p>{role}</p>
                                {showRole && 
                                    <div className={styles.dropDown}>
                                        {Role.map((Item) => 
                                            <>
                                            <span onClick={() => Item.roleName === "reset" ? setRole("Role") : setRole(Item.roleName)}>{Item.roleName}</span>
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
                                        {props?.job_City?.map((Item) => 
                                            <>
                                            <span onClick={() => setJobCity(Item.city)}>{Item.city}</span>
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
                                            <span onClick={() => Item.year === "reset" ? setExp("Experience") : setExp(Item.year)}>{Item.year}</span>
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
                                            <span onClick={() => Item.T === "reset" ? setType("Type") : setType(Item.T)}>{Item.T}</span>
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