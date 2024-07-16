import { Outlet, Link } from 'react-router-dom'
import '../index.css'


const ThemeContex = React.createContext()

export function RenderNavbar(){
    return (
        <>
        <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/account">ACCOUNT</Link></li>
                <li><Link to="/account/login">LOGIN</Link> </li>
                <li><Link to="/account/register">REGISTER</Link> </li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
}








