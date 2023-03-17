import { FaGamepad } from 'react-icons/fa'

const AdvancedMonthly = () => {
  return (
    <>
    <button className="btn__monthly__opt">
       <div className="icon__opt">
           <FaGamepad className='icons' style={{
            backgroundColor: 'pink'
           }} />
           <div className='plan__details'>
              <h2 className='plan__mainText'>Advanced </h2>
           </div>
           <p className="plan_amount">$12/mo</p>
       </div>
    </button>
 </>
  )
}

export default AdvancedMonthly
