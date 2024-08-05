import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import EmptyCart from './EmptyCart'
import CartItem from '../cart/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { getCart , clearCart} from './CartSlice';







function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();


   if(! cart.length) return <EmptyCart />
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">
        &larr; Back to menu
      </LinkButton>

      <h2 className='mt-7 tex-xl font-semibold mb-2 '>Your cart, {username}</h2>
      <ul className="divide-y divide-stone-200 mb-4 border-b pb-8">
        {cart.map((item)=>{
          return <CartItem  item={item}  key={item.pizzaId}/>
        })}
      </ul>



      <div className="space-x-4">
        <Button to="/order/new" >Order pizzas</Button>

        {/* <Link to=></Link> */}
        <Button type="secondary" onClick={ () => dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
