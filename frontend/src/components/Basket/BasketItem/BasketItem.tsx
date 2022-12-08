import React, { useEffect, useState } from 'react'
import { Box, Button, IconButton, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { BasketItem } from './State/state';
import { RootState, useAppDispatch } from '../../../store';
import { actualOrder, decreaseCount, deleteBasketItem, increaseCount } from '../../ProductCard/basketSlice';
import { useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function BasketElement({ item }: BasketItem | any): JSX.Element {
  const { user } = useSelector((state: RootState) => state.users);
  const dispatch = useAppDispatch();
  const [countItem, setCountItem] = useState(item.orderCount)


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

  const btn = {
    width: 3,
    height: 5,
    // background: '#FFE4B5',
    marginRight: 3,
    marginLeft: 3,
    paddingTop:'15px',
    border: 'solid 0px black',
    color: 'black'
};

  const handleDecreaseCount = () => {
    if (item.orderCount > 1) {      
      dispatch(decreaseCount(item.idOrderItem));
    }   
  }

  const handleIncreaseCount = () => {
    dispatch(increaseCount(item.idOrderItem));
  }

  return (
    <Box >
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete"
          >
            <DeleteIcon onClick={handleDeleteBasketItem}
              style={{ paddingRight: '9px', width: 40,
              height: 25, }} />
          </IconButton>
        }
        style={{ borderBottom: '2px solid #FFE4C4', borderRadius: '10px' ,display:'flex', flexDirection:'row'}}
      >
        <img src={`${item.Images[0].path}`} style={{ maxWidth: '100px',minWidth:'100px', height: '100px', borderRadius: '10px' }}></img>
        <div className='component' style={{ display: 'flex', flexDirection: 'column', paddingLeft: '60px' }}>
          <ListItemText
            primary={`${item?.title}`}
          />
          <ListItemText primary={`Артикул: ${item?.article}`}
            style={{ fontFamily: 'Georgia, serif', letterSpacing: '2.0px' }}
          />
        </div>
        <div className='component_two' style={{ display: 'flex', flexDirection: 'column', paddingLeft: '100px' }}>
          <ListItemText
            primary={`${item?.price}₽`}
          />
        
            </div>
          <div className='comp_3'style={{ display: 'flex', flexDirection: 'column', paddingLeft:'100px' }}>
            <div className='count' style={{display:'flex', flexDirection:'row'}}>
              <Button
                aria-label="reduce"
                onClick={handleDecreaseCount}
                style={btn}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <ListItemText>
                {` ${item.orderCount}`}
              </ListItemText>
              <Button
                aria-label="increase"
                onClick={handleIncreaseCount}
                style={btn}
              >
                <AddIcon fontSize="small" />
              </Button>
                </div>
          <ListItemText style={{textAlign:'center'}}
          primary={`Итого: ${item?.orderCount * item?.price}₽`} />
          </div>
      </ListItem>
    </Box >
  )
}
export default BasketElement;
