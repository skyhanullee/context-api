import React, { useState } from 'react'
import { FormControl, Button, Grid, TextField, Box } from '@mui/material';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function ChangeName({ userName, handleSubmit }) {
  const [inputVal, setInputVal] = useState('')

  const handleClick = () => {
    if (inputVal) {

      handleSubmit(inputVal)
      setInputVal('')

    }
  }

  return (
    <Box sx={{ p: 2 }}>
      <Grid>
        <FormControl>
          <TextField id="my-input" label="name" aria-describedby="name-input" variant="outlined" value={inputVal} onChange={e => {
            setInputVal(e.target.value)
          }} />
          <Button sx={{ mt: 4 }} variant="contained" size='small' onClick={handleClick}>Submit</Button>
        </FormControl>

      </Grid>

      <p>Your name is: {userName}</p>
      <Link to='/'>Home</Link>
      {userName && <div>
        <Link to={`/${userName}`}>UserDetails</Link>
      </div>}

    </Box>

  )
}

ChangeName.propTypes = {
  handleSubmit: PropTypes.func,
  userName: PropTypes.string
}
