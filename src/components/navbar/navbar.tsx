import React from 'react';
import NavbarGroup, { NavbarItem } from '../navbarGroup/navbarGroup';
import Divider from '../divider/divider';
interface NavbarProps {
    items?: Array<NavbarItem>;
}
function Logo() {
    return (
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">
                SB Admin <sup>2</sup>
            </div>
        </a>
    );
}
function Menu({ items }: NavbarProps) {
    return (
        <>
            {items?.map(item => {
                return <NavbarGroup {...item}></NavbarGroup>;
            })}
        </>
    );
}
export default function Navbar({ items, ...rest }: NavbarProps) {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" {...rest}>
            <Logo></Logo>
            <Divider></Divider>
            <Menu items={items}></Menu>
        </ul>
    );
}
