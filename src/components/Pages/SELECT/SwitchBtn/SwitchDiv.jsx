import SwitchBtn from "./SwitchBtn"
import { Link } from "react-router-dom"
import './Switchdiv.scss'
import { useState } from "react"


const SwitchDiv = () => {
  
    const [ isToggled, setisToggled] = useState(false)

  
  return (
    <div className="Switch__container">
      <Link to={"selectPlan"} className="Switch__links">Monthly</Link>
       <SwitchBtn className='Switch__links_active'
       isToggle={isToggled}
       onToggle ={() => setisToggled(!isToggled)}
       />
      <Link to={"/selectPlan "} className="Switch__links">Yearly</Link>
    </div>
  )
}

export default SwitchDiv

