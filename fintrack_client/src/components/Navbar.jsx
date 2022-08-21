import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <header>
    <div className="container">
      <Link to= "/">
        <h1> <font color = "#3D5AF1"> ₹Fin</font>&nbsp; Track</h1>
      </Link>
      <div className="nav">
      <Link to= "/">
      <span class="material-symbols-outlined">home</span>
        <h3>Home</h3>
      </Link>
      <Link to= "/plans">
      <span class="material-symbols-outlined">payments</span>
        <h3>Plans</h3>
      </Link>
      <Link to= "/investments">
      <span class="material-symbols-outlined">monitoring</span>
        <h3>Investments</h3>
      </Link>
      <Link to= "/emi">
      <span class="material-symbols-outlined">analytics</span>
        <h3>EMI</h3>
      </Link>
      <Link to= "/logout">
      <span class="material-symbols-outlined">Logout</span>
        <h3>Log Out</h3>
      </Link>
      </div>
    </div>
    </header>
   );
}
 
export default Navbar;