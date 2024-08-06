import { formatCurrency } from "../../utils/helpers";


function OrderItem({ item, isLoadingIngredients, ingredients}) {
  const { quantity, name, totalPrice  } = item;

  return (
    <li className="py-3 px-6">
      <div className=" flex items-center justify-between">
       <div>
       <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p>
         {isLoadingIngredients ? 'Loading...' : ingredients?.join(', ') || 'No ingredients available'}

        </p>
       </div>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
        </div>
    </li>
  );
}

export default OrderItem;
