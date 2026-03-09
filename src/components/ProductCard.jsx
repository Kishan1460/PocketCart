import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/cartSlice";
import { addToWishlist, removeFromWishlist } from "../store/wishlistSlice";
import { toINR } from "../utils/currency";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
  FaEye,
} from "react-icons/fa";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const inCart = cartItems.some((i) => i.id === product.id);
  const inWishlist = wishlistItems.some((i) => i.id === product.id);

  const handleWishlist = (e) => {
    e.stopPropagation();
    inWishlist
      ? dispatch(removeFromWishlist(product.id))
      : dispatch(addToWishlist(product));
  };

  const handleCart = (e) => {
    e.stopPropagation();
    inCart ? navigate("/cart") : dispatch(addToCart(product));
  };

  return (
    <div
      className="group bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer relative"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative overflow-hidden bg-gray-50 h-52 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          <button
            onClick={handleWishlist}
            className={`p-2 rounded-full shadow-md transition ${
              inWishlist
                ? "bg-red-500 text-white"
                : "bg-white text-gray-600 hover:bg-red-50 hover:text-red-500"
            }`}
            title={inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          >
            {inWishlist ? <FaHeart size={13} /> : <FaRegHeart size={13} />}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.id}`);
            }}
            className="p-2 rounded-full bg-white text-gray-600 shadow-md hover:bg-blue-50 hover:text-blue-600 transition"
            title="Quick View"
          >
            <FaEye size={13} />
          </button>
        </div>

        <div className="absolute top-3 left-3">
          <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            SALE
          </span>
        </div>
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-10">
          {product.title}
        </h3>

        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={10}
              className={
                i < Math.round(product.rating?.rate || 0)
                  ? "text-yellow-400"
                  : "text-gray-200"
              }
            />
          ))}
          <span className="text-xs text-gray-400 ml-1">
            ({product.rating?.count})
          </span>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-blue-600 font-bold text-lg">
            {toINR(product.price)}
          </span>
          <span className="text-gray-400 line-through text-sm">
            {toINR(product.price * 1.2)}
          </span>
        </div>

        <button
          onClick={handleCart}
          className={`mt-3 w-full py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
            inCart
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white active:scale-95"
          }`}
        >
          <FaShoppingCart size={12} />
          {inCart ? "Go to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
