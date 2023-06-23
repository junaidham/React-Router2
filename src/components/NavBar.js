import { Link, NavLink } from "react-router-dom";


function NavBar() {
  return <>
    <ul className="navbar">

      <li>
        <NavLink
          style={({ isActive }) => { return { color: isActive ? 'skyblue' : '' } }}
          className="nav-bar-link" to="/">Home</NavLink>
      </li>



      <li>
        <NavLink
          style={({ isActive }) => { return { color: isActive ? 'skyblue' : '' } }}
          className="nav-bar-link" to="/about">About</NavLink>
      </li>

      <li>
        <NavLink
          style={({ isActive }) => { return { color: isActive ? 'skyblue' : '' } }}
          className="nav-bar-link" to="/filter">Filter</NavLink>
      </li>

      <li>
        <Link
          className="nav-bar-link" to="contact">Contact</Link>
      </li>

      {/** Style use with NavLink
 *  <li> <NavLink className="nav-bar-link"  to="/">Home</NavLink></li>
 * <li> <NavLink className="nav-bar-link" style={{backgroundColor:'cadetblue'}} to="/">Home</NavLink></li>
 * <li> <NavLink className="nav-bar-link" style={({isActive})=>{return{backgroundColor:isActive?"green":"red"}}} to="/">Home</NavLink></li>
 * <li> <NavLink style={({isActive})=>{return{color:isActive? 'skyblue':''}}}className="nav-bar-link" to="/">Home</NavLink></li>
 * 
 *  */}


    </ul>
  </>
}

export default NavBar;


/**
 * React Router v6 tutorial 
 * https://youtu.be/9kPwmUlnYVk?list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM
 * 
 * Install React router version 6. : https://youtu.be/5vkoov53E0k?list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM
 * Setup Wrapper for React Router
 * Make Simple Link for Router
 * Make common component for Links
 * what is 404 page in react
 * Page not found in react router
 * 
 * *dynamic Routing with params : https://youtu.be/XxHv0OD7ea8?list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM
 * Why do we need Params with Route
 * Make components for params
 * Make route and link
 * Get params and learn in details
 * https://www.worldometers.info/coronavirus/ example web
 * 
 * *Link and Nav Link style : https://youtu.be/_umvdsSxKbg?list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM
 * Apply Link style to make NavBar
 * Replace  Link with NavLinks
 * Add style to NavLinks
 * Add class to NavLinks
 * Style with React Router
 * 
 * *Active Link : https://youtu.be/JQcP4F8UKBM?list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM
 * What is Active Link and why we need it
 * Active Link with Class
 * Active Link with Style
 * 
 * * use SearchParams and setSearchParmas : https://youtu.be/8M7d8T8ee3M?list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM
 * what is search params Hooks
 * Example of search Params
 * what is setSearchParams 
 * 
 * *Navigation on Click | Navigating programmatically : https://youtu.be/WUDIUfq-J2c?list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM
 * Make 2 button
 * Navigation on Click
 * Navigation on function calling 
 * 
 * * Nested Routing : https://youtu.be/gMSqIjigmeI?list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM
 * What is Nested Routing?
 * Make Pages for Nested Routing
 * Define Routes for Nested Routing
 * 
 * *useLocation Hooks | use Location : https://youtu.be/GlP2yASKjLM?list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM
 * How to use useLocation
 * Check location Object
 * Check parmas, state,hash, search, etc
 * 
 */