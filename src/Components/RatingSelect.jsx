import React from 'react'
import { useState, useContext, useEffect } from 'react' 
import FeedbackContext from '../Context/FeedbackContext'

const RatingSelect = ({select}) => {
    const [selected, setSelected] = useState(10)

    const {feedbackEdit} = useContext(FeedbackContext) 

    useEffect(() => {
        setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])
    
    const handleChange = (e) => {
        setSelected(+e.target.value)
        select(+e.target.value)
    }

    return (
        <ul className='rating'>
            {[...Array(10).keys()].map((num) => (
                <li key={num + 1}>
                <input
                    type="radio"
                    id={`num${num + 1}`}
                    name="rating"
                    value={num + 1}
                    onChange={handleChange}
                    checked={selected === num + 1}
                />
                <label htmlFor={`num${num + 1}`}>{num + 1}</label>
                </li>
            ))}
        </ul>
      );
}

export default RatingSelect