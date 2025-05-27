import { NavLink } from "react-router";

export default function Navbar() {
    return(
        <nav>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <NavLink to="/" className="btn btn-ghost text-xl normal-case">Home</NavLink>
                    <NavLink to="/blog" className="btn btn-ghost text-xl normal-case">Blog</NavLink>
                    <NavLink to="/projects" className="btn btn-ghost text-xl normal-case">Projects</NavLink>
                    <NavLink to="/about" className="btn btn-ghost text-xl normal-case">About</NavLink>
                    <NavLink to="/contact" className="btn btn-ghost text-xl normal-case">Contact</NavLink>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">Epic React Router</a>
                
                </div>
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to="/" className="btn btn-ghost text-xl normal-case">Home</NavLink>
                    <NavLink to="/blog" className="btn btn-ghost text-xl normal-case">Blog</NavLink>
                    <NavLink to="/projects" className="btn btn-ghost text-xl normal-case">Projects</NavLink>
                    <NavLink to="/about" className="btn btn-ghost text-xl normal-case">About</NavLink>
                    <NavLink to="/contact" className="btn btn-ghost text-xl normal-case">Contact</NavLink>
                </ul>
                </div>
                <div className="navbar-end">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
            </div> 
        </nav>  
    )
}