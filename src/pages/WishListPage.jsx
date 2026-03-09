import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../store/wishlistSlice'
import { addToCart } from '../store/cartSlice'
import { toINR } from '../utils/currency'

function WishlistPage() {
  const dispatch = useDispatch()
  const items = useSelector(state => state.wishlist.items)

  if (items.length === 0) return <p className="text-center mt-24">Your wishlist is empty.</p>

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 mt-16">
      <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-xl shadow p-4">
            <img src={item.image} alt={item.title} className="h-40 object-contain mx-auto" />
            <p className="text-sm font-medium mt-2 line-clamp-2">{item.title}</p>
            <p className="text-blue-600 font-bold mt-1">{toINR(item.price)}</p>
            <button
              onClick={() => dispatch(addToCart(item))}
              className="mt-2 w-full bg-blue-600 text-white py-1.5 rounded text-sm"
            >
              Add to Cart
            </button>
            <button
              onClick={() => dispatch(removeFromWishlist(item.id))}
              className="mt-1 w-full bg-red-100 text-red-500 py-1.5 rounded text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WishlistPage