import { useContext } from 'react'
import FeedbackContext from "../Context/FeedbackContext"
import Card from './Shared/Card.jsx'
import { FaTimes } from 'react-icons/fa'


function FeedbackItem({item}) {
  const {deleteFeedback} = useContext(FeedbackContext)

  return (
    <Card reverse={true}>
        <div className='num-display' >
            {item.rating}
        </div>
        <button className="close" onClick={() => deleteFeedback(item.id)}>
          <FaTimes color='purple'/>
        </button>
        <div className="textdisplay">
            {item.text}
        </div>
    </Card>
  )
}

export default FeedbackItem


