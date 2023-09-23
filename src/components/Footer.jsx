import "../styles/components/_footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container row">
                
            <Link className="logo">
                <img src="../assets/icons/MuggieYellow.webp" alt="my logo" />
             </Link>

                <div className="social-links">
                    <a href="https://github.com/purplehippo911/" className="social-links__item btn">
                        <img src="../assets/icons/github.svg" alt="Check me out on Github" className="github" />
                    </a>
                    <a href="https://twitter.com/muggie43/" className="social-links__item btn">
                        <img src="../assets/icons/twitter.svg" alt="Check me out on Twitter" className="twitter"/>
                    </a>
                    <a href="mailto:muggie@duck.com" className="social-links__item btn">
                        <img src="../assets/icons/email.png/" alt="email icon" />
                    </a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;