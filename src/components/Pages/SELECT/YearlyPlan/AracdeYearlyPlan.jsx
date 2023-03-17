import { BsDpadFill } from 'react-icons/bs'

const AracdeYearlyPlan = () => {
  return (
    <>
    <button className="btn__monthly__opt">
       <div className="icon__opt">
           <BsDpadFill className='icons' style={{
            backgroundColor: 'orange'
           }} />
           <div className='plan__details'>
              <h2 className='plan__mainText'>Aracde</h2>
           </div>
           <p className="plan_amount">$90/yr</p>
           <p className='bonous'>2 months free</p>
       </div>
    </button>
 </>
  )
}

export default AracdeYearlyPlan
