import { IconButton, InputAdornment, OutlinedInput, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

interface SearchBarProps{

}

export default function SearchBar(props: SearchBarProps) {
    const { } = props
    const theme = useTheme()

    return (
        <OutlinedInput
            id="outlined-adornment-password"
            type={'text'}
            style={{
                color: theme.palette.primary.main
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  <SearchIcon/>
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
    )
}
