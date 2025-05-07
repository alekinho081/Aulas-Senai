import { Link } from "react-router-dom"
import './Menu.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';

export const Menu = () => {
    let [light, setLight] = useState(true)


    return (
        <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

        <BottomNavigation>
            <Link to='/'><BottomNavigationAction  icon={<HomeIcon sx={{color: 'white', fontSize:'30px'}}/>} /></Link>
            <Link to='/sobre'><BottomNavigationAction  icon={<InfoIcon sx={{color: 'white', fontSize:'30px'}}/>} /></Link>
            <Link to='/contato'><BottomNavigationAction  icon={<ContactPageIcon sx={{color: 'white', fontSize:'30px'}} />} /></Link>
        </BottomNavigation>

        <div style={{paddingRight:1}}>        
        { light ?  <IconButton 
        aria-label="Dark-Mode" 
        onClick={() => { 
            setLight(false)
        }}
        >
            <DarkModeIcon  sx={ {color:'white' ,fontSize:'30px'}} />
            </IconButton> :
         
        <IconButton 
        aria-label="Light-Mode" 
        onClick={() => {
            setLight(true)       
        }}
        >

            <LightModeIcon sx={{color:'black',fontSize:'30px'}}/>
            </IconButton> 
        }
        </div>

        </nav>
    )
}