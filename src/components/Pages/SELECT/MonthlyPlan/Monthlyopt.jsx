import AdvancedMonthly from "./AdvancedMonthly"
import ArcadeMonthlyPlan from "./ArcadeMonthlyPlan"
import ProMonthly from "./ProMonthly"
import './Monthlyopt.scss'


const Monthlyopt = () => {
  return (
    <div className="monthlyPlan__wrapper">
       <ArcadeMonthlyPlan />
       <AdvancedMonthly />
       <ProMonthly />
    </div>
  )
}

export default Monthlyopt
