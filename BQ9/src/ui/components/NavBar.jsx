import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav class="navbar" className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Principal
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className= { ({isActive}) => `nav-item nav-link ${isActive ? 'active':''} ` }
                        to="/Pedidos"
                    >
                        Pedidos
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active':''} ` }
                        to="/Ordenes"
                    >
                        Ordenes
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        Janeth
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        to="/Login"
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}