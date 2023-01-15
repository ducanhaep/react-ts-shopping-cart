import { Link } from "react-router-dom";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md">
      <Link to="#">
        <img src={imgUrl} alt="imgUrl" className="rounded-t-lg p-8" />
      </Link>
    </div>
  );
}
