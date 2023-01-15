import { StoreItem } from "../components/StoreItem";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
export function Store() {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCartContext();
  return (
    <>
      <h1>Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-8 md:gap-4">
        {storeItems.map((item) => (
          <StoreItem {...item} key={item.id} />
        ))}
      </div>
    </>
  );
}
