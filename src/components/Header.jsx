import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/authSlice'
import logo from "../assets/logo.png"
import { FaShoppingCart, FaHeart, FaSearch, FaTimes } from 'react-icons/fa'

function Header({ onSearch }) {
  const cartCount = useSelector(state => state.cart.items.length)
  const wishlistCount = useSelector(state => state.wishlist.items.length)
  const { isLoggedIn, user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [searchOpen])

  const handleSearchOpen = () => {
    setSearchOpen(true)
  }

  const handleSearchClose = () => {
    setSearchOpen(false)
    setSearchQuery('')
    if (onSearch) onSearch('') 
  }

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
    if (onSearch) onSearch(value) 
  }

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="ShopSphere" className="h-10 w-10" />
          <span className="text-xl font-bold text-blue-700 hidden sm:inline">PocketCart</span>
        </Link>

        <div className="flex items-center gap-2 flex-1 justify-end">

          {searchOpen ? (
            <div className="flex items-center flex-1 max-w-md border border-blue-400 rounded-full overflow-hidden shadow-sm">
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search products..."
                className="flex-1 px-4 py-2 text-sm outline-none"
              />
              <button
                type="button"
                onClick={handleSearchClose}
                className="px-3 py-2 text-gray-500 hover:text-red-500 transition"
                title="Close search"
              >
                <FaTimes size={14} />
              </button>
            </div>
          ) : (
            <button
              onClick={handleSearchOpen}
              className="p-2 text-gray-600 hover:text-blue-600 transition"
              title="Search"
            >
              <FaSearch size={20} />
            </button>
          )}

          <Link to="/cart" className="relative p-2 text-gray-600 hover:text-blue-600 transition">
            <FaShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <Link to="/wishlist" className="relative p-2 text-gray-600 hover:text-red-500 transition">
            <FaHeart size={20} />
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <span className="hidden sm:block text-sm text-gray-600 truncate max-w-30">
                {user?.email}
              </span>
              <button
                onClick={() => dispatch(logout())}
                className="text-sm text-red-500 hover:underline"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}
        </div>

      </div>
    </header>
  )
}

export default Header