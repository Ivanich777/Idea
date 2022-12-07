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
          <IconButton edge="end" aria-label="delete"
          >
            <DeleteIcon onClick={handleDeleteBasketItem} 
            style={{paddingRight:'30px'}}/>
          </IconButton>
        }
        style={{borderBottom:'2px solid #FFE4C4', borderRadius:'10px'}}
      >
        <img src={`${item.Images[0].path}`} style={{ width: '100px',height:'100px' ,borderRadius:'10px'}}></img>
        <div className='component' style={{display:'flex',flexDirection:'column', paddingLeft:'60px'}}>
        <ListItemText
          primary={`${item?.title}`}
        />
        <ListItemText primary={`Артикул: ${item?.article}`}
        style={{fontFamily:'Georgia, serif', letterSpacing:'2.0px'}}
        />
         </div>
         <div className='component_two' style={{display:'flex',flexDirection:'column',paddingLeft:'300px'}}>
        <ListItemText
          primary={`${item?.price} ₽`}
        />
        <ListItemText primary={`кол-во:${item?.orderCount}`} />
        </div>
      </ListItem>
    </Box >
  )
}
export default BasketElement;
