import { Fragment } from "react";
import { Link, useNavigate , useLocation} from "react-router-dom";


function Home(){
    const navigate = useNavigate();
    const navToPage = (url)=>{
        navigate(url)
    }

    const location = useLocation();

    console.warn(location)

    return<Fragment>
        <h1>Home Page</h1>
        <p>This is Home Page of our awesome App</p>
        <p>and here we are learning about Router</p>
        <Link to="/about">Go to About Page</Link>

        <br />
        <p>Use Navigate for Button click goto at Page.</p>
        <button onClick={()=>navToPage('/about')}>Goto About Page</button> 
        <br />
        <button onClick={()=>navToPage('/filter')}>Goto Filter Page</button>
    </Fragment>
}

export default Home;