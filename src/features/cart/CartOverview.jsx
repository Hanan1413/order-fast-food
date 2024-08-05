import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './CartSlice';
import {formatCurrency} from '../../utils/helpers'



function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity)return null ;
  
  return (
    <div className= "flex justify-between bg-stone-800 px-4 py-4 text-stone-200 text-sm uppercase p-4 sm:px-6 md:text-base  ">
      <p className="space-x-4 font-semibold text-stone-300  sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span> { formatCurrency ( totalCartPrice)} </span>
      </p>
      <Link to='/cart' >Open Cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
