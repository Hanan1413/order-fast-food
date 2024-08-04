import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from '../cart/CartItem';
import { useSelector } from 'react-redux';





const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  const username = useSelector((state) => state.user.username);


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
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
