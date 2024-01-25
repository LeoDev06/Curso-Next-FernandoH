import { CartCounter } from "@/shopping-cart";

export default function CounterPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h1 className="font-bold">Counter Page</h1>
      <CartCounter />
    </div>
  );
}
