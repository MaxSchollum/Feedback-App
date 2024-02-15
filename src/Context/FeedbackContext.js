import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "comes from context",
            rating: 10
        },
        {
            id: 2,
            text: "eat a dick",
            rating: 7
        },
        {
            id: 3,
            text: "you dumb cunt",
            rating: 3
        }
    ])

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    
    return(
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback,

        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext