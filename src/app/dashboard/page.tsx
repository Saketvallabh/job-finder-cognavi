'use client';
import $ from "jquery";
import Navbar from './components/navbar/page';
import Filters from './components/filterNudge/page';
import SideBar from './components/sidebar/page';
import Jobs from './components/body/page';
import styles from './styles.module.css'
import { useEffect, useState } from "react";

export default function Dashboard () {
    const [jobCities, setCities] = useState()
    // const cities = {
    //     async: true,
    //     crossDomain: true,
    //     url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'baac45ea12mshd1afe6f34339e0dp155ccejsn73e30e3f3207',
    //         'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    //     }
    // };
    
    // $.ajax(cities).done(function (response) {
    //     setCities(response?.data)
    //     console.log(response, "city api");
    // });
    const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'baac45ea12mshd1afe6f34339e0dp155ccejsn73e30e3f3207',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };

    const apiResponseCountry = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    const url1 = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
    const options1 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'baac45ea12mshd1afe6f34339e0dp155ccejsn73e30e3f3207',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };

    const apiResponseCity = async () => {
        try {
            const response = await fetch(url1, options1);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        apiResponseCountry()
        apiResponseCity()
    }, [])

    return (
        <>
            <Navbar/>
            <Filters />
            <div className={styles.mainContainer}>
                <div className={styles.sidebar}>
                    <SideBar />
                </div>
                <div className={styles.body}>
                    <Jobs />
                </div>
            </div>
        </>
    )
}