import { Link, Outlet } from "react-router-dom";

export default function Contact() {
    return (
        <div>
            <h1>Contact Page</h1>
            <p>Hello, This is Contact Page</p>
            <p>we are group of developer</p>

            <ul className="navbar">
                <li>
                    <Link className="nav-bar-link-sub" to="channel">Channel</Link>
                </li>

                <li>
                    <Link className="nav-bar-link-sub" to="company">Company</Link>
                </li>
                <li>
                    <Link className="nav-bar-link-sub" to="other">Other</Link>
                </li>

            </ul>
            <Outlet />


        </div>
    );
}