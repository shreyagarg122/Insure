import {useHistory} from "react-router";
import pic from "./img/pi1.jpg"
import logo from "./img/logo.png";

const Insure = () => {
    
    const history=useHistory();

    const handlePlans=()=>{
        history.push('/plans/');
    }
    const handleMore=()=>{
        history.push('/work/')
    }

    return ( 
        <div className="insure">
            
            <header>
            <img src={pic} alt="pic" />
            <div className="head">
                <h1>Humanizing your insurance.</h1>
                <p>Get your life insurance coverage easier and faster. We blend our expertise 
                and technology to help you find the plan that’s right for you. Ensure you 
                and your loved ones are protected.</p>
                <button onClick={handlePlans}><b>VIEW PLANS</b></button>
            </div></header>
            <div className="hr"><hr /></div>
            
            <section className="different">
                <h1>We’re different</h1>
                <ul>
                    <li>
                        <img src={logo} alt="logo1" />
                        <h2>Snappy Process</h2>
                        <p>Our application process can be completed in minutes, not hours. Don’t get 
                        stuck filling in tedious forms.</p>
                    </li>
                    <li>
                        <img src={logo} alt="logo2" />
                        <h2>Affordable Prices</h2>
                        <p>We don’t want you worrying about high monthly costs. Our prices may be low, 
                        but we still offer the best coverage possible.</p>
                    </li>
                    <li>
                        <img src={logo} alt="logo3" />
                        <h2>People First</h2>
                        <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make 
                        sure you’re covered when you need it.</p>
                    </li>
                </ul>
            </section>
            <section className="more">
                <h1>Find out more about how we work</h1>
                <button onClick={handleMore}><b>HOW WE WORK</b></button>
            </section>
            <footer>
                <h1>INSURE</h1>
                <hr />
                <div className="comp">
                    <b>
                    <ul>
                        <h3>OUR COMPANY</h3>
                        <li>HOW WE WORK</li>
                        <li>WHY INSURE?</li>
                        <li>VIEW PLANS</li>
                        <li>REVIEWS</li>
                    </ul>
                    <ul>
                        <h3>HELP ME</h3>
                        <li>FAQ</li>
                        <li>TERMS OF USE</li>
                        <li>PRIVACY POLICY</li>
                        <li>COOKIES</li>
                    </ul>
                    <ul>
                        <h3>CONTACT</h3>
                        <li>SALES</li>
                        <li>SUPPORT</li>
                        <li>LIVE CHAT</li>
                    </ul>
                    <ul>
                        <h3>OTHERS</h3>
                        <li>CAREERS</li>
                        <li>PRESS</li>
                        <li>LICENSES</li>
                    </ul>
                    </b>
                </div>
            </footer>
        </div>
     );
}
 
export default Insure;