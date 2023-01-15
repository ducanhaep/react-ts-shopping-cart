import { Link } from "react-router-dom";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
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
      <div className="flex justify-between px-5 py-5">
        <Link to="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            {name}
          </h5>
        </Link>
        <p className="text-regal-blue">{price}</p>
      </div>
    </div>
  );
}
