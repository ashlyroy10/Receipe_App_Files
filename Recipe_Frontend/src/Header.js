import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuBookIcon from '@mui/icons-material/MenuBook';


const Header = () => {
  return (
    <div>
        <AppBar>
            <Toolbar style={{backgroundColor:'brown'}}>
                <Typography style={{paddingRight:940}}><MenuBookIcon/> Juan's Kitchen</Typography>
                <Link to="/indian" style={{paddingRight:50,color:'white'}}>Indian</Link>
                <Link to="/chinese" style={{paddingRight:50,color:'white'}}>Chinese</Link>
                <Link to="/addnew" style={{paddingRight:50,color:'white'}}>Add New</Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header