// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: '',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Home',
            type: 'item',
            url: '/home',
            // icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'util-typography',
            title: 'Students',
            type: 'item',
            url: '/students',
            // icon: icons.Student,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Faculty',
            type: 'item',
            url: '/faculty',
            // icon: icons.IconPalette,
            breadcrumbs: false
        },
        // {
        //     id: 'util-shadow',
        //     title: 'Programs',
        //     type: 'item',
        //     url: '/utils/util-shadow',
        //     // icon: icons.IconShadow,
        //     breadcrumbs: false
        // },
        // {
        //     id: 'icons',
        //     title: 'Cells',
        //     type: 'collapse',
        //     icon: icons.IconWindmill,
        //     breadcrumbs: false
        // },
        {
            id: 'tabler-icons',
            title: 'Payment',
            type: 'item',
            url: '/payment',
            breadcrumbs: false
        },
        {
            id: 'material-icons',
            title: 'Courses',
            type: 'item',
            url: '/courses',
            breadcrumbs: false
        },
        // {
        //     id: 'sample-page',
        //     title: 'Colleges',
        //     type: 'item',
        //     url: '/sample-page',
        //     breadcrumbs: false
        // },
        // {
        //     id: 'material-icons',
        //     title: 'Logout',
        //     type: 'item',
        //     url: '/icons/material-icons',
        //     breadcrumbs: false
        // }
    ]
};

export default utilities;
