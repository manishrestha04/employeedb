import { useContext } from "react";
import Link from "./Link";
import { AuthContext } from '../context/Authcontext';


function Sidebar() {
    const { authState } = useContext(AuthContext);
    
    // Links to display before logging in
    const publicLinks = [
        { label: "Registration", path: '/' },
        { label: "Login", path: '/login' },
    ];

    // Links to display after logging in
    const privateLinks = [
        { label:'FA Data Entry', path:'/faentry'},
        { label:'FA Table', path:'/fatable'},
        { label: 'Dropdown', path: '/dropdown' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Buttons', path: '/buttons' },
        { label: 'Modal', path: '/modal' },
        { label: 'Table', path: '/table' },
        { label: 'Counter', path: '/counter' },
        { label: 'Change Password', path: '/changepassword' },
    ];

    // Conditionally rendering links based on the authState
    const linksToRender = authState.status ? privateLinks : publicLinks;

    const renderedLinks = linksToRender.map((link) => (
        <Link
            key={link.label}
            to={link.path}
            className="mb-3"
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
        >
            {link.label}
        </Link>
    ));

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderedLinks}
        </div>
    );
}

export default Sidebar;
