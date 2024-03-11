import {Link} from 'react-router-dom'
import '../../Styles/header.css'
import  logo from '../../Assets/logo.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import  {faUserPlus, faListUl} from "@fortawesome/free-solid-svg-icons";

/**
 * header with logo and links to create page and table page
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Header () {
    return (
        <div className="header">
            <Link to="/" className="header-logo"><img src={logo} alt="logo Wealth health"/> <span>Welcome on HRnet</span></Link>
            <div className="nav">
                <Link to="/" className="nav-link"><FontAwesomeIcon icon={faUserPlus} /> <span>Create a New Employee</span></Link>
                <Link to="/list" className="nav-link"><FontAwesomeIcon icon={faListUl} /><span>View Current employees</span></Link>
            </div>
        </div>
    )
}