import logo from "../assets/logo-white.png";

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <img src={logo} className="footer-logo" alt="logo-footer" />
                <span>© 2023 Kasa. All rights reserved</span>
            </div>
        </div>
    );
}
