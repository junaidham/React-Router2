import { Fragment } from "react";
import { Link } from "react-router-dom";

function About(){
    return<Fragment>
        <h1>About Page</h1>
        <p>This is About Page of our awesome App</p>
        <p>and here we are learning about Router</p>
        <Link to="/">Go to Home Page</Link>

        <li><Link to="/user/user1">User1</Link></li>
        <li><Link to="/user/user2">User2</Link></li>

    </Fragment>
}

export default About;