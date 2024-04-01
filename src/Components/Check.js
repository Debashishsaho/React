import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Check() {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://open-weather13.p.rapidapi.com/city/london',
                headers: {
                    'X-RapidAPI-Key': 'cc938bffecmsh16d63c90e122cf4p1c2329jsnc202c7823f1a',
                    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data)
                setWeatherData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {weatherData.map((location, index) => (
                <div key={index}>

                    <h3>{location.name}</h3>
                    <p>Country: {location.sys.country}</p>
                    <p>Latitude: {location.coord.lat}</p>
                    <p>Longitude: {location.coord.lon}</p>
                    <p>State: {location.state}</p>
                </div>
            ))}
        </div>
    );
}

export default Check;