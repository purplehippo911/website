import "../styles/components/_footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container row">
                
            <Link className="logo">
                <img src="../assets/images/MuggieYellow.webp" alt="my logo" />
             </Link>

                <div className="social-links">
                    <a href="https://github.com/purplehippo911/" className="hero__item">
                        <img src="../assets/github.svg" alt="Check me out on Github" className="github" />
                    </a>
                    <a href="https://twitter.com/muggie43/" className="hero__item">
                        <img src="../assets/twitter.svg" alt="Check me out on Twitter" className="twitter"/>
                    </a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;