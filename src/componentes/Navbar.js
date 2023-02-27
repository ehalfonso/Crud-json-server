import { NavLink } from "react-router-dom"
import './navbar.css'



const Navbar = () => {
    return (
        <section className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <NavLink to="/" className={({isActive}) =>  isActive ? 'active':""}>Home</NavLink>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/about" className={({isActive})=> isActive? 'active':""}>About me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/users" className={({isActive})=> isActive? 'active':""}>Users</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </section>
    )
}
export default Navbar
