import React from 'react';
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography } from '@mui/material';
export default function Nav({ userName }) {
  return (
    <AppBar sx={{ mb: 3 }} position="static">
      <Toolbar>

        <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
          User React App
        </Typography>


        {userName ? <Typography variant="h6" color="inherit" component="div">
          {userName}
        </Typography> : <Typography variant="h6" color="inherit" component="div">
          Not Logged In
        </Typography>}

      </Toolbar>
    </AppBar>
  )
}

Nav.propTypes = {
  userName: PropTypes.string
}