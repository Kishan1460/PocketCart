/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, fetchCategories, fetchByCategory  } from '../store/productsSlice'
import Banner from '../components/Banner'
import WhatWeSell from '../components/WhatWeSell'
import FAQSection from '../components/FAQSection'
import CategoryFilter from '../components/CategoryFilter'
import ProductCard from '../components/ProductCard'

const ITEMS_PER_PAGE = 9

function HomePage({ searchQuery = '' }) {
  const dispatch = useDispatch()
  const { items, loading } = useSelector(state => state.products)
  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
  }, [dispatch])

  // Reset page when search changes
  useEffect(() => {
    setPage(1)
  }, [searchQuery])

  const handleCategorySelect = (category) => {
    if (category) {
      dispatch(fetchByCategory(category))
    } else {
      dispatch(fetchProducts())
    }
    setPage(1)
  }

  const filtered = searchQuery
    ? items.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : items

  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)

  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <CategoryFilter onCategorySelect={handleCategorySelect} />
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {paginated.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded ${page === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <WhatWeSell />
      <FAQSection />
    </div>
  )
}

export default HomePage
