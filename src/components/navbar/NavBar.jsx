import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import imgLogo from"../../assets/logo.png"
import "./Navbar.css"


const NavBar = () => {

    return(
        <div>
         
         <nav className="navbar navbar-expand-lg navbarestilos ">
           <div className="container-fluid">
           <Link to="/" className="navbar-brand"><img src={imgLogo} alt="logo" className="imglogo"/></Link>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav">
             <li className="nav-item">
               <Link to="/" className="nav-link letrashover" aria-current="page">Inicio</Link>
            </li>
            <li className="nav-item">
               <Link to="/category/Shonen" className="nav-link letrashover">Shonen</Link>
            </li>
            <li className="nav-item">
               <Link to="/category/Shojo" className="nav-link letrashover">Shojo</Link>
            </li>
            <li className="nav-item">
              
            </li>
           </ul>
      
              
        </div>
        </div>
        <div>
          <CartWidget />
        </div>
        </nav>
        

        </div>
    )
}

export default NavBar