import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages & components
import Home from './pages/Home'
import Plans from './pages/Plans'
import Investments from './pages/Investments'
import Emi from './pages/Emi'
import Navbar from './components/Navbar'
import Head from "./components/Head";
import { Signup } from "./pages/signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Head/>
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/plans" 
              element={<Plans />} 
            />
            <Route 
              path="/investments" 
              element={<Investments />} 
            />
            <Route 
              path="/emi" 
              element={<Emi />} 
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
