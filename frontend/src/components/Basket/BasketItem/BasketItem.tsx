import React from 'react'
import { Box, IconButton, ListItem, ListItemText, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { State } from './State/state';

function BasketItem({ item }: { item: State }): JSX.Element {
  // console.log(item.Images);
  
  return (
    <Box>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
      >
        <img src={`${item.Images[0].path}`} style={{width: '100px'}}></img>
        <ListItemText
          primary={`${item?.title}`}
        />
                <ListItemText
          primary={`${item?.price} рублей`}
        />
      </ListItem>
    </Box >
  )
}
export default BasketItem;
