import {FC} from 'react';
import {NavLink} from "react-router-dom";



const  CNavLink:FC = ({children}) =>{
    return (
        <NavLink>
            {children}
        </NavLink>
    );
}


export default CNavLink;