import { Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';



function Basket() {
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  const {basket} = useSelector((state:RootState) => state.basket)
  return (
    <div>
      <Grid item xs={12} md={6} sx={{ width: '800px', margin: '100px' }}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Корзина
        </Typography>
        <Demo>
          <List >
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary="Single-line item"
              />
            </ListItem>
          </List>
        </Demo>
      </Grid>
    </div>
  )
}

export default Basket