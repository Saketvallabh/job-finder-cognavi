'use client';

import Image from 'next/image';
import search from 'public/search.png';
import location from 'public/location.png';
import experience from 'public/experience.png';
import clock from 'public/clock.png';
import caret_down from 'public/caret_downn.png';
// import styles from './styles.module.css'
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

    //className={styles.filterContainer}
    //className={styles.filterListContainer}
    //className={styles.filterListContent}
    //className={styles.filterImage}
    //className={styles.optionContainer}
    //className={styles.contentText}
    //className={styles.dropDown}
    //className={styles.horizontalLine}
    //className={styles.caretDown}
    //className={styles.verticalLine}

    return (
        <>
            <div className="flex w-full h-24 bg-black">
                <div className="flex flex-row w-full items-center py-2.5 px-20">
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
                    <div className="flex flex-row justify-start items-center mr-8 w-2/12 gap-2.5">
                        <div className="h-5 w-5"><Image src={search} alt={"search"}/></div>
                        <div className="flex flex-row justify-between items-center w-4/5 cursor-pointer" onClick={handleRoleDropClick}>
                            <div className="font-normal text-white">
                                <p>{role}</p>
                                {showRole && 
                                    <div className="absolute flex flex-col bg-gray text-black px-3 py-3 top-32 rounded-md z-10 min-w-ddc shadow-2xl">
                                        {Role.map((Item) => 
                                            <>
                                            <span onClick={() => Item.roleName === "Reset" ? setRole("Role") : setRole(Item.roleName)}>{Item.roleName}</span>
                                            <hr className="w-full justify-center h-0"/>
                                            </>
                                        )}
                                    </div>
                                }
                            </div>
                            <div className="h-3 w-3 flex">
                                <Image src={caret_down} alt={"caret"}/>
                            </div>
                        </div>
                        <div className="h-16 border-x border-vfl"></div>
                    </div>
                    <div className="flex flex-row justify-start items-center mr-8 w-2/12 gap-2.5">
                        <div className="h-5 w-5"><Image src={location} alt={"search"}/></div>
                        <div className="flex flex-row justify-between items-center w-4/5 cursor-pointer" onClick={handleLocationDropClick}>
                            <div className="font-normal text-white">
                                <p>{jobCity}</p>
                                {showLocation &&
                                    <div className="absolute flex flex-col bg-gray text-black px-3 py-3 top-32 rounded-md z-10 min-w-ddc shadow-2xl">
                                        {Place.map((Item) => 
                                            <>
                                            <span onClick={() => setJobCity(Item.P)}>{Item.P}</span>
                                            <hr className="w-full justify-center h-0"/>
                                            </>
                                        )}
                                    </div>
                                }
                            </div>
                            <div className="h-3 w-3 flex">
                                <Image src={caret_down} alt={"caret"}/>
                            </div>
                        </div>
                        <div className="h-16 border-x border-vfl"></div>
                    </div>
                    <div className="flex flex-row justify-start items-center mr-8 w-2/12 gap-2.5">
                        <div className="h-5 w-5"><Image src={experience} alt={"search"}/></div>
                        <div className="flex flex-row justify-between items-center w-4/5 cursor-pointer" onClick={handleExpDropClick}>
                            <div className="font-normal text-white">
                                <p>{exp}</p>
                                {showExp && 
                                    <div className="absolute flex flex-col bg-gray text-black px-3 py-3 top-32 rounded-md z-10 min-w-ddc shadow-2xl">
                                        {workExp.map((Item) => 
                                            <>
                                            <span onClick={() => Item.year === "Reset" ? setExp("Experience") : setExp(Item.year)}>{Item.year}</span>
                                            <hr className="w-full justify-center h-0"/>
                                            </>
                                        )}
                                    </div>
                                }
                            </div>
                            <div className="h-3 w-3 flex">
                                <Image src={caret_down} alt={"caret"}/>
                            </div>
                        </div>
                        <div className="h-16 border-x border-vfl"></div>
                    </div>
                    <div className="flex flex-row justify-start items-center mr-8 w-2/12 gap-2.5">
                        <div className="h-5 w-5"><Image src={clock} alt={"search"}/></div>
                        <div className="flex flex-row justify-between items-center w-4/5 cursor-pointer" onClick={handleTypeDropClick}>
                            <div className="font-normal text-white">
                                <p>{type}</p>
                                {showType && 
                                    <div className="absolute flex flex-col bg-gray text-black px-3 py-3 top-32 rounded-md z-10 min-w-ddc shadow-2xl">
                                        {Type.map((Item) => 
                                           <>
                                            <span onClick={() => Item.T === "Reset" ? setType("Type") : setType(Item.T)}>{Item.T}</span>
                                            <hr className="w-full justify-center h-0"/>
                                           </>
                                        )}
                                    </div>
                                }
                            </div>
                            <div className="h-3 w-3 flex">
                                <Image src={caret_down} alt={"caret"}/>
                            </div>
                        </div>
                        <div className="h-16 border-x border-vfl"></div>
                    </div>
                </div>
            </div>
        </>
    )
}