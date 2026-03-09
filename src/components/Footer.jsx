import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12 py-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-3">PocketCart</h3>
          <p className="text-gray-400 text-sm">Your one-stop shop for everything.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">Email: support@pocketcart.com</p>
          <p className="text-gray-400 text-sm">Phone: +91 0011111222</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
