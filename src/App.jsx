import Sidebar from "./components/Sidebar-comp/Sidebar";
import './App.scss';
import './components/Props/ButtonProp/ButtonDiv/ButtonDiv.scss'
import PE from "./components/Pages/Personal Info/PersonalInfo";
import AddOns from "./components/Pages/ADD_ON/AddOns";
import SelectPlan from "./components/Pages/SELECT/SelectPlan";
import Summary from "./components/Pages/SUMMARY/Summary";
import {Route, Routes} from 'react-router-dom';


function App() {
  console.log(window.location)
  return (
    <div className="App">
      <div className="App__wrapper">
        <Sidebar />
       <div className="testing_cont">
          <Routes>
            <Route path='/' element={<PE />} />
            <Route path='/selectPlan' element={<SelectPlan />} />
            <Route path='/addOns' element={<AddOns />} />
            <Route path='/summary' element={<Summary />} />
         </Routes>
       </div>
      </div>
    </div>
  );
}

export default App;
