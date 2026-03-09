import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addToCart, updateQuantity } from "../store/cartSlice";
import { toINR } from "../utils/currency";
import { FaStar } from "react-icons/fa";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((i) => i.id === parseInt(id));
  const inCart = !!cartItem;
  const cartQuantity = cartItem ? cartItem.quantity : 0;

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 mt-16">
      <button onClick={() => navigate(-1)} className="mb-6 text-blue-600">
        ← Back
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 object-contain mx-auto"
        />
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <div className="flex items-center gap-1 text-yellow-400 mt-2">
            <FaStar />{" "}
            <span className="text-gray-600 text-sm">
              {product.rating?.rate} ({product.rating?.count} reviews)
            </span>
          </div>
          <p className="text-3xl font-bold text-blue-600 mt-3">
            {toINR(product.price)}
          </p>
          <p className="text-gray-600 mt-4 text-sm leading-relaxed">
            {product.description}
          </p>
          <p className="mt-3 text-sm capitalize text-gray-500">
            Category: {product.category}
          </p>
          {inCart && (
            <div className="mt-6">
              <p className="font-semibold mb-2 text-gray-700">
                Quantity in Cart
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: parseInt(id),
                        quantity: Math.max(1, cartQuantity - 1),
                      }),
                    )
                  }
                  disabled={cartQuantity <= 1}
                  className="w-9 h-9 rounded border border-gray-300 text-lg font-bold disabled:opacity-40"
                >
                  −
                </button>
                <span className="text-xl font-semibold w-8 text-center">
                  {cartQuantity}
                </span>
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: parseInt(id),
                        quantity: Math.min(99, cartQuantity + 1),
                      }),
                    )
                  }
                  disabled={cartQuantity >= 99}
                  className="w-9 h-9 rounded border border-gray-300 text-lg font-bold disabled:opacity-40"
                >
                  +
                </button>
              </div>
            </div>
          )}

          <button
            onClick={() =>
              inCart
                ? navigate("/cart")
                : dispatch(addToCart({ ...product, quantity: 1 }))
            }
            className={`mt-4 w-full py-3 rounded font-semibold ${inCart ? "bg-green-500 text-white" : "bg-blue-600 text-white"}`}
          >
            {inCart ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
