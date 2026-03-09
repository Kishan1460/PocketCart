import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const faqs = [
  {
    question: "How long does delivery take?",
    answer: "Standard delivery takes 5-7 business days. Express delivery is available for select locations and takes 1-2 business days. You will receive tracking details once your order is shipped."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a hassle-free 30-day return policy. If you are not satisfied with your purchase for any reason, simply return it within 30 days of delivery for a full refund."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently we ship within India only. We are actively working to expand to international shipping and it will be available soon."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you will receive a tracking ID on your registered email. You can use it on our website or the courier partner's website to track your package in real time."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept UPI (PhonePe, Google Pay, Paytm), Credit/Debit cards (Visa, Mastercard, RuPay), Net Banking, and Cash on Delivery (COD) for eligible pin codes."
  },
  {
    question: "Is my payment information secure?",
    answer: "Absolutely. All transactions are protected by 256-bit SSL encryption. We never store your card details on our servers. Your payment data is processed securely through certified payment gateways."
  },
  {
    question: "How do I contact customer support?",
    answer: "Our support team is available 24/7. You can email us at support@shopsphere.com, call us at +91 98765 43210, or use the live chat option on our website."
  }
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Got questions? We have answers.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                openIndex === index
                  ? 'border-blue-300 shadow-md'
                  : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-200 ${
                  openIndex === index ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'
                }`}
              >
                <span className={`font-medium ${openIndex === index ? 'text-blue-700' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                <span className={`shrink-0 ml-4 p-1 rounded-full transition-colors duration-200 ${
                  openIndex === index ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {openIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 bg-white text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
