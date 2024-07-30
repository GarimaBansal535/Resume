import UserInterface from "./screens/UserInterface";
import DisplayResumeComponent from "./componenets/DisplayResumecomponent"
import {BrowserRouter,Routes,Route} from'react-router-dom';

function App(){
 return(<div>
      <BrowserRouter>
         <Routes>
              <Route element={<UserInterface/>} path="/userinterface" />
              <Route element={<DisplayResumeComponent />} path="/displayresume" />
              
            </Routes>
      </BrowserRouter>
  </div>)
}

export default App   