import { Link } from "react-router-dom"
import './BtnNext.scss'

const NextButton = ({to, text}) => {
  return (
    <Link to={to} className='btn__next'>
      {text}
    </Link>
  )
}

export default NextButton
