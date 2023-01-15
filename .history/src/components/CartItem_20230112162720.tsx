interface CartItemProps {
  id: number;
  quantity: number;
}
export function CartItem({ id, quantity }: CartItemProps) {
  return <h1>CartItem</h1>;
}
