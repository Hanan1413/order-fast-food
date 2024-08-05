import { useState } from "react";
import { Form, json, redirect, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from '../../ui/Button';
import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../cart/CartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { clearCart } from "../cart/CartSlice";
import { formatCurrency } from "../../utils/helpers";;
import { useDispatch } from "react-redux";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );



function CreateOrder() {
 const [withPriority, setWithPriority] = useState(false);
  const formErrors = useActionData();
  const isSubmitting = navigation.state === 'submitting';
  const username = useSelector((state) => state.user.username);

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const dispatch = useDispatch();

  if(!cart.length)return <EmptyCart />

   
  // to change input value on typing
  // defaultValue


  return (
    <div className="ml-10" >
      <h2 className=" text-xl font-semibold mt-5 mb-8">Ready to order? Let's go!</h2>
      <button onClick={()=> dispatch(fetchAddress())}> Get Position</button>
      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center"> 
          <label className="sm:basis-40">First Name</label>
          <input type="text" name="customer" required className="input" defaultValue={username} />

        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label  className="sm:basis-40">Phone number</label>
            <input type="tel" name="phone" required   className="input"/>
        </div>
        {formErrors?.phone && formErrors.phone}

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label  className="sm:basis-40">Address</label>
            <input type="text" name="address" required   className="input"/>
        </div>

        <div className="mt-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority"  className="ml-3">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting}>{isSubmitting ? 'Placing order' : `Order Now ${formatCurrency(totalPrice)}`}</Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  // create and Object form form data
  const data = Object.fromEntries(formData);
  // Create an order object by spreading the form data object
  // Parse the 'cart' string as JSON and convert 'priority' to a boolean
  const order = {
    ...data,
    cart: JSON.parse(data.cart), // Parse 'cart' as a JSON object
    priority: data.priority === "true", // Convert 'priority' to a boolean
  };

  console.log(order);

  // newOrder is object come form api as Response of calling createOrder funciton
  const newOrder = await createOrder(order);

  // Do not over use 
  store.dispatch(clearCart());

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please giv us you correct phone number. We might need you to connect you.";
      if(Object.keys(errors).length > 0) return errors

  // Redirect to the newly created order's page using the newOrder's ID

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
