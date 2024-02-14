import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import React from 'react'
import Header from "./Components/Header.jsx"
import FeedbackList from "./Components/FeedbackList.jsx"
import FeedbackStats from "./Components/FeedbackStats.jsx"
import FeedbackData from './Data/FeedbackData.js'
import FeedbackForm from './Components/FeedbackForm.jsx'


function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure?")){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <>
            <Header />
            <div className="Container">
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList 
                feedback={feedback}
                handleDelete={deleteFeedback} />
            </div> 
        </>
    )
};

export default App
