import { useState } from 'react'
import React from 'react'
import Header from "./Components/Header.jsx"
import FeedbackItem from "./Components/FeedbackItem.jsx"
import FeedbackList from "./Components/FeedbackList.jsx"
import FeedbackData from './Data/FeedbackData.js'
console.log(FeedbackData)

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure?")){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <>
            <Header />
            <div className="Container">
                <FeedbackList 
                feedback={feedback}
                handleDelete={deleteFeedback} />
            </div>
        </>
    )
};

export default App
