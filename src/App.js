import { Route, Routes} from "react-router-dom";
import HomePage from "./component/Homepage.component";
import Signin from "./component/Signin.component";
import Signup from "./component/Signup.component";



function App() {
  return (
    <>
    <div>
        
        <Routes>
          <Route path='/' element={<HomePage/>} ></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
        </Routes>
    </div>
    </>

  );
}

export default App;
