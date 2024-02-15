import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import { PropTypes } from "prop-types"
import Card from "./shared/Card"
import FeedbackContext from '../context/FeedbackContext'

export default function FeedbackItem({ item }) {

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (    
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
          <FaTimes colo='purple'/>
        </button>
        <button onClick={() => editFeedback(item)} className='edit'>
          <FaEdit colo='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}