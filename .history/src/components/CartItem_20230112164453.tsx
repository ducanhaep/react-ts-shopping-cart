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
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="basis-2/5">
          <img
            className="w-full object-cover aspect-square"
            src={item?.imgUrl}
            alt={item?.imgUrl}
          />
        </div>
        <div className="flex flex-col align-center">
          <div>
            <span>{item?.name}</span> x{quantity}
          </div>
          <div>{formatCurrency(item!.price)}</div>
        </div>
      </div>
      <div>right</div>
    </div>
  );
}
