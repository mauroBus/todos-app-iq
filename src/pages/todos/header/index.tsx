import React from 'react'
import t from 'format-message'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { getFirstLetter } from '../../../utils/get-first-letter'

type Props = {
  currentUser: UserType | null
}

export const Header = ({ currentUser }: Props) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        {currentUser && (
          <>
            <Chip
              variant="outlined"
              avatar={<Avatar>{getFirstLetter(currentUser.name)}</Avatar>}
            />
            <Typography variant="h5" color="inherit">
              {currentUser.name}
            </Typography>
            &emsp;
            <Typography color="inherit">
              {t('(Current User Randomly selected)')}
            </Typography>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}
