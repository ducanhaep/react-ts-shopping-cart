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
        <div>
          <img src={item?.imgUrl} alt={item?.imgUrl} />
        </div>
        <div className="flex flex-cols">
          <div>
            <span>{item?.name}</span> x{quantity}
          </div>
          <div>{formatCurrency(item?.price)}</div>
        </div>
      </div>
      <div>right</div>
    </div>
  );
}
