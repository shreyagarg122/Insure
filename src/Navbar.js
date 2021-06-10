import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1><b>
                <Link to="/Insure">INSURE</Link>
            </b></h1>
            <div className="links">
                <b>
                    <Link to="/work">HOW WE WORK</Link>
                    <Link to="/blog">BLOG</Link>
                    <Link to="/account">ACCOUNT</Link>
                    <Link to="/plans" style={{
                        color: 'hsl(0,0%,98%)',
                        backgroundColor:'hsl(256, 26%, 20%)',
                        padding:'5px 10px'
                        }}>VIEW PLANS</Link>
                </b>
            </div>
        </nav>
     );
}
 
export default Navbar;