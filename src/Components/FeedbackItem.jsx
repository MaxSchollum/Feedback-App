import { useContext } from 'react'
import FeedbackContext from "../Context/FeedbackContext"
import Card from './Shared/Card.jsx'
import { FaTimes, FaEdit } from 'react-icons/fa'


function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card reverse={true}>
        <div className='num-display' >
            {item.rating}
        </div>
        <button className="close" onClick={() => deleteFeedback(item.id)}>
          <FaTimes color='purple'/>
        </button>
        <button className='edit'>
          <FaEdit color="purple" onClick={() => editFeedback(item)}/>
        </button>
        <div className="textdisplay">
            {item.text}
        </div>
    </Card>
  )
}

export default FeedbackItem


