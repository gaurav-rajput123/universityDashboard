import { BrowserRouter, Routes, useRoutes, Route } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import config from 'config';
import { useState } from 'react';
import React, { lazy } from 'react';
import Verification from './Verification';
// project imports
import NewPassword from './NewPassword';
import ForgotPassword from './ForgotPasswordEmail';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import RegisterCard from './RegisterCard';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| ROUTING RENDER ||============================== //
export const isAuthContext = React.createContext({
    isAuth: false,
    setIsAuth: () => { }
})
export default function ThemeRoutes() {
    const [authState, setAuthState] = useState(false)
    const mainRoutes = [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        }
    ]

    return (
        // <BrowserRouter>
        <isAuthContext.Provider value={{ isAuth: authState, setIsAuth: setAuthState }}>

            {
                authState ? (
                    <Routes>
                        <Route path='/' element={<MainLayout />}>
                            {mainRoutes.map((item, index) => (
                                <Route path={item.path} element={item.element} key={item.path + index} />
                            ))}
                        </Route>

                    </Routes>
                ) : (
                    <Routes>
                        <Route path="/" element={<RegisterCard id={1} />} />
                        <Route path="register/" element={<RegisterCard id={0} />} />
                        <Route path="login/" element={<RegisterCard id={1} />} />
                        <Route path="verify/" element={<Verification />} />
                        <Route path="forgotpassword/" element={<ForgotPassword />} />
                        <Route path="changepassword/" element={<NewPassword />} />
                        {/* <Route path="/detail" element={<Agriculture dataArr={dataArr} />}/> */}
                    </Routes>
                )
            }

        </isAuthContext.Provider>
        // </BrowserRouter>
    )

}
