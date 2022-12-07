import React, { useEffect } from 'react'
import { Box, IconButton, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { BasketItem } from './State/state';
import { RootState, useAppDispatch } from '../../../store';
import { actualOrder, deleteBasketItem } from '../../ProductCard/basketSlice';
import { useSelector } from 'react-redux';

function BasketElement({ item }: BasketItem | any): JSX.Element {
  const { user } = useSelector((state: RootState) => state.users);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(actualOrder(user?.id!));
  // }, [])
  // console.log(item.Images);
  const handleDeleteBasketItem = () => {
    if (user) {
      dispatch(deleteBasketItem(item.id));

      const timer = setTimeout(() => {
        dispatch(actualOrder(user?.id!));
      }, 250);

      return () => {
        clearTimeout(timer);
      }
    }
  }

  return (
    <Box >
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon onClick={handleDeleteBasketItem} />
          </IconButton>
        }
      >
        <img src={`${item.Images[0].path}`} style={{ width: '100px' }}></img>
        <ListItemText
          primary={`${item?.title}`}
        />
        <ListItemText primary={`Артикул: ${item?.article}`} />

        <ListItemText
          primary={`${item?.price} рублей`}
        />
        <ListItemText primary={`${item?.orderCount}`} />
        <ListItemText primary={`Итого: ${item?.orderCount * item?.price}`} />

      </ListItem>
    </Box >
  )
}
export default BasketElement;
