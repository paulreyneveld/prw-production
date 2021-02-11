import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WeatherAPI = () => {
    const [ weatherData, setWeatherData ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const getWeatherData = () => {
        return axios.get('http://localhost:3001/weatherapi')
            .then(response => {
                setWeatherData(response.data)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }

    useEffect(getWeatherData, [])
    
    const treatedHourlyData = weatherData.map(hour => {
        const timeStamp = hour.dt
        const date = new Date(timeStamp * 1000)
        const hours = date.getHours();
        return { time: hours, pop: hour.pop, temp: hour.temp, feels_like: hour.feels_like }
    })

    const viewWeatherInfo = () => {
        if (loading) {
            return (<p>loading. . . </p>)
        }
        if (treatedHourlyData.length > 0) {
            return (
                treatedHourlyData.slice(0,8).map((entry, i) => 
                <div key={i}>
                <h6>{entry.time}:00</h6>
                <li className="sidebar-li">Probability of Precipitation: {Math.round(entry.pop * 100)}%<br />
                Temperature: {Math.round(entry.temp)} <br />
                Feels Like: {Math.round(entry.feels_like)}</li>
                </div>
                )
            )
        }
    }

    return (
        <>
        <h6>PDX Hourly Weather</h6>
        <ul className="sidebar-ul">
        {viewWeatherInfo()}
        </ul>
        </>
    )
}

export default WeatherAPI