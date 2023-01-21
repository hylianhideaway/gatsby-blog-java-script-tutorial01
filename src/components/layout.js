import * as React from 'react'
import {Link} from 'gatsby'


/* Page frame component. Hold stuff every page should show, then inserts unique page in */
const Layout = ({pageTitle,children}) => {
    return (
        <div>
            {/* Navigation Bar*/}
            <nav>
                <ul>
                    <li> <Link to={"/"}>Home</Link></li>
                    <li> <Link to={"/about"}>About</Link></li>
                </ul>
            </nav>
            {/* Where the content for the child page goes */}
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}


export default Layout

