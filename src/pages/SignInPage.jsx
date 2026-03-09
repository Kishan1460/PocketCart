import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'

function LoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,}$/

  const validate = () => {
    const errs = {}
    if (!form.email.includes('@')) errs.email = 'Invalid email'
    if (!passwordRegex.test(form.password))
      errs.password = 'Password must be at least 6 characters, include a letter and a special character.'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) return setErrors(errs)
    dispatch(login({ email: form.email }))
    navigate('/')
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="border w-full px-3 py-2 rounded outline-none focus:border-blue-500"
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            className="border w-full px-3 py-2 rounded outline-none focus:border-blue-500"
            placeholder="Min 6 alphanumeric characters"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage
