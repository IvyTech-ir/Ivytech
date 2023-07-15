import React from 'react';

export type NavbarItemTypes = 'default' | 'heading';

export interface NavbarItem {
    caption?: string;
    innreCaption?: string;
    link?: string;
    fa?: string;
    items?: Array<NavbarItem>;
    type?: NavbarItemTypes;
}

export interface NavbarGroupProps extends NavbarItem {}

export default function NavbarGroup({ items, caption, type, ...rest }: NavbarGroupProps) {
    if (type === 'default') {
        return (
            <>
                <hr className="sidebar-divider my-0"></hr>
                <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <hr className="sidebar-divider mb-2"></hr>
            </>
        );
    } else if (type === 'heading')
        return (
            <>
                <div className="sidebar-heading" {...rest}>
                    {caption}
                </div>
                {items?.map((item, index) => {
                    const id = `collapse_${index}`;
                    return (
                        <li className="nav-item">
                            <a
                                className="nav-link collapsed"
                                href="#"
                                data-toggle="collapse"
                                data-target={`#${id}`}
                                aria-expanded="true"
                                aria-controls="collapseTwo"
                            >
                                <i className={`fas fa-fw fa-${item.fa}`}></i>
                                <span>{item.caption}</span>
                            </a>
                            {item.items?.length > 0 && (
                                <div
                                    id={id}
                                    className="collapse"
                                    aria-labelledby="headingTwo"
                                    data-parent="#accordionSidebar"
                                >
                                    <div className="bg-white py-2 collapse-inner rounded">
                                        <h6 className="collapse-header">{item.innreCaption}</h6>
                                        {item.items.map(innerItem => {
                                            return (
                                                <a className="collapse-item" href="buttons.html">
                                                    {innerItem.caption}
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </li>
                    );
                })}
            </>
        );
}
