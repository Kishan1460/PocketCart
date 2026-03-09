import { useState } from 'react'
import { useSelector } from 'react-redux'

function CategoryFilter({ onCategorySelect }) {
  const categories = useSelector(state => state.products.categories)
  const [active, setActive] = useState('') // '' means "All"

  const handleClick = (category) => {
    setActive(category)
    if (onCategorySelect) onCategorySelect(category)
  }

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => handleClick('')}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
          active === '' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        All
      </button>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition ${
            active === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter