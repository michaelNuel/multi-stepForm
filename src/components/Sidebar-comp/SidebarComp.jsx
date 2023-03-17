import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './SidebarComp.scss'


const SidebarComp = ({numbering, topInfo, bottomInfo, to}) => {

  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return (
    <Link to={to} className='comp__details'>
       <ul className="number__wrapper">
        <li className={ isActive ? 'details_numb_active': 'details_numb' }>{numbering}</li>
       </ul>
       <div className="details_info">
            <h3 className='details_info_top'>{topInfo}</h3>
            <h2 className='details_info_bottom'>{bottomInfo}</h2>
       </div>
    </Link>
  )
}

export default SidebarComp

