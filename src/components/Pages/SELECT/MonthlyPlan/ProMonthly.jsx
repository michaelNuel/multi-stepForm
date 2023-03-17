import { GiGamepad } from 'react-icons/gi'

const ProMonthly = () => {
  return (
    <>
    <button className="btn__monthly__opt">
       <div className="icon__opt">
           <GiGamepad className='icons' style={{
            backgroundColor:'blue'
            }} />
           <div className='plan__details'>
              <h2 className='plan__mainText'>pro</h2>
           </div>
           <p className="plan_amount">$15/mo</p>
       </div>
    </button>
 </>
  )
}

export default ProMonthly
