import { Link } from "react-router-dom";
import { formatCurrency } from "../utilities/formatCurrency";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const quantity = 0;
  return (
    <div className="w-full bg-white rounded-lg shadow-md">
      <div className="">
        <Link to="#">
          <img
            src={imgUrl}
            alt="imgUrl"
            className="rounded-t-lg p-5 object-cover h-[200px] w-full"
          />
        </Link>
      </div>
      <div className="flex flex-col px-5">
        <div className="flex justify-between">
          <Link to="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">
              {name}
            </h5>
          </Link>
          <p className="text-gray-500 font-medium">{formatCurrency(price)}</p>
        </div>
        <div className="flex justify-center py-5">
          {quantity === 0 ? (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            >
              Default
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
