import { GiGamepad } from 'react-icons/gi'

const ProYearly = () => {
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
           <p className="plan_amount">$150/mo</p>
           <p className='bonous'>2 months free</p>
       </div>
    </button>
 </>
  )
}

export default ProYearly
