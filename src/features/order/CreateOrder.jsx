import { useState } from "react";
import { Form, json, redirect, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from '../../ui/Button'

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const formErrors = useActionData();
  const isSubmitting = navigation.state === 'submitting';


  return (
    <div className="ml-3" >
      <h2 className="my-3">Ready to order? Let's go!</h2>
      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST">
        <div>
          <label>First Name</label>
          <div>
          <input type="text" name="customer" required className="input" />

          </div>
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required   className="input"/>
          </div>
        </div>
        {formErrors?.phone && formErrors.phone}
        <div className="mt-2">
          <label>Address</label>
          <div>
            <input type="text" name="address" required   className="input"/>
          </div>
        </div>

        <div className="mt-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" >Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)}  />
       

            <Button disabled={isSubmitting} type="primary">
            {isSubmitting ? 'Placing order....' : 'Order now'}
          </Button>
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
    priority: data.priority === "on", // Convert 'priority' to a boolean
  };

  console.log(order);

  // newOrder is object come form api as Response of calling createOrder funciton
  const newOrder = await createOrder(order);

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please giv us you correct phone number. We might need you to connect you.";
      if(Object.keys(errors).length > 0) return errors

  // Redirect to the newly created order's page using the newOrder's ID

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
