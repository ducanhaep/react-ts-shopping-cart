import { BsXLg } from "react-icons/bs";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

interface ShoppingCartProps {
  isOpen: boolean;
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCartContext();

  return (
    <div
      className={
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-400 opacity-0 translate-x-full  ")
      }
    >
      <div
        className={
          " w-screen max-w-xs md:max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-xs md:max-w-lg pb-10 flex flex-col overflow-y-scroll h-full">
          <div className="flex justify-between">
            <header className="p-4 font-bold text-lg">Cart</header>
            <span className="p-4">
              <BsXLg
                onClick={closeCart}
                className="cursor-pointer hover:text-red-500"
              />
            </span>
          </div>
          <div className="flex justify-between p-4">
            <div>
              {cartItems.map((item) => {
                const storeIndex = storeItems.findIndex(
                  (storeItem) => storeItem.id === item.id
                );
                console.log({ storeIndex });
                if (storeIndex) {
                  return <p key={storeIndex}> storeItems[storeIndex].name</p>;
                }
              })}
            </div>
            <div>right</div>
          </div>
        </article>
      </div>
      <div
        className="w-screen h-full cursor-pointer "
        onClick={closeCart}
      ></div>
    </div>
  );
}
