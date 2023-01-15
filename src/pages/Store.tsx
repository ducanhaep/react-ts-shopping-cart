import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
export function Store() {
  return (
    <>
      <h1 className="p-4">Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-8 md:gap-4">
        {storeItems.map((item) => (
          <StoreItem {...item} key={item.id} />
        ))}
      </div>
    </>
  );
}
