import storeItems from "../data/items.json";
export function Store() {
  return (
    <>
      <h1>Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4">
        {storeItems.map((item) => (
          <div>{item.name}</div>
        ))}
      </div>
    </>
  );
}
