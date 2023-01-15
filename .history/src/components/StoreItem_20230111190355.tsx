interface StoreItemProps {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
}
export function StoreItem(props: StoreItemProps) {
  return <h1>{props.name}</h1>;
}
