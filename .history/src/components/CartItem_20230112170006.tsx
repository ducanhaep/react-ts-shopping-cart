import { BsXLg } from "react-icons/bs";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

interface CartItemProps {
  id: number;
  quantity: number;
}
export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCartContext();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;

  const totalPriceEachItem = formatCurrency(quantity * item.price);

  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <div className="basis-2/5">
          <img
            className="w-full object-cover aspect-square"
            src={item?.imgUrl}
            alt={item?.imgUrl}
          />
        </div>
        <div className="flex flex-col justify-center">
          <div>
            <span>{item?.name}</span> x{quantity}
          </div>
          <div>{formatCurrency(item.price)}</div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div>{totalPriceEachItem}</div>
        <button
          type="button"
          className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm p-2 text-center"
          onClick={() => removeFromCart(id)}
        >
          <BsXLg />
        </button>
      </div>
    </div>
  );
}
