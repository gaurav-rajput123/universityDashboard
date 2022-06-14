import React from "react";
import {
  Typography,
  Button,
  Grid,
  TextField,
  Link,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import PasswordBox from "./PasswordBox";
import img from "./crest.png";
import { NavLink } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import google from "./google.png";
import apple from "./apple.png";
import facebook from "./facebook.png";
import microsoft from "./microsoft.png";
import {useState, useEffect} from "react"
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router";

export default function Register() {
    const location = useLocation()
    const initialValues ={username: "",email:"", password:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});
        console.log(formValues);
    }
    
    const handleClick = ()=> {
        alert("path not set")
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

    }

    useEffect(() => {
       console.log(formErrors);
       if(Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
       }
    },[formErrors])

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username){
          errors.username = "Username is required";
        }
        if (!values.email){
          errors.email = "Email is required";
        }
        if (!values.password){
          errors.password = "Password is required";
        }

        return errors;
    }
    const navigate = useNavigate();
    

  const [data,setdata]=useState({
    name:"",
    email:"",
    username:"",
    phone:"",
    country:"",
    password:"",
    showPassword:false,
    emailExists:false
  });

  const togglePassword = () => {
    setdata({...data,showPassword:!data.showPassword})
  }

  console.log(location.search);
  const onSubmit=event=>{
    event.preventDefault();

    if(data.emailExists==false){
        axios({
        url:'https://api.keewesolutions.com/user/signup',
        method:'POST',
        data:{
          name:data.name,
          email:data.email,
          username:data.username,
          password:data.password,
          phone:'+91' + data.phone,
          country:"India"
        }
      })
      .then(
        (response) => {
          console.log(response.data);
          if(response.data==='UsernameExistsException'){
            alert("Public Username is not available. please change and retry registering")
          }
          else if(response.data==='CodeDeliveryFailureException'){
            alert("Registered Successfully please login with Username and Password")
            setdata({
              name:"",
              email:"",
              username:"",
              phone:"",
              country:"",
              password:"",
              showPassword:false
            })
            navigate("/login")
          }

          //after submit form redirect user
          navigate('/verify/', { state: {user:response.data.user.username,password:data.password,search:location.search}},{search:location.search});
      })
    // },[]);

      // console.log(user)
  }
  else{
    alert("please Change email address")
  }
  }


        


  
  return (
    
    <Grid container sx={{ width: "auto" }}>
      <form onSubmit={onSubmit}>
      <Grid item lg={8} xs={8} sm={8} md={8} sx={{ marginBottom: "10px" }} onSubmit={handleSubmit}>
        <TextField
        fullWidth
        label="Full name" 
        id="fullWidth"
        value={data.name}
        onChange={event=>{setdata({...data,name:event.target.value})}} />
        <p>{formErrors.username}</p>
      </Grid>
      {/* <Grid xs={4} /> */}
      <Grid item lg={8} xs={8} sm={8} md={8} sx={{ marginBottom: "10px" }}>
        <TextField 
        fullWidth 
        label="Email" 
        id="fullWidth"
        value={data.email}
        onChange={event=>{
          event.preventDefault();
          axios({
            method:'post',
            url:"https://api.keewesolutions.com/user/getUserByEmail",
            data:{
              email:event.target.value
            }
          }).then((response=>{
            console.log((response.data.Users).length)
            if((response.data.Users).length != 0){
              alert("Email already exist. please use another email address ")
              setdata({...data,emailExists:true})
            }
            else{
              setdata({...data,email:event.target.value,emailExists:false})
            }
          }
            ))
          setdata({...data,email:event.target.value})}} 
          />
        <p>{formErrors.email}</p>
      </Grid>
      {/* <Grid xs={4} /> */}
      <Grid item lg={8} xs={8} sm={8} md={8} sx={{ marginBottom: "10px" }}>
        <TextField
        fullWidth 
        label="Public username" 
        id="fullWidth"
        value={data.username}
        onChange={event=>setdata({...data,username:event.target.value})} />
      </Grid>
      {/* <Grid xs={4} /> */}
      <Grid item lg={8} xs={8} sm={8} md={8}>
      <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          fullWidth
            id="outlined-adornment-password"
            label="password"
            onChange={event=>setdata({...data,password:event.target.value})}
            type={data.showPassword ? 'text' : 'password'}
            value={data.password}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  // onClick={()=>{setShowPassword(true)}}
                  // onMouseDown={handleMouseDownPassword}
                  onClick={togglePassword}
                  edge="end"
                >
                  {data.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            
          />
          </FormControl>
          <p>{formErrors.password}</p>
      </Grid>
      <Grid item lg={8} xs={8} sm={8} md={8} sx={{ marginBottom: "10px" }}>
        <TextField
        fullWidth 
        label="10 digit Phone Number" 
        id="fullWidth"
        value={data.phone}
        onChange={event=>setdata({...data,phone:event.target.value})}
         />
      </Grid>
      {/* <Grid xs={4} /> */}
      {/* <Grid item lg={8} xs={8} sm={8} md={8}>
      <FormControl
      sx={{
        marginY: "12px",
      }}
      fullWidth
    >
      <InputLabel>Country</InputLabel>
      <Select label="countries" sx={{ width: "100%" }} value={data.country}>
        {countryList.map((country) => {
          return (
            <MenuItem value={country.toString()} key={country.toString()}>
              {country}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
      </Grid> */}
      {/* <Grid xs={4} /> */}
      <Grid item lg={8} xs={8} sm={8} md={8}>
        <FormControlLabelPosition />
      </Grid>
      {/* <Grid xs={4} /> */}
      <Grid item lg={8} xs={8} sm={8} md={8} sx={{textAlign: 'justify'}}>
        <Typography sx={{fontSize:"12px", marginBottom:"10px", textAlign: 'justify'}}>
          By creating an account, you agree to the Terms of Service and Honor
          Code and you acknowledge that MRSPTU and each Member process your
          personal data in accordance with the Privacy Policy.
        </Typography>
      </Grid>
      <Grid xs={4} />

      <Grid item xs={6} sx={{ marginTop: "10px" }}>
        
        
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "#06213F", borderRadius: "0px", marginBottom:"10px" }}
          >
            Create Account
          </Button>
       
      </Grid>
      {/* <Grid xs={4} /> */}
      {/* <Grid item xs={6} sx={{ marginBottom: "10px" }}>
        <Link
          sx={{
            color: "black",
            fontSize: "20px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Or register with:
        </Link>
      </Grid>

      <Grid xs={4} />

      <Grid container item xs={8}>
      <Grid item xs={6} sx={{ marginTop: "10px" }} sx={{
          padding: "4px 4px 4px 0"
      }}>
        <NavLink
          to={"/"}
          style={{
            textDecoration: "none",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              borderRadius: "0px",
              height: "100%",
              width: "100%",
            }}
            onClick={()=>{
                handleClick()
            }}
          ><img src={apple} alt="apple"/>
            Apple
          </Button>
        </NavLink>
      </Grid>

      <Grid item xs={6}  sx={{
        padding: "4px 4px 4px 0"
    }}>
        <NavLink
          to={"/"}
          style={{
            textDecoration: "none",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1877f2",
              borderRadius: "0px",
              height: "100%",
              width: "100%",
            }}
            onClick={()=>{
                handleClick()
            }}
          ><img src={facebook} alt="facebook"/>
            Facebook
          </Button>
        </NavLink>
      </Grid>

      <Grid item xs={6}  sx={{
        padding: "4px 4px 4px 0"
    }}>
        <NavLink
          to={"/"}
          style={{
            textDecoration: "none",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4285f4",
              borderRadius: "0px",
              height: "100%",
              width: "100%",
            }}
            onClick={()=>{
                handleClick()
            }}
          ><img src={google} alt="google"/>
            Google
          </Button>
        </NavLink>
      </Grid>
      <Grid item xs={6}  sx={{
        padding: "4px 4px 4px 0"
    }}>
        <NavLink
          to={"/"}
          style={{
            textDecoration: "none",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2f2f2f",
              borderRadius: "0px",
              height: "100%",
              width: "100%",
            }}
            onClick={()=>{
                handleClick()
            }}
          ><img src={microsoft} alt="microsoft"/>
            Microsoft
          </Button>
        </NavLink>
      </Grid></Grid> */}

      {/* <Grid item xs sx={{ position: "unset", bottom: 0, right: 0 }}>
        <img src={img} width="250px" height={"105px"} />
      </Grid> */}
      </form>
    </Grid>
  );
}

  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands",
  ];

function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset" sx={{ marginTop: "10px" }}>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          sx={{
              "& .MuiFormControlLabel-label": {
                  fontSize: "14px"
              }
          }}
          label="I agree that MRSPTU may send me marketing messages."
          labelPlacement="I agree that MRSPTU may send me marketing messages."
        />
      </FormGroup>
    </FormControl>
  );
}