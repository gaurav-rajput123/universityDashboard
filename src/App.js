import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainRoutes from 'routes/MainRoutes';
import AuthenticationRoutes from 'routes/AuthenticationRoutes';
// import { UserContext } from 'ContextFiles';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

// ==============================|| APP ||============================== //
import { countContext } from 'index';
import { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {
    const customization = useSelector((state) => state.customization);
    const [countState, setCountState] = useState({
        teacherCount: "",
        studentCount: "",
        courseCount: "",
    })
    // const [data, setData] = useState([])
    // const [user, setUser] = useState(false)
    // const [authState, setAuthState] = useState({
    //     authenticated: false,
    //     user: {},
    // })
    useEffect(() => {
        async function getCount() {
            try {
                const countData = await axios({
                    url: "https://api.keewesolutions.com/university/getcount",
                    method: "GET",
                })
                let newCountContext = {
                    teacherCount: countData.data.response.courseUser,
                    studentCount: countData.data.response.StudentCourse,
                    courseCount: countData.data.response.courseDetails,
                }
                setCountState(newCountContext)

            } catch (error) {
                alert(error)
            }
        }
        getCount()
    }, [])

    // const navigate = useNavigate()
    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem("keewe.lmsStorage");
    //     if (loggedInUser) {
    //         const foundUser = JSON.parse(loggedInUser);
    //         axios({
    //             url: "https://lmsapi.keewesolutions.com/check",
    //             // url: 'http://localhost:8081/check',
    //             method: "POST",
    //             data: {
    //                 token: foundUser.user.idToken
    //             }
    //         }).then(res => {
    //             if (res.data.callStatusCode === 200) {
    //                 let newAuthState = { ...authState }
    //                 newAuthState.authenticated = true
    //                 let newPayload = res.data.response
    //                 let newUser = {
    //                     id: newPayload['cognito:username'],
    //                     email: newPayload.email,
    //                     name: newPayload.name,
    //                     idToken: foundUser.user.idToken,
    //                     refreshToken: foundUser.user.refreshToken.token
    //                 }
    //                 newAuthState.user = newUser
    //                 setAuthState(newAuthState)
    //             } else {
    //                 navigate('/login')
    //             }
    //         }).catch(e => console.log(e))


    //     }
    // }, []);

    return (
        <countContext.Provider value={{ ...countState, setCountContext: setCountState }}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themes(customization)}>
                    <CssBaseline />
                    <NavigationScroll>
                        {/* <UserContext.Provider value={{...authState, setNewUser: setAuthState}}>
                            {authState.authenticated ? */}
                            <Routes>

                            </Routes>
                        {/* </UserContext.Provider> */}
                    </NavigationScroll>
                </ThemeProvider>
            </StyledEngineProvider>
        </countContext.Provider>
    );
};

export default App;
