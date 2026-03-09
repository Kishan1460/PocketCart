import { useNavigate } from 'react-router-dom'

function Banner() {
  const navigate = useNavigate()

  return (
    <div
      className="relative text-white py-24 px-8 text-center mt-16 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1B2A4A 0%, #2C3E6B 50%, #1B2A4A 100%)' }}
    >
      <div
        className="absolute -top-12.5 -right-12.5 w-72 h-72 rounded-full opacity-10"
        style={{ background: '#FF6B35' }}
      />
      <div
        className="absolute -bottom-15 -left-10 w-56 h-56 rounded-full opacity-10"
        style={{ background: '#FFD166' }}
      />

      <div className="inline-block mb-4">
        <span
          className="text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full"
          style={{ background: '#FF6B35', color: '#fff' }}
        >
          New Arrivals
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
        style={{ color: '#F5F0E8' }}
      >
        Shop the Best <br />
        <span style={{ color: '#FFD166' }}>Products Online</span>
      </h1>

      <p className="text-lg mb-8 opacity-80" style={{ color: '#F5F0E8' }}>
        Discover amazing deals across Electronics, Fashion & more
      </p>

      <div className="flex items-center justify-center gap-4 flex-wrap">
        <button
          onClick={() => navigate('/')}
          className="px-8 py-3 rounded-full font-bold text-white shadow-lg hover:scale-105 transition-transform duration-200"
          style={{ background: '#FF6B35' }}
        >
          Shop Now
        </button>
        <button
          onClick={() => navigate('/')}
          className="px-8 py-3 rounded-full font-bold border-2 hover:scale-105 transition-transform duration-200"
          style={{ borderColor: '#FFD166', color: '#FFD166', background: 'transparent' }}
        >
          View Categories
        </button>
      </div>
    </div>
  )
}

export default Banner