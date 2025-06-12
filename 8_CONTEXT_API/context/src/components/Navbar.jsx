import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            {/*<Link to="/">Home</Link> <br/>
            <Link to="/contact">Contatos</Link>*/}
            <NavLink to="/" className={({isActive}) =>(isActive ? "active" : "") }>Home</NavLink>
            <NavLink to="/contact" className={({isActive}) =>(isActive ? "active" : "") }>Contato</NavLink>
        </div>
    )
}

export default Navbar