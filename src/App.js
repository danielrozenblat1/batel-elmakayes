import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import NavBarNew from './components/CourseNav/NavBarNew';
import SecondScreen from './screens/SecondScreen';
import AboutMeComponent from './components/me/Me';
import ByMe from './components/ByMe/ByMe';
import WhoIsFit from './components/fit/WhoFits';
import ForthScreen from './screens/ForthScreen';

function App() {
  return <>
  <NavBarNew/>
  <FirstScreen/>
  <SecondScreen/>
  <AboutMeComponent/>
  <WhoIsFit/>
  <ForthScreen/>
  <ByMe/>
  </>
}

export default App;
