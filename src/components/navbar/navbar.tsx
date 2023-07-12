import React  from 'react';
import NavbarGroup, { NavbarItem } from '../navbarGroup/navbarGroup';
interface NavbarProps{
    Items:Array<NavbarItem>
}
export default function Navbar({Items,...rest}: NavbarProps) {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" {...rest}>
            {Items.map(item=>{return <NavbarGroup {...item} ></NavbarGroup>})}
        </ul>
    );
}
