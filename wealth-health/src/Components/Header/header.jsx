import {Link} from 'react-router-dom'
import '../../Styles/header.css'
import  logo from '../../Assets/logo.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import  {faUserPlus, faListUl} from "@fortawesome/free-solid-svg-icons";

export default function Header () {
    return (
        <div className="header">
            <Link to="/" className="header-logo"><img src={logo} alt="logo Wealth health"/></Link>
            <div className="nav">
                <Link to="/" className="nav-link"><FontAwesomeIcon icon={faUserPlus} /> <span>Create a new employee</span></Link>
                <Link to="/list" className="nav-link"><FontAwesomeIcon icon={faListUl} /><span>Current employees</span></Link>
            </div>
        </div>
    )
}