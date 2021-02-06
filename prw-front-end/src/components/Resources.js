import React from 'react'

const Resources = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const style = {
        color: 'blue',
        cursor: 'pointer'
    }

    return (
        <>
        <span style={style} onClick={() => openInNewTab('https://javascript.info/')}> Javascript.info </span> <br />
        <span style={style} onClick={() => openInNewTab('https://www.mooc.fi/en')}> University of Helsinki CS MOOCs </span> <br />
        <span style={style} onClick={() => openInNewTab('https://teachyourselfcs.com/')}> Teach Yourself Computer Science </span> <br />
        <span style={style} onClick={() => openInNewTab('http://www.freecodecamp.org/')}> freeCodeCamp </span> <br />
        </>
    )
}

export default Resources