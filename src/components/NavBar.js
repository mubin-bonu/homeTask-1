import {Link, NavLink} from "react-router-dom";

export function NavBar() {
    return(
        <ul style={{display: 'flex' ,listStyleType: 'none'}}>
            <li style={{marginRight: "15px"}}>
                <NavLink to="/" className="link">Home</NavLink>
            </li>
            <li style={{marginRight: "15px"}}>
                <NavLink to="/about" className="link">About</NavLink>
            </li>
            <li style={{marginRight: "15px"}}>
                <NavLink to="/services" className="link">Services</NavLink>
            </li>
            <li style={{marginRight: "15px"}}>
                <NavLink to="/contacts" className="link">Contacts</NavLink>
            </li>
            <li style={{marginRight: "15px"}}>
                <NavLink to="/users" className="link">Users</NavLink>
            </li>
        </ul>
    )
}