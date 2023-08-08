import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container-fluid">
        {/* BRAND */}
        <a className="navbar-brand" href="#">TiendaTienda</a>

        {/* Links */}
          <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Zapatillas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Buzos y Camperas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pantalones</a>
              </li>
          </ul>

        {/* Icon */}
        <CartWidget/>
        
      </div>
    </nav>
    )
}
export default NavBar;