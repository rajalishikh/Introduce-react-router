import { Link, Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import './home.css';

const Home = () => {
    return (
        <div>
            <h1 className="text-red-600 bg-slate-800">Welcome to my home </h1>
            <ul className="home">
                <Link to="">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/Header">Header</Link>
                
            </ul>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;