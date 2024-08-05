import React from 'react'
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './CartSlice';
import { useDispatch } from 'react-redux';

function UpdateItemQuantity({pizzaId}) {

    const dispatch = useDispatch();
  return (

    <div className="flex items-center gap-1 md:gap-3">
    <Button type="round" onClick={()=> dispatch(decreaseItemQuantity(pizzaId))}>
      -
    </Button>
        <Button type="round" onClick={() =>dispatch(increaseItemQuantity(pizzaId))}>
        +
    </Button>
      </div>
  )
}

export default UpdateItemQuantity
