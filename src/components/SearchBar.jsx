import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchBar({ onSearch }) {
  const [show, setShow] = useState(false)
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className="flex items-center gap-2">
      <button onClick={() => setShow(!show)}>
        <FaSearch />
      </button>
      {show && (
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search products..."
          className="border rounded px-3 py-1 text-sm outline-none"
        />
      )}
    </div>
  )
}

export default SearchBar