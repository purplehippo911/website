import "../styles/components/_footer";

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container grid">
                <a href="https://github.com/purplehippo911/" className="github">
                    <img src="/assets/github.svg" alt="Check me out on Github" className="github" />
                </a>
                <a href="https://twitter.com/muggie43/" className="twitter">
                    <img src="/assets/twitter.svg" alt="Check me out on Twitter" className="twitter"/>
                </a>
            </div>
        </footer>
     );
}
 
export default Footer;