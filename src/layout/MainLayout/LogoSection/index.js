import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase, Typography } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        <Logo />
        <Typography sx={{ fontSize: `'18px`, marginLeft: `'5px'`, color: '#616161' }}> MRSPTU Online </Typography>
    </ButtonBase>
);

export default LogoSection;
