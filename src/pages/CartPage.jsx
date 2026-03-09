import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import { toINR } from "../utils/currency";

function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (items.length === 0)
    return <p className="text-center mt-24">Your cart is empty.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 mt-16">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-4 border-b py-4">
          <img
            src={item.image}
            alt={item.title}
            className="h-20 w-20 object-contain"
          />
          <div className="flex-1">
            <p className="font-medium">{item.title}</p>
            <p className="text-blue-600">{toINR(item.price)}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: Math.max(1, item.quantity - 1),
                  }),
                )
              }
              disabled={item.quantity <= 1}
              className="w-8 h-8 rounded border border-gray-300 text-lg font-bold disabled:opacity-40"
            >
              −
            </button>
            <span className="text-lg font-semibold w-6 text-center">
              {item.quantity}
            </span>
            <button
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: Math.min(99, item.quantity + 1),
                  }),
                )
              }
              disabled={item.quantity >= 99}
              className="w-8 h-8 rounded border border-gray-300 text-lg font-bold disabled:opacity-40"
            >
              +
            </button>
          </div>
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-red-500 text-sm"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="text-right mt-6">
        <p className="text-xl font-bold">Total: {toINR(total)}</p>
        <button className="mt-4 bg-green-500 text-white px-8 py-3 rounded font-semibold">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
