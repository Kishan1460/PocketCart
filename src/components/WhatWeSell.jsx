import { FaShippingFast, FaUndo, FaHeadset, FaShieldAlt } from 'react-icons/fa'

const features = [
  {
    icon: <FaShippingFast size={32} className="text-blue-600" />,
    title: "Free Shipping",
    description: "Free shipping on all orders above ₹999. Get your products delivered to your doorstep."
  },
  {
    icon: <FaUndo size={32} className="text-blue-600" />,
    title: "Easy Returns",
    description: "Not satisfied? Return your product within 30 days for a full refund, no questions asked."
  },
  {
    icon: <FaHeadset size={32} className="text-blue-600" />,
    title: "24/7 Support",
    description: "Our customer support team is available round the clock to assist you with any queries."
  },
  {
    icon: <FaShieldAlt size={32} className="text-blue-600" />,
    title: "Secure Payments",
    description: "All transactions are encrypted and secured. Shop with confidence every time."
  }
]

function WhatWeSell() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Why Shop With Us</h2>
        <p className="text-center text-gray-500 mb-10">We make your shopping experience smooth and enjoyable</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-md transition p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeSell
