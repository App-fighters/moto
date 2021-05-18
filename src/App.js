import React from "react";
import { BrowserRouter,Link,Route} from 'react-router-dom'
import signinScreen from "./Backend/user/signinScreen"


function App() {
  return (
    <BrowserRouter>
    <header>
    <div>
      <Link className="App" to='/'>
        Moto
      </Link> 
    </div>
    <div>
      <Link to="/signin">Sign In</Link>
    </div>
    </header>
    <main>
      <Route path="/signin" component={signinScreen}></Route>
    </main>
    </BrowserRouter>
    
  );
}

export default App;
