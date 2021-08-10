import React, { useState } from 'react'

function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)



    return (
        <div 
        className={`card ${flip ? 'flip' : ''}`}
        onClick = {() => setFlip(!flip)}
        >
            <div className="front">
                {flashcard.question}
                <div className="flashcard-options">
                    {flashcard.option.map(option => {
                        return <div className="flashcard-option">{option}</div>
                    })}
                </div>
            </div>
            <div className="back">{flashcard.answer}</div>
        </div>
    )
}



 



export default Flashcard