import { AppBar, CssBaseline, Toolbar, Typography} from '@mui/material'
import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { Box } from '@mui/system';

const Layout = () => {
  return (
    <>
    <CssBaseline/>
    <AppBar position='fixed' color="inherit">
    <Toolbar>
    <Box component='div' sx={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>

    <Box component={NavLink} to='/' sx={{textDecoration: 'none', color: 'inherit'}}>
    <Typography variant="h4">
          Navbar
        </Typography>


    </Box>
    <Box sx={{display: 'flex'}}>

    

      <Box to='first' sx={{marginRight: '10px', textDecoration: 'none', color: 'black'}} component={NavLink} style={({ isActive }) => ({

background: isActive ? '#f0f5f5' : ''
})}>
  <Typography variant='body'>First</Typography>
  


      </Box>

      <Box to='/second' sx={{marginRight: '10px', textDecoration: 'none', color: 'black'}} component={NavLink} style={({ isActive }) => ({

background: isActive ? '#f0f5f5' : '',
})} >

  <Typography variant='body'>
  Second


  </Typography>

      
  




      </Box>





    </Box>


      
    </Box>

    



        
          


            
        
      </Toolbar>


    </AppBar>

    <Outlet/>
    
    </>
    
    
  )
}

export default Layout