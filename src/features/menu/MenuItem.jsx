import { formatCurrency } from "../../utils/helpers";
import Button from '../../ui/Button'

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name}  className={`h-24 ${soldOut? 'grayscale opacity-70': ''}`}
      />
      <div className="flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between mr-8">
          {!soldOut ? <p >{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}
          <Button type="small" >Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
