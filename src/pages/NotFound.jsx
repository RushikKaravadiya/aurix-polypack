import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-primary">Page not found</h1>
        <p className="mt-4 text-lg text-slate-600">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-8 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-white">Go Home</Link>
      </div>
    </main>
  )
}

export default NotFound
