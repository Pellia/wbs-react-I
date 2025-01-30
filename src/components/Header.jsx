import Navigation from "./Navigation";
import ReactLogo from "./../assets/react.svg";
import "./../styles.css";

const Header = () => {
    return (
        <header className="navbar">
            <img src={ReactLogo} alt="React Logo" />
            <Navigation />
        </header>
    );
};

export default Header;
