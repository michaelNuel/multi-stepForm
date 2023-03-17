import { Link } from 'react-router-dom'
import './BackButton.scss'

 
const BackButton = ({to}) => {
  return (
    <>
     <Link to={to} className='btn__back'>
        Go back
     </Link>
      
    </>
  )
}

export default BackButton
