import SidebarComp from "./SidebarComp"
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar_parent'>
        <SidebarComp to='/' numbering='1' topInfo='Step 1' bottomInfo='Your info' />
        <SidebarComp to='/selectPlan'numbering='2' topInfo='Step 2' bottomInfo='Select plan' />
        <SidebarComp to='/addOns'numbering='3' topInfo='Step 3' bottomInfo='Add-ons' />
        <SidebarComp to='/summary'numbering='4' topInfo='Step 4' bottomInfo='Summary' />
    </div>
  )
}

export default Sidebar
