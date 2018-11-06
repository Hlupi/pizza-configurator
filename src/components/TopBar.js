import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


const TopBar = (props) => {

  return (
    <AppBar position="absolute" style={{zIndex:10}} color="inherit">
      <Toolbar>
        <Typography variant="title" color="primary" style={{flex: 1}} align='left'>
          NewAgePizza
        </Typography>
        <p>It's a pizza time</p>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar;
