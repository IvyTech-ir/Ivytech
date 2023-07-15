import React, { useEffect, useRef, useState } from 'react';
import Images from '../../assets/images/index';
import ChartAreaDemo from '../../assets/js/demo/chart-area-demo';
import ChartPieDemo from '../../assets/js/demo/chart-pie-demo';
function App(props) {
    var chartRef_Area = useRef();
    var chartRef_Pie = useRef();
    var _a = useState(false),
        ischartLoadded = _a[0],
        setIsChartLoaded = _a[1];
    useEffect(function () {
        if (!ischartLoadded) {
            ChartAreaDemo(chartRef_Area.current);
            ChartPieDemo(chartRef_Pie.current);
            setIsChartLoaded(true);
        }
    });
    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { id: 'wrapper' },
            React.createElement(
                'ul',
                { className: 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion', id: 'accordionSidebar' },
                React.createElement(
                    'a',
                    { className: 'sidebar-brand d-flex align-items-center justify-content-center', href: 'index.html' },
                    React.createElement(
                        'div',
                        { className: 'sidebar-brand-icon rotate-n-15' },
                        React.createElement('i', { className: 'fas fa-laugh-wink' }),
                    ),
                    React.createElement(
                        'div',
                        { className: 'sidebar-brand-text mx-3' },
                        'SB Admin ',
                        React.createElement('sup', null, '2'),
                    ),
                ),
                React.createElement('hr', { className: 'sidebar-divider my-0' }),
                React.createElement(
                    'li',
                    { className: 'nav-item active' },
                    React.createElement(
                        'a',
                        { className: 'nav-link', href: 'index.html' },
                        React.createElement('i', { className: 'fas fa-fw fa-tachometer-alt' }),
                        React.createElement('span', null, 'Dashboard'),
                    ),
                ),
                React.createElement('hr', { className: 'sidebar-divider' }),
                React.createElement('div', { className: 'sidebar-heading' }, 'Interface'),
                React.createElement(
                    'li',
                    { className: 'nav-item' },
                    React.createElement(
                        'a',
                        {
                            className: 'nav-link collapsed',
                            href: '#',
                            'data-toggle': 'collapse',
                            'data-target': '#collapseTwo',
                            'aria-expanded': 'true',
                            'aria-controls': 'collapseTwo',
                        },
                        React.createElement('i', { className: 'fas fa-fw fa-cog' }),
                        React.createElement('span', null, 'Components'),
                    ),
                    React.createElement(
                        'div',
                        {
                            id: 'collapseTwo',
                            className: 'collapse',
                            'aria-labelledby': 'headingTwo',
                            'data-parent': '#accordionSidebar',
                        },
                        React.createElement(
                            'div',
                            { className: 'bg-white py-2 collapse-inner rounded' },
                            React.createElement('h6', { className: 'collapse-header' }, 'Custom Components:'),
                            React.createElement('a', { className: 'collapse-item', href: 'buttons.html' }, 'Buttons'),
                            React.createElement('a', { className: 'collapse-item', href: 'cards.html' }, 'Cards'),
                        ),
                    ),
                ),
                React.createElement(
                    'li',
                    { className: 'nav-item' },
                    React.createElement(
                        'a',
                        {
                            className: 'nav-link collapsed',
                            href: '#',
                            'data-toggle': 'collapse',
                            'data-target': '#collapseUtilities',
                            'aria-expanded': 'true',
                            'aria-controls': 'collapseUtilities',
                        },
                        React.createElement('i', { className: 'fas fa-fw fa-wrench' }),
                        React.createElement('span', null, 'Utilities'),
                    ),
                    React.createElement(
                        'div',
                        {
                            id: 'collapseUtilities',
                            className: 'collapse',
                            'aria-labelledby': 'headingUtilities',
                            'data-parent': '#accordionSidebar',
                        },
                        React.createElement(
                            'div',
                            { className: 'bg-white py-2 collapse-inner rounded' },
                            React.createElement('h6', { className: 'collapse-header' }, 'Custom Utilities:'),
                            React.createElement(
                                'a',
                                { className: 'collapse-item', href: 'utilities-color.html' },
                                'Colors',
                            ),
                            React.createElement(
                                'a',
                                { className: 'collapse-item', href: 'utilities-border.html' },
                                'Borders',
                            ),
                            React.createElement(
                                'a',
                                { className: 'collapse-item', href: 'utilities-animation.html' },
                                'Animations',
                            ),
                            React.createElement(
                                'a',
                                { className: 'collapse-item', href: 'utilities-other.html' },
                                'Other',
                            ),
                        ),
                    ),
                ),
                React.createElement('hr', { className: 'sidebar-divider' }),
                React.createElement('div', { className: 'sidebar-heading' }, 'Addons'),
                React.createElement(
                    'li',
                    { className: 'nav-item' },
                    React.createElement(
                        'a',
                        {
                            className: 'nav-link collapsed',
                            href: '#',
                            'data-toggle': 'collapse',
                            'data-target': '#collapsePages',
                            'aria-expanded': 'true',
                            'aria-controls': 'collapsePages',
                        },
                        React.createElement('i', { className: 'fas fa-fw fa-folder' }),
                        React.createElement('span', null, 'Pages'),
                    ),
                    React.createElement(
                        'div',
                        {
                            id: 'collapsePages',
                            className: 'collapse',
                            'aria-labelledby': 'headingPages',
                            'data-parent': '#accordionSidebar',
                        },
                        React.createElement(
                            'div',
                            { className: 'bg-white py-2 collapse-inner rounded' },
                            React.createElement('h6', { className: 'collapse-header' }, 'Login Screens:'),
                            React.createElement('a', { className: 'collapse-item', href: 'login.html' }, 'Login'),
                            React.createElement('a', { className: 'collapse-item', href: 'register.html' }, 'Register'),
                            React.createElement(
                                'a',
                                { className: 'collapse-item', href: 'forgot-password.html' },
                                'Forgot Password',
                            ),
                            React.createElement('div', { className: 'collapse-divider' }),
                            React.createElement('h6', { className: 'collapse-header' }, 'Other Pages:'),
                            React.createElement('a', { className: 'collapse-item', href: '404.html' }, '404 Page'),
                            React.createElement('a', { className: 'collapse-item', href: 'blank.html' }, 'Blank Page'),
                        ),
                    ),
                ),
                React.createElement(
                    'li',
                    { className: 'nav-item' },
                    React.createElement(
                        'a',
                        { className: 'nav-link', href: 'charts.html' },
                        React.createElement('i', { className: 'fas fa-fw fa-chart-area' }),
                        React.createElement('span', null, 'Charts'),
                    ),
                ),
                React.createElement(
                    'li',
                    { className: 'nav-item' },
                    React.createElement(
                        'a',
                        { className: 'nav-link', href: 'tables.html' },
                        React.createElement('i', { className: 'fas fa-fw fa-table' }),
                        React.createElement('span', null, 'Tables'),
                    ),
                ),
                React.createElement('hr', { className: 'sidebar-divider d-none d-md-block' }),
                React.createElement(
                    'div',
                    { className: 'text-center d-none d-md-inline' },
                    React.createElement('button', { className: 'rounded-circle border-0', id: 'sidebarToggle' }),
                ),
                React.createElement(
                    'div',
                    { className: 'sidebar-card d-none d-lg-flex' },
                    React.createElement('img', {
                        className: 'sidebar-card-illustration mb-2',
                        src: Images.Undraw_rocket,
                        alt: '...',
                    }),
                    React.createElement(
                        'p',
                        { className: 'text-center mb-2' },
                        React.createElement('strong', null, 'SB Admin Pro'),
                        ' is packed with premium features, components, and more!',
                    ),
                    React.createElement(
                        'a',
                        { className: 'btn btn-success btn-sm', href: 'https://startbootstrap.com/theme/sb-admin-pro' },
                        'Upgrade to Pro!',
                    ),
                ),
            ),
            React.createElement(
                'div',
                { id: 'content-wrapper', className: 'd-flex flex-column' },
                React.createElement(
                    'div',
                    { id: 'content' },
                    React.createElement(
                        'nav',
                        { className: 'navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow' },
                        React.createElement(
                            'button',
                            { id: 'sidebarToggleTop', className: 'btn btn-link d-md-none rounded-circle mr-3' },
                            React.createElement('i', { className: 'fa fa-bars' }),
                        ),
                        React.createElement(
                            'form',
                            {
                                className:
                                    'd-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search',
                            },
                            React.createElement(
                                'div',
                                { className: 'input-group' },
                                React.createElement('input', {
                                    type: 'text',
                                    className: 'form-control bg-light border-0 small',
                                    placeholder: 'Search for...',
                                    'aria-label': 'Search',
                                    'aria-describedby': 'basic-addon2',
                                }),
                                React.createElement(
                                    'div',
                                    { className: 'input-group-append' },
                                    React.createElement(
                                        'button',
                                        { className: 'btn btn-primary', type: 'button' },
                                        React.createElement('i', { className: 'fas fa-search fa-sm' }),
                                    ),
                                ),
                            ),
                        ),
                        React.createElement(
                            'ul',
                            { className: 'navbar-nav ml-auto' },
                            React.createElement(
                                'li',
                                { className: 'nav-item dropdown no-arrow d-sm-none' },
                                React.createElement(
                                    'a',
                                    {
                                        className: 'nav-link dropdown-toggle',
                                        href: '#',
                                        id: 'searchDropdown',
                                        role: 'button',
                                        'data-toggle': 'dropdown',
                                        'aria-haspopup': 'true',
                                        'aria-expanded': 'false',
                                    },
                                    React.createElement('i', { className: 'fas fa-search fa-fw' }),
                                ),
                                React.createElement(
                                    'div',
                                    {
                                        className: 'dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in',
                                        'aria-labelledby': 'searchDropdown',
                                    },
                                    React.createElement(
                                        'form',
                                        { className: 'form-inline mr-auto w-100 navbar-search' },
                                        React.createElement(
                                            'div',
                                            { className: 'input-group' },
                                            React.createElement('input', {
                                                type: 'text',
                                                className: 'form-control bg-light border-0 small',
                                                placeholder: 'Search for...',
                                                'aria-label': 'Search',
                                                'aria-describedby': 'basic-addon2',
                                            }),
                                            React.createElement(
                                                'div',
                                                { className: 'input-group-append' },
                                                React.createElement(
                                                    'button',
                                                    { className: 'btn btn-primary', type: 'button' },
                                                    React.createElement('i', { className: 'fas fa-search fa-sm' }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            React.createElement(
                                'li',
                                { className: 'nav-item dropdown no-arrow mx-1' },
                                React.createElement(
                                    'a',
                                    {
                                        className: 'nav-link dropdown-toggle',
                                        href: '#',
                                        id: 'alertsDropdown',
                                        role: 'button',
                                        'data-toggle': 'dropdown',
                                        'aria-haspopup': 'true',
                                        'aria-expanded': 'false',
                                    },
                                    React.createElement('i', { className: 'fas fa-bell fa-fw' }),
                                    React.createElement(
                                        'span',
                                        { className: 'badge badge-danger badge-counter' },
                                        '3+',
                                    ),
                                ),
                                React.createElement(
                                    'div',
                                    {
                                        className:
                                            'dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in',
                                        'aria-labelledby': 'alertsDropdown',
                                    },
                                    React.createElement('h6', { className: 'dropdown-header' }, 'Alerts Center'),
                                    React.createElement(
                                        'a',
                                        { className: 'dropdown-item d-flex align-items-center', href: '#' },
                                        React.createElement(
                                            'div',
                                            { className: 'mr-3' },
                                            React.createElement(
                                                'div',
                                                { className: 'icon-circle bg-primary' },
                                                React.createElement('i', { className: 'fas fa-file-alt text-white' }),
                                            ),
                                        ),
                                        React.createElement(
                                            'div',
                                            null,
                                            React.createElement(
                                                'div',
                                                { className: 'small text-gray-500' },
                                                'December 12, 2019',
                                            ),
                                            React.createElement(
                                                'span',
                                                { className: 'font-weight-bold' },
                                                'A new monthly report is ready to download!',
                                            ),
                                        ),
                                    ),
                                    React.createElement(
                                        'a',
                                        { className: 'dropdown-item d-flex align-items-center', href: '#' },
                                        React.createElement(
                                            'div',
                                            { className: 'mr-3' },
                                            React.createElement(
                                                'div',
                                                { className: 'icon-circle bg-success' },
                                                React.createElement('i', { className: 'fas fa-donate text-white' }),
                                            ),
                                        ),
                                        React.createElement(
                                            'div',
                                            null,
                                            React.createElement(
                                                'div',
                                                { className: 'small text-gray-500' },
                                                'December 7, 2019',
                                            ),
                                            '$290.29 has been deposited into your account!',
                                        ),
                                    ),
                                    React.createElement(
                                        'a',
                                        { className: 'dropdown-item d-flex align-items-center', href: '#' },
                                        React.createElement(
                                            'div',
                                            { className: 'mr-3' },
                                            React.createElement(
                                                'div',
                                                { className: 'icon-circle bg-warning' },
                                                React.createElement('i', {
                                                    className: 'fas fa-exclamation-triangle text-white',
                                                }),
                                            ),
                                        ),
                                        React.createElement(
                                            'div',
                                            null,
                                            React.createElement(
                                                'div',
                                                { className: 'small text-gray-500' },
                                                'December 2, 2019',
                                            ),
                                            "Spending Alert: We've noticed unusually high spending for your account.",
                                        ),
                                    ),
                                    React.createElement(
                                        'a',
                                        { className: 'dropdown-item text-center small text-gray-500', href: '#' },
                                        'Show All Alerts',
                                    ),
                                ),
                            ),
                            React.createElement(
                                'li',
                                { className: 'nav-item dropdown no-arrow mx-1' },
                                React.createElement(
                                    'a',
                                    {
                                        className: 'nav-link dropdown-toggle',
                                        href: '#',
                                        id: 'messagesDropdown',
                                        role: 'button',
                                        'data-toggle': 'dropdown',
                                        'aria-haspopup': 'true',
                                        'aria-expanded': 'false',
                                    },
                                    React.createElement('i', { className: 'fas fa-envelope fa-fw' }),
                                    React.createElement('span', { className: 'badge badge-danger badge-counter' }, '7'),
                                ),
                                React.createElement(
                                    'div',
                                    {
                                        className:
                                            'dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in',
                                        'aria-labelledby': 'messagesDropdown',
                                    },
                                    React.createElement('h6', { className: 'dropdown-header' }, 'Message Center'),
                                    React.createElement(
                                        'a',
                                        { className: 'dropdown-item d-flex align-items-center', href: '#' },
                                        React.createElement(
                                            'div',
                                            { className: 'dropdown-list-image mr-3' },
                                            React.createElement('img', {
                                                className: 'rounded-circle',
                                                src: Images.Undraw_profile_1,
                                                alt: '...',
                                            }),
                                            React.createElement('div', { className: 'status-indicator bg-success' }),
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'font-weight-bold' },
                                            React.createElement(
                                                'div',
                                                { className: 'text-truncate' },
                                                "Hi there! I am wondering if you can help me with a problem I've been having.",
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'small text-gray-500' },
                                                'Emily Fowler \u00B7 58m',
                                            ),
                                        ),
                                    ),
                                    React.createElement(
                                        'a',
                                        { className: 'dropdown-item d-flex align-items-center', href: '#' },
                                        React.createElement(
                                            'div',
                                            { className: 'dropdown-list-image mr-3' },
                                            React.createElement('img', {
                                                className: 'rounded-circle',
                                                src: Images.Undraw_profile_2,
                                                alt: '...',
                                            }),
                                            React.createElement('div', { className: 'status-indicator' }),
                                        ),
                                        React.createElement(
                                            'div',
                                            null,
                                            React.createElement(
                                                'div',
                                                { className: 'text-truncate' },
                                                'I have the photos that you ordered last month, how would you like them sent to you?',
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'small text-gray-500' },
                                                'Jae Chun \u00B7 1d',
                                            ),
                                        ),
                                    ),
                                    React.createElement(
                                        'a',
                                        { className: 'dropdown-item d-flex align-items-center', href: '#' },
                                        React.createElement(
                                            'div',
                                            { className: 'dropdown-list-image mr-3' },
                                            React.createElement('img', {
                                                className: 'rounded-circle',
                                                src: Images.Undraw_profile_3,
                                                alt: '...',
                                            }),
                                            React.createElement('div', { className: 'status-indicator bg-warning' }),
                                        ),
                                        React.createElement(
                                            'div',
                                            null,
                                            React.createElement(
                                                'div',
                                                { className: 'text-truncate' },
                                                "Last month's report looks great, I am very happy with the progress so far, keep up the good work!",
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'small text-gray-500' },
                                                'Morgan Alvarez \u00B7 2d',
                                            ),
                                        ),
                                    ),
                                    React.createElement(
                                        'a',
                                        { className: 'dropdown-item d-flex align-items-center', href: '#' },
                                        React.createElement(
                                            'div',
                                            { className: 'dropdown-list-image mr-3' },
                                            React.createElement('img', {
                                                className: 'rounded-circle',
                                                src: 'https://source.unsplash.com/Mv9hjnEUHR4/60x60',
                                                alt: '...',
                                            }),
                                            React.createElement('div', { className: 'status-indicator bg-success' }),
                                        ),
                                        React.createElement(
                                            'div',
                                            null,
                                            React.createElement(
                                                'div',
                                                { className: 'text-truncate' },
                                                "Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...",
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'small text-gray-500' },
                                                'Chicken the Dog \u00B7 2w',
                                            ),
                                        ),
                                    ),
                                    React.createElement(
                                        'a',
                                        { className: 'dropdown-item text-center small text-gray-500', href: '#' },
                                        'Read More Messages',
                                    ),
                                ),
                            ),
                            React.createElement('div', { className: 'topbar-divider d-none d-sm-block' }),
                            React.createElement(
                                'li',
                                { className: 'nav-item dropdown no-arrow' },
                                React.createElement(
                                    'a',
                                    {
                                        className: 'nav-link dropdown-toggle',
                                        href: '#',
                                        id: 'userDropdown',
                                        role: 'button',
                                        'data-toggle': 'dropdown',
                                        'aria-haspopup': 'true',
                                        'aria-expanded': 'false',
                                    },
                                    React.createElement(
                                        'span',
                                        { className: 'mr-2 d-none d-lg-inline text-gray-600 small' },
                                        'Douglas McGee',
                                    ),
                                    React.createElement('img', {
                                        className: 'img-profile rounded-circle',
                                        src: Images.Undraw_profile_1,
                                    }),
                                ),
                                React.createElement(
                                    'div',
                                    {
                                        className: 'dropdown-menu dropdown-menu-right shadow animated--grow-in',
                                        'aria-labelledby': 'userDropdown',
                                    },
                                    React.createElement(
                                        'a',
                                        { className: 'dropdown-item', href: '#' },
                                        React.createElement('i', {
                                            className: 'fas fa-user fa-sm fa-fw mr-2 text-gray-400',
                                        }),
                                        'Profile',
                                    ),
                                    React.createElement(
                                        'a',
                                        { className: 'dropdown-item', href: '#' },
                                        React.createElement('i', {
                                            className: 'fas fa-cogs fa-sm fa-fw mr-2 text-gray-400',
                                        }),
                                        'Settings',
                                    ),
                                    React.createElement(
                                        'a',
                                        { className: 'dropdown-item', href: '#' },
                                        React.createElement('i', {
                                            className: 'fas fa-list fa-sm fa-fw mr-2 text-gray-400',
                                        }),
                                        'Activity Log',
                                    ),
                                    React.createElement('div', { className: 'dropdown-divider' }),
                                    React.createElement(
                                        'a',
                                        {
                                            className: 'dropdown-item',
                                            href: '#',
                                            'data-toggle': 'modal',
                                            'data-target': '#logoutModal',
                                        },
                                        React.createElement('i', {
                                            className: 'fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400',
                                        }),
                                        'Logout',
                                    ),
                                ),
                            ),
                        ),
                    ),
                    React.createElement(
                        'div',
                        { className: 'container-fluid' },
                        React.createElement('div', null, props.children),
                        React.createElement(
                            'div',
                            { className: 'd-sm-flex align-items-center justify-content-between mb-4' },
                            React.createElement('h1', { className: 'h3 mb-0 text-gray-800' }, 'Dashboard'),
                            React.createElement(
                                'a',
                                { href: '#', className: 'd-none d-sm-inline-block btn btn-sm btn-primary shadow-sm' },
                                React.createElement('i', { className: 'fas fa-download fa-sm text-white-50' }),
                                ' Generate Report',
                            ),
                        ),
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-xl-3 col-md-6 mb-4' },
                                React.createElement(
                                    'div',
                                    { className: 'card border-left-primary shadow h-100 py-2' },
                                    React.createElement(
                                        'div',
                                        { className: 'card-body' },
                                        React.createElement(
                                            'div',
                                            { className: 'row no-gutters align-items-center' },
                                            React.createElement(
                                                'div',
                                                { className: 'col mr-2' },
                                                React.createElement(
                                                    'div',
                                                    {
                                                        className:
                                                            'text-xs font-weight-bold text-primary text-uppercase mb-1',
                                                    },
                                                    'Earnings (Monthly)',
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'h5 mb-0 font-weight-bold text-gray-800' },
                                                    '$40,000',
                                                ),
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'col-auto' },
                                                React.createElement('i', {
                                                    className: 'fas fa-calendar fa-2x text-gray-300',
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-xl-3 col-md-6 mb-4' },
                                React.createElement(
                                    'div',
                                    { className: 'card border-left-success shadow h-100 py-2' },
                                    React.createElement(
                                        'div',
                                        { className: 'card-body' },
                                        React.createElement(
                                            'div',
                                            { className: 'row no-gutters align-items-center' },
                                            React.createElement(
                                                'div',
                                                { className: 'col mr-2' },
                                                React.createElement(
                                                    'div',
                                                    {
                                                        className:
                                                            'text-xs font-weight-bold text-success text-uppercase mb-1',
                                                    },
                                                    'Earnings (Annual)',
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'h5 mb-0 font-weight-bold text-gray-800' },
                                                    '$215,000',
                                                ),
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'col-auto' },
                                                React.createElement('i', {
                                                    className: 'fas fa-dollar-sign fa-2x text-gray-300',
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-xl-3 col-md-6 mb-4' },
                                React.createElement(
                                    'div',
                                    { className: 'card border-left-info shadow h-100 py-2' },
                                    React.createElement(
                                        'div',
                                        { className: 'card-body' },
                                        React.createElement(
                                            'div',
                                            { className: 'row no-gutters align-items-center' },
                                            React.createElement(
                                                'div',
                                                { className: 'col mr-2' },
                                                React.createElement(
                                                    'div',
                                                    {
                                                        className:
                                                            'text-xs font-weight-bold text-info text-uppercase mb-1',
                                                    },
                                                    'Tasks',
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'row no-gutters align-items-center' },
                                                    React.createElement(
                                                        'div',
                                                        { className: 'col-auto' },
                                                        React.createElement(
                                                            'div',
                                                            {
                                                                className:
                                                                    'h5 mb-0 mr-3 font-weight-bold text-gray-800',
                                                            },
                                                            '50%',
                                                        ),
                                                    ),
                                                    React.createElement(
                                                        'div',
                                                        { className: 'col' },
                                                        React.createElement(
                                                            'div',
                                                            { className: 'progress progress-sm mr-2' },
                                                            React.createElement('div', {
                                                                className: 'progress-bar bg-info',
                                                                role: 'progressbar',
                                                                style: { width: '50%' },
                                                            }),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'col-auto' },
                                                React.createElement('i', {
                                                    className: 'fas fa-clipboard-list fa-2x text-gray-300',
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-xl-3 col-md-6 mb-4' },
                                React.createElement(
                                    'div',
                                    { className: 'card border-left-warning shadow h-100 py-2' },
                                    React.createElement(
                                        'div',
                                        { className: 'card-body' },
                                        React.createElement(
                                            'div',
                                            { className: 'row no-gutters align-items-center' },
                                            React.createElement(
                                                'div',
                                                { className: 'col mr-2' },
                                                React.createElement(
                                                    'div',
                                                    {
                                                        className:
                                                            'text-xs font-weight-bold text-warning text-uppercase mb-1',
                                                    },
                                                    'Pending Requests',
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'h5 mb-0 font-weight-bold text-gray-800' },
                                                    '18',
                                                ),
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'col-auto' },
                                                React.createElement('i', {
                                                    className: 'fas fa-comments fa-2x text-gray-300',
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-xl-8 col-lg-7' },
                                React.createElement(
                                    'div',
                                    { className: 'card shadow mb-4' },
                                    React.createElement(
                                        'div',
                                        {
                                            className:
                                                'card-header py-3 d-flex flex-row align-items-center justify-content-between',
                                        },
                                        React.createElement(
                                            'h6',
                                            { className: 'm-0 font-weight-bold text-primary' },
                                            'Earnings Overview',
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'dropdown no-arrow' },
                                            React.createElement(
                                                'a',
                                                {
                                                    className: 'dropdown-toggle',
                                                    href: '#',
                                                    role: 'button',
                                                    id: 'dropdownMenuLink',
                                                    'data-toggle': 'dropdown',
                                                    'aria-haspopup': 'true',
                                                    'aria-expanded': 'false',
                                                },
                                                React.createElement('i', {
                                                    className: 'fas fa-ellipsis-v fa-sm fa-fw text-gray-400',
                                                }),
                                            ),
                                            React.createElement(
                                                'div',
                                                {
                                                    className:
                                                        'dropdown-menu dropdown-menu-right shadow animated--fade-in',
                                                    'aria-labelledby': 'dropdownMenuLink',
                                                },
                                                React.createElement(
                                                    'div',
                                                    { className: 'dropdown-header' },
                                                    'Dropdown Header:',
                                                ),
                                                React.createElement(
                                                    'a',
                                                    { className: 'dropdown-item', href: '#' },
                                                    'Action',
                                                ),
                                                React.createElement(
                                                    'a',
                                                    { className: 'dropdown-item', href: '#' },
                                                    'Another action',
                                                ),
                                                React.createElement('div', { className: 'dropdown-divider' }),
                                                React.createElement(
                                                    'a',
                                                    { className: 'dropdown-item', href: '#' },
                                                    'Something else here',
                                                ),
                                            ),
                                        ),
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'card-body' },
                                        React.createElement(
                                            'div',
                                            { className: 'chart-area' },
                                            React.createElement('canvas', { ref: chartRef_Area }),
                                        ),
                                    ),
                                ),
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-xl-4 col-lg-5' },
                                React.createElement(
                                    'div',
                                    { className: 'card shadow mb-4' },
                                    React.createElement(
                                        'div',
                                        {
                                            className:
                                                'card-header py-3 d-flex flex-row align-items-center justify-content-between',
                                        },
                                        React.createElement(
                                            'h6',
                                            { className: 'm-0 font-weight-bold text-primary' },
                                            'Revenue Sources',
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'dropdown no-arrow' },
                                            React.createElement(
                                                'a',
                                                {
                                                    className: 'dropdown-toggle',
                                                    href: '#',
                                                    role: 'button',
                                                    id: 'dropdownMenuLink',
                                                    'data-toggle': 'dropdown',
                                                    'aria-haspopup': 'true',
                                                    'aria-expanded': 'false',
                                                },
                                                React.createElement('i', {
                                                    className: 'fas fa-ellipsis-v fa-sm fa-fw text-gray-400',
                                                }),
                                            ),
                                            React.createElement(
                                                'div',
                                                {
                                                    className:
                                                        'dropdown-menu dropdown-menu-right shadow animated--fade-in',
                                                    'aria-labelledby': 'dropdownMenuLink',
                                                },
                                                React.createElement(
                                                    'div',
                                                    { className: 'dropdown-header' },
                                                    'Dropdown Header:',
                                                ),
                                                React.createElement(
                                                    'a',
                                                    { className: 'dropdown-item', href: '#' },
                                                    'Action',
                                                ),
                                                React.createElement(
                                                    'a',
                                                    { className: 'dropdown-item', href: '#' },
                                                    'Another action',
                                                ),
                                                React.createElement('div', { className: 'dropdown-divider' }),
                                                React.createElement(
                                                    'a',
                                                    { className: 'dropdown-item', href: '#' },
                                                    'Something else here',
                                                ),
                                            ),
                                        ),
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'card-body' },
                                        React.createElement(
                                            'div',
                                            { className: 'chart-pie pt-4 pb-2' },
                                            React.createElement('canvas', { id: 'myPieChart', ref: chartRef_Pie }),
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'mt-4 text-center small' },
                                            React.createElement(
                                                'span',
                                                { className: 'mr-2' },
                                                React.createElement('i', { className: 'fas fa-circle text-primary' }),
                                                ' Direct',
                                            ),
                                            React.createElement(
                                                'span',
                                                { className: 'mr-2' },
                                                React.createElement('i', { className: 'fas fa-circle text-success' }),
                                                ' Social',
                                            ),
                                            React.createElement(
                                                'span',
                                                { className: 'mr-2' },
                                                React.createElement('i', { className: 'fas fa-circle text-info' }),
                                                ' Referral',
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-lg-6 mb-4' },
                                React.createElement(
                                    'div',
                                    { className: 'card shadow mb-4' },
                                    React.createElement(
                                        'div',
                                        { className: 'card-header py-3' },
                                        React.createElement(
                                            'h6',
                                            { className: 'm-0 font-weight-bold text-primary' },
                                            'Projects',
                                        ),
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'card-body' },
                                        React.createElement(
                                            'h4',
                                            { className: 'small font-weight-bold' },
                                            'Server Migration ',
                                            React.createElement('span', { className: 'float-right' }, '20%'),
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'progress mb-4' },
                                            React.createElement('div', {
                                                className: 'progress-bar bg-danger',
                                                role: 'progressbar',
                                                style: { width: '20%' },
                                            }),
                                        ),
                                        React.createElement(
                                            'h4',
                                            { className: 'small font-weight-bold' },
                                            'Sales Tracking ',
                                            React.createElement('span', { className: 'float-right' }, '40%'),
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'progress mb-4' },
                                            React.createElement('div', {
                                                className: 'progress-bar bg-warning',
                                                role: 'progressbar',
                                                style: {
                                                    width: '40%',
                                                },
                                            }),
                                        ),
                                        React.createElement(
                                            'h4',
                                            { className: 'small font-weight-bold' },
                                            'Customer Database ',
                                            React.createElement('span', { className: 'float-right' }, '60%'),
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'progress mb-4' },
                                            React.createElement('div', {
                                                className: 'progress-bar',
                                                role: 'progressbar',
                                                style: {
                                                    width: '60%',
                                                },
                                            }),
                                        ),
                                        React.createElement(
                                            'h4',
                                            { className: 'small font-weight-bold' },
                                            'Payout Details ',
                                            React.createElement('span', { className: 'float-right' }, '80%'),
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'progress mb-4' },
                                            React.createElement('div', {
                                                className: 'progress-bar bg-info',
                                                role: 'progressbar',
                                                style: {
                                                    width: '80%',
                                                },
                                            }),
                                        ),
                                        React.createElement(
                                            'h4',
                                            { className: 'small font-weight-bold' },
                                            'Account Setup ',
                                            React.createElement('span', { className: 'float-right' }, 'Complete!'),
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'progress' },
                                            React.createElement('div', {
                                                className: 'progress-bar bg-success',
                                                role: 'progressbar',
                                                style: { width: '100%' },
                                            }),
                                        ),
                                    ),
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-lg-6 mb-4' },
                                        React.createElement(
                                            'div',
                                            { className: 'card bg-primary text-white shadow' },
                                            React.createElement(
                                                'div',
                                                { className: 'card-body' },
                                                'Primary',
                                                React.createElement(
                                                    'div',
                                                    { className: 'text-white-50 small' },
                                                    '#4e73df',
                                                ),
                                            ),
                                        ),
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-lg-6 mb-4' },
                                        React.createElement(
                                            'div',
                                            { className: 'card bg-success text-white shadow' },
                                            React.createElement(
                                                'div',
                                                { className: 'card-body' },
                                                'Success',
                                                React.createElement(
                                                    'div',
                                                    { className: 'text-white-50 small' },
                                                    '#1cc88a',
                                                ),
                                            ),
                                        ),
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-lg-6 mb-4' },
                                        React.createElement(
                                            'div',
                                            { className: 'card bg-info text-white shadow' },
                                            React.createElement(
                                                'div',
                                                { className: 'card-body' },
                                                'Info',
                                                React.createElement(
                                                    'div',
                                                    { className: 'text-white-50 small' },
                                                    '#36b9cc',
                                                ),
                                            ),
                                        ),
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-lg-6 mb-4' },
                                        React.createElement(
                                            'div',
                                            { className: 'card bg-warning text-white shadow' },
                                            React.createElement(
                                                'div',
                                                { className: 'card-body' },
                                                'Warning',
                                                React.createElement(
                                                    'div',
                                                    { className: 'text-white-50 small' },
                                                    '#f6c23e',
                                                ),
                                            ),
                                        ),
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-lg-6 mb-4' },
                                        React.createElement(
                                            'div',
                                            { className: 'card bg-danger text-white shadow' },
                                            React.createElement(
                                                'div',
                                                { className: 'card-body' },
                                                'Danger',
                                                React.createElement(
                                                    'div',
                                                    { className: 'text-white-50 small' },
                                                    '#e74a3b',
                                                ),
                                            ),
                                        ),
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-lg-6 mb-4' },
                                        React.createElement(
                                            'div',
                                            { className: 'card bg-secondary text-white shadow' },
                                            React.createElement(
                                                'div',
                                                { className: 'card-body' },
                                                'Secondary',
                                                React.createElement(
                                                    'div',
                                                    { className: 'text-white-50 small' },
                                                    '#858796',
                                                ),
                                            ),
                                        ),
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-lg-6 mb-4' },
                                        React.createElement(
                                            'div',
                                            { className: 'card bg-light text-black shadow' },
                                            React.createElement(
                                                'div',
                                                { className: 'card-body' },
                                                'Light',
                                                React.createElement(
                                                    'div',
                                                    { className: 'text-black-50 small' },
                                                    '#f8f9fc',
                                                ),
                                            ),
                                        ),
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-lg-6 mb-4' },
                                        React.createElement(
                                            'div',
                                            { className: 'card bg-dark text-white shadow' },
                                            React.createElement(
                                                'div',
                                                { className: 'card-body' },
                                                'Dark',
                                                React.createElement(
                                                    'div',
                                                    { className: 'text-white-50 small' },
                                                    '#5a5c69',
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-lg-6 mb-4' },
                                React.createElement(
                                    'div',
                                    { className: 'card shadow mb-4' },
                                    React.createElement(
                                        'div',
                                        { className: 'card-header py-3' },
                                        React.createElement(
                                            'h6',
                                            { className: 'm-0 font-weight-bold text-primary' },
                                            'Illustrations',
                                        ),
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'card-body' },
                                        React.createElement(
                                            'div',
                                            { className: 'text-center' },
                                            React.createElement('img', {
                                                className: 'img-fluid px-3 px-sm-4 mt-3 mb-4',
                                                style: { width: '25rem' },
                                                src: Images.Undraw_profile_1,
                                                alt: '...',
                                            }),
                                        ),
                                        React.createElement(
                                            'p',
                                            null,
                                            'Add some quality, svg illustrations to your project courtesy of ',
                                            React.createElement(
                                                'a',
                                                { target: '_blank', rel: 'nofollow', href: 'https://undraw.co/' },
                                                'unDraw',
                                            ),
                                            ', a constantly updated collection of beautiful svg images that you can use completely free and without attribution!',
                                        ),
                                        React.createElement(
                                            'a',
                                            { target: '_blank', rel: 'nofollow', href: 'https://undraw.co/' },
                                            'Browse Illustrations on unDraw \u2192',
                                        ),
                                    ),
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'card shadow mb-4' },
                                    React.createElement(
                                        'div',
                                        { className: 'card-header py-3' },
                                        React.createElement(
                                            'h6',
                                            { className: 'm-0 font-weight-bold text-primary' },
                                            'Development Approach',
                                        ),
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'card-body' },
                                        React.createElement(
                                            'p',
                                            null,
                                            'SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.',
                                        ),
                                        React.createElement(
                                            'p',
                                            { className: 'mb-0' },
                                            'Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.',
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    ),
                ),
                React.createElement(
                    'footer',
                    { className: 'sticky-footer bg-white' },
                    React.createElement(
                        'div',
                        { className: 'container my-auto' },
                        React.createElement(
                            'div',
                            { className: 'copyright text-center my-auto' },
                            React.createElement('span', null, 'Copyright \u00A9 Your Website 2021'),
                        ),
                    ),
                ),
            ),
        ),
        React.createElement(
            'a',
            { className: 'scroll-to-top rounded', href: '#page-top' },
            React.createElement('i', { className: 'fas fa-angle-up' }),
        ),
        React.createElement(
            'div',
            {
                className: 'modal fade',
                id: 'logoutModal',
                role: 'dialog',
                'aria-labelledby': 'exampleModalLabel',
                'aria-hidden': 'true',
            },
            React.createElement(
                'div',
                { className: 'modal-dialog', role: 'document' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'exampleModalLabel' },
                            'Ready to Leave?',
                        ),
                        React.createElement(
                            'button',
                            { className: 'close', type: 'button', 'data-dismiss': 'modal', 'aria-label': 'Close' },
                            React.createElement('span', { 'aria-hidden': 'true' }, '\u00D7'),
                        ),
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-body' },
                        'Select "Logout" below if you are ready to end your current session.',
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { className: 'btn btn-secondary', type: 'button', 'data-dismiss': 'modal' },
                            'Cancel',
                        ),
                        React.createElement('a', { className: 'btn btn-primary', href: 'login.html' }, 'Logout'),
                    ),
                ),
            ),
        ),
    );
}
export default App;
