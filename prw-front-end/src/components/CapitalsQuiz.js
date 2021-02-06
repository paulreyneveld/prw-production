import React, { useState } from 'react'
import countryInfo from '../countryInfo.json'
import Button from 'react-bootstrap/Button'

const CapitalsQuiz = () => {
    
    const getRandomCountry = () => {
        let randomIndex = Math.floor(countryInfo.length * Math.random())
        let randomCountry = countryInfo[randomIndex]
        return randomCountry
    }
    
    const makeRandomList = () => {
        let countryList = []
        for (let i = 0; i < 4; i++) {
            countryList.push(getRandomCountry())
        }

        for (let i = 0; i < countryList.length; i++) {
            for (let j = i + 1; j < countryList.length - 1; j++) {
                if (countryList[i] === countryList[j]) {
                    makeRandomList()
                }
            }
        }
        return countryList
    }

    const [countryList, setCountryList] = useState(makeRandomList())
    const [correct, setCorrect] = useState(0)
    const [incorrect, setIncorrect] = useState(0)

    let randomIndex = Math.floor(Math.random() * 4) 
    const answer = countryList[randomIndex]

    const handleButtonClick = (guess) => {
        if (guess === answer.city) {
            setCorrect(() => correct + 1)
            setCountryList(makeRandomList())
        }
        else {
            setIncorrect(() => incorrect + 1)
            setCountryList(makeRandomList())
        }
    }

    return (
        <>
        <h5>Capital Quiz</h5>
        <p>What is the capital of {answer.country}?</p>
        {
            countryList.map((country, index) => 
                <>
                <Button variant="outline-secondary" key={index} onClick={() => handleButtonClick(country.city)}>{country.city}</Button><br />
                </>
            )
        }
        <p>Correct {correct}</p>
        <p>Incorrect {incorrect}</p>
        </>
    )
}

export default CapitalsQuiz