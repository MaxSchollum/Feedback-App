import Card from './Shared/Card.jsx'
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({item, handleDelete}) {

  return (
    <Card reverse={true}>
        <div className='num-display' >
            {item.rating}
        </div>
        <button className="close" onClick={() => handleDelete(item.id)}>
          <FaTimes color='purple'/>
        </button>
        <div className="textdisplay">
            {item.text}
        </div>
    </Card>
  )
}

export default FeedbackItem


