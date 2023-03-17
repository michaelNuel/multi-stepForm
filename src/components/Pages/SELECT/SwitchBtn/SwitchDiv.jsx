import SwitchBtn from "./SwitchBtn"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Switchdiv.scss'


const SwitchDiv = ({to}) => {

  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
  
  return (
    <div className="Switch__container">
      <Link to={"selectPlan"} className="Switch__links">Monthly</Link>
       <SwitchBtn className={ isActive ? 'Switch__links_active': 'Switch__links' } />
      <Link to={"/selectPlan "} className="Switch__links">Yearly</Link>
    </div>
  )
}

export default SwitchDiv

