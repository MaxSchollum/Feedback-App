import React from 'react'
import { useState } from 'react' 
import Card from './Shared/Card.jsx'
import Button from './Shared/Button.jsx'
import RatingSelect from './RatingSelect.jsx'

function FeedbackForm({handleAdd}) {
  const [text, setText] = useState("")
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")
  
  const handleTextChange = (e) => {
    if(text === "") {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text.length <= 10) {
      setBtnDisabled(true)
      setMessage("Please enter more than ten chars")
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }

  setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.length > 10) {
      const newFeedback = {
        text: text,
        rating: rating
      }
      handleAdd(newFeedback)
      setText("")
    }

  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Whats your feedback?</h2>
          <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder='write a review' value={text} />
          <Button type="submit" version="primary" isDisabled={btnDisabled}> submit </Button>
        </div>
          {message && <div className='message' >{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm