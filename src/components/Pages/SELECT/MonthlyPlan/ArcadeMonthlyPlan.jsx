import { BsDpadFill } from 'react-icons/bs'

const ArcadeMonthlyPlan = () => {
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
              <p className="plan_amount">$9/mo</p>
          </div>
       </button>
    </>
  )
}

export default ArcadeMonthlyPlan
