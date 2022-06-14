import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

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
    },[])
    return (
        <countContext.Provider value={{ ...countState, setCountContext: setCountState }}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themes(customization)}>
                    <CssBaseline />
                    <NavigationScroll>
                        <Routes />
                    </NavigationScroll>
                </ThemeProvider>
            </StyledEngineProvider>
        </countContext.Provider>
    );
};

export default App;
