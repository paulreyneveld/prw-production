import React, { useState } from 'react'
import countryInfo from '../countryInfo.json'
import testInfo from '../test.json'
import Button from 'react-bootstrap/Button'

const CapitalsQuiz = () => {
    
    const getRandomCountry = (list) => {
        let randomIndex = Math.floor(list.length * Math.random())
        let randomCountry = list[randomIndex]
        return randomCountry
    }
    
    const makeRandomList = (list) => {
        let countryList = []
        for (let i = 0; i < 4; i++) {
            countryList.push(getRandomCountry(list))
        }

        // for (let i = 0; i < countryList.length; i++) {
        //     for (let j = i + 1; j < countryList.length - 1; j++) {
        //         if (countryList[i] === countryList[j]) {
        //             makeRandomList(list)
        //         }
        //     }
        // }

        const uniqueCountryList = [...new Set(countryList)]

        // return countryList
        return uniqueCountryList
    }

    const [countryList, setCountryList] = useState(makeRandomList(countryInfo))
    const [correct, setCorrect] = useState(0)
    const [incorrect, setIncorrect] = useState(0)

    let randomIndex = Math.floor(Math.random() * 4) 
    const answer = countryList[randomIndex]

    const handleButtonClick = (guess) => {
        if (guess === answer.city) {
            setCorrect(() => correct + 1)
            setCountryList(makeRandomList(countryInfo))
        }
        else {
            setIncorrect(() => incorrect + 1)
            setCountryList(makeRandomList(countryInfo))
        }
    }

    const test1 = makeRandomList(testInfo)
    const test2 = makeRandomList(testInfo)
    const test3 = makeRandomList(testInfo)

    console.log(test1)
    console.log(test2)
    console.log(test3)

    return (
        <>
        <h6>World Capital's Quiz</h6>
        <p>What is the capital of {answer.country}?</p>
        {
            countryList.map(country => 
                <div key={country.id}>
                <Button style={{marginBottom: 10}}variant="outline-secondary" onClick={() => handleButtonClick(country.city)}>{country.city}</Button><br />
                </div>
            )
        }
        <p>Correct {correct}</p>
        <p>Incorrect {incorrect}</p>
        </>
    )
}

export default CapitalsQuiz